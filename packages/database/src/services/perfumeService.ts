import db from '../db';
import type { Perfume, PaginatedResult, PaginationParams, PerfumeFilters, SortOptions } from '@perfume-catalog/shared';

// Helper to get images for a perfume
function getPerfumeImages(perfumeId: string): string[] {
  const rows = db.prepare(
    'SELECT url FROM perfume_images WHERE perfume_id = ? ORDER BY sort_order'
  ).all(perfumeId) as { url: string }[];
  return rows.map((r) => r.url);
}

// Helper to convert DB row to Perfume
function rowToPerfume(row: any): Perfume {
  // Parse notes from JSON string
  let notes: string[] = [];
  try {
    notes = JSON.parse(row.notes || '[]');
  } catch {
    notes = [];
  }

  return {
    id: row.id,
    title: row.title,
    description: row.description || '',
    price: row.price,
    discount: row.discount || 0,
    finalPrice: row.final_price,
    categoryId: row.category_id || '',
    brandId: row.brand_id || '',
    images: getPerfumeImages(row.id),
    notes,
    isFeatured: row.is_featured === 1,
    salesCount: row.sales_count || 0,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

// Helper to save perfume images
function savePerfumeImages(perfumeId: string, images: string[]) {
  // Delete existing images
  db.prepare('DELETE FROM perfume_images WHERE perfume_id = ?').run(perfumeId);
  
  // Insert new images
  const insertStmt = db.prepare(`
    INSERT INTO perfume_images (id, perfume_id, url, sort_order) VALUES (?, ?, ?, ?)
  `);
  
  images.forEach((url, index) => {
    insertStmt.run(`img-${perfumeId}-${index}`, perfumeId, url, index);
  });
}

export const perfumeService = {
  getAll(
    params: PaginationParams,
    filters?: PerfumeFilters,
    sort?: SortOptions
  ): PaginatedResult<Perfume> {
    const { page, pageSize } = params;
    const offset = (page - 1) * pageSize;

    let whereClause = 'WHERE 1=1';
    const queryParams: any[] = [];

    if (filters?.categoryId) {
      whereClause += ' AND category_id = ?';
      queryParams.push(filters.categoryId);
    }

    if (filters?.brandId) {
      whereClause += ' AND brand_id = ?';
      queryParams.push(filters.brandId);
    }

    if (filters?.isFeatured !== undefined) {
      whereClause += ' AND is_featured = ?';
      queryParams.push(filters.isFeatured ? 1 : 0);
    }

    if (filters?.hasDiscount) {
      whereClause += ' AND discount > 0';
    }

    if (filters?.search) {
      whereClause += ' AND (title LIKE ? OR description LIKE ?)';
      const searchTerm = `%${filters.search}%`;
      queryParams.push(searchTerm, searchTerm);
    }

    // Get total count
    const totalRow = db.prepare(`SELECT COUNT(*) as count FROM perfumes ${whereClause}`).get(...queryParams) as { count: number };
    const total = totalRow.count;
    const totalPages = Math.ceil(total / pageSize);

    // Build sort clause
    let orderClause = 'ORDER BY created_at DESC';
    if (sort) {
      const fieldMap: Record<string, string> = {
        price: 'price',
        salesCount: 'sales_count',
        createdAt: 'created_at',
        title: 'title',
      };
      const dbField = fieldMap[sort.field] || 'created_at';
      orderClause = `ORDER BY ${dbField} ${sort.direction.toUpperCase()}`;
    }

    const rows = db.prepare(
      `SELECT * FROM perfumes ${whereClause} ${orderClause} LIMIT ? OFFSET ?`
    ).all(...queryParams, pageSize, offset);

    return {
      data: rows.map(rowToPerfume),
      total,
      page,
      pageSize,
      totalPages,
    };
  },

  getById(id: string): Perfume | null {
    const row = db.prepare('SELECT * FROM perfumes WHERE id = ?').get(id);
    return row ? rowToPerfume(row) : null;
  },

  getMostSold(limit: number = 8): Perfume[] {
    const rows = db.prepare(
      'SELECT * FROM perfumes ORDER BY sales_count DESC LIMIT ?'
    ).all(limit);
    return rows.map(rowToPerfume);
  },

  getFeatured(limit: number = 8): Perfume[] {
    const rows = db.prepare(
      'SELECT * FROM perfumes WHERE is_featured = 1 LIMIT ?'
    ).all(limit);
    return rows.map(rowToPerfume);
  },

  getDiscounted(limit?: number): Perfume[] {
    const query = limit
      ? 'SELECT * FROM perfumes WHERE discount > 0 ORDER BY discount DESC LIMIT ?'
      : 'SELECT * FROM perfumes WHERE discount > 0 ORDER BY discount DESC';
    const rows = limit ? db.prepare(query).all(limit) : db.prepare(query).all();
    return rows.map(rowToPerfume);
  },

  getByCategory(categoryId: string, params: PaginationParams): PaginatedResult<Perfume> {
    return this.getAll(params, { categoryId });
  },

  getByBrand(brandId: string, params: PaginationParams): PaginatedResult<Perfume> {
    return this.getAll(params, { brandId });
  },

  getRelated(perfumeId: string, categoryId: string, limit: number = 4): Perfume[] {
    const rows = db.prepare(
      'SELECT * FROM perfumes WHERE category_id = ? AND id != ? LIMIT ?'
    ).all(categoryId, perfumeId, limit);
    return rows.map(rowToPerfume);
  },

  create(data: Omit<Perfume, 'id' | 'createdAt' | 'updatedAt' | 'finalPrice'>): Perfume {
    const id = `perf-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date().toISOString();
    const finalPrice = data.price - (data.discount || 0);
    const notesJson = JSON.stringify(data.notes || []);

    db.prepare(`
      INSERT INTO perfumes (id, title, description, price, discount, final_price, category_id, brand_id, notes, is_featured, sales_count, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id, 
      data.title, 
      data.description, 
      data.price, 
      data.discount || 0, 
      finalPrice,
      data.categoryId || null, 
      data.brandId || null, 
      notesJson,
      data.isFeatured ? 1 : 0, 
      data.salesCount || 0,
      now, 
      now
    );

    // Save images
    if (data.images && data.images.length > 0) {
      savePerfumeImages(id, data.images);
    }

    return this.getById(id)!;
  },

  update(id: string, data: Partial<Perfume>): Perfume | null {
    const existing = this.getById(id);
    if (!existing) return null;

    const now = new Date().toISOString();
    const price = data.price ?? existing.price;
    const discount = data.discount ?? existing.discount;
    const finalPrice = price - discount;
    const notesJson = JSON.stringify(data.notes ?? existing.notes);

    db.prepare(`
      UPDATE perfumes 
      SET title = ?, description = ?, price = ?, discount = ?, final_price = ?, 
          category_id = ?, brand_id = ?, notes = ?, is_featured = ?, sales_count = ?, updated_at = ?
      WHERE id = ?
    `).run(
      data.title ?? existing.title,
      data.description ?? existing.description,
      price,
      discount,
      finalPrice,
      (data.categoryId ?? existing.categoryId) || null,
      (data.brandId ?? existing.brandId) || null,
      notesJson,
      (data.isFeatured ?? existing.isFeatured) ? 1 : 0,
      data.salesCount ?? existing.salesCount,
      now,
      id
    );

    // Update images if provided
    if (data.images) {
      savePerfumeImages(id, data.images);
    }

    return this.getById(id);
  },

  updateDiscount(id: string, discount: number): Perfume | null {
    const existing = this.getById(id);
    if (!existing) return null;

    const finalPrice = existing.price - discount;
    const now = new Date().toISOString();

    db.prepare(`
      UPDATE perfumes SET discount = ?, final_price = ?, updated_at = ? WHERE id = ?
    `).run(discount, finalPrice, now, id);

    return this.getById(id);
  },

  toggleFeatured(id: string): Perfume | null {
    const existing = this.getById(id);
    if (!existing) return null;

    const now = new Date().toISOString();
    const newFeatured = existing.isFeatured ? 0 : 1;

    db.prepare(`
      UPDATE perfumes SET is_featured = ?, updated_at = ? WHERE id = ?
    `).run(newFeatured, now, id);

    return this.getById(id);
  },

  delete(id: string): boolean {
    // Images will be deleted by CASCADE
    const result = db.prepare('DELETE FROM perfumes WHERE id = ?').run(id);
    return result.changes > 0;
  },
};
