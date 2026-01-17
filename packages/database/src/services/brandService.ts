import db from '../db';
import type { Brand, PaginatedResult, PaginationParams } from '@perfume-catalog/shared';

// Helper to convert DB row to Brand
function rowToBrand(row: any): Brand {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description || '',
    image: row.image || '',
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export const brandService = {
  getAll(): Brand[] {
    const rows = db.prepare('SELECT * FROM brands ORDER BY name').all();
    return rows.map(rowToBrand);
  },

  getById(id: string): Brand | null {
    const row = db.prepare('SELECT * FROM brands WHERE id = ?').get(id);
    return row ? rowToBrand(row) : null;
  },

  getBySlug(slug: string): Brand | null {
    const row = db.prepare('SELECT * FROM brands WHERE slug = ?').get(slug);
    return row ? rowToBrand(row) : null;
  },

  getPaginated(params: PaginationParams): PaginatedResult<Brand> {
    const { page, pageSize } = params;
    const offset = (page - 1) * pageSize;

    const totalRow = db.prepare('SELECT COUNT(*) as count FROM brands').get() as { count: number };
    const total = totalRow.count;
    const totalPages = Math.ceil(total / pageSize);

    const rows = db.prepare('SELECT * FROM brands ORDER BY name LIMIT ? OFFSET ?').all(pageSize, offset);

    return {
      data: rows.map(rowToBrand),
      total,
      page,
      pageSize,
      totalPages,
    };
  },

  create(data: Omit<Brand, 'id' | 'createdAt' | 'updatedAt'>): Brand {
    const id = `brand-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO brands (id, name, slug, description, image, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, data.name, data.slug, data.description, data.image, now, now);

    return this.getById(id)!;
  },

  update(id: string, data: Partial<Brand>): Brand | null {
    const existing = this.getById(id);
    if (!existing) return null;

    const now = new Date().toISOString();
    const updated = { ...existing, ...data, updatedAt: now };

    db.prepare(`
      UPDATE brands 
      SET name = ?, slug = ?, description = ?, image = ?, updated_at = ?
      WHERE id = ?
    `).run(updated.name, updated.slug, updated.description, updated.image, now, id);

    return this.getById(id);
  },

  delete(id: string): boolean {
    const result = db.prepare('DELETE FROM brands WHERE id = ?').run(id);
    return result.changes > 0;
  },
};
