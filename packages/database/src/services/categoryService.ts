import db from '../db';
import type { Category, PaginatedResult, PaginationParams } from '@perfume-catalog/shared';

// Helper to convert DB row to Category
function rowToCategory(row: any): Category {
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

export const categoryService = {
  getAll(): Category[] {
    const rows = db.prepare('SELECT * FROM categories ORDER BY name').all();
    return rows.map(rowToCategory);
  },

  getById(id: string): Category | null {
    const row = db.prepare('SELECT * FROM categories WHERE id = ?').get(id);
    return row ? rowToCategory(row) : null;
  },

  getBySlug(slug: string): Category | null {
    const row = db.prepare('SELECT * FROM categories WHERE slug = ?').get(slug);
    return row ? rowToCategory(row) : null;
  },

  getPaginated(params: PaginationParams): PaginatedResult<Category> {
    const { page, pageSize } = params;
    const offset = (page - 1) * pageSize;

    const totalRow = db.prepare('SELECT COUNT(*) as count FROM categories').get() as { count: number };
    const total = totalRow.count;
    const totalPages = Math.ceil(total / pageSize);

    const rows = db.prepare('SELECT * FROM categories ORDER BY name LIMIT ? OFFSET ?').all(pageSize, offset);

    return {
      data: rows.map(rowToCategory),
      total,
      page,
      pageSize,
      totalPages,
    };
  },

  create(data: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>): Category {
    const id = `cat-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO categories (id, name, slug, description, image, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, data.name, data.slug, data.description, data.image, now, now);

    return this.getById(id)!;
  },

  update(id: string, data: Partial<Category>): Category | null {
    const existing = this.getById(id);
    if (!existing) return null;

    const now = new Date().toISOString();
    const updated = { ...existing, ...data, updatedAt: now };

    db.prepare(`
      UPDATE categories 
      SET name = ?, slug = ?, description = ?, image = ?, updated_at = ?
      WHERE id = ?
    `).run(updated.name, updated.slug, updated.description, updated.image, now, id);

    return this.getById(id);
  },

  delete(id: string): boolean {
    const result = db.prepare('DELETE FROM categories WHERE id = ?').run(id);
    return result.changes > 0;
  },
};
