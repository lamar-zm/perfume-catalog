import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the directory of this file (works in ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure data directory exists (relative to this package)
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'perfume-catalog.db');
const db: any = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Initialize database schema
export function initializeDatabase() {
  // Categories table
  db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      description TEXT,
      image TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )
  `);

  // Brands table
  db.exec(`
    CREATE TABLE IF NOT EXISTS brands (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      description TEXT,
      image TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )
  `);

  // Perfumes table
  db.exec(`
    CREATE TABLE IF NOT EXISTS perfumes (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      discount REAL DEFAULT 0,
      final_price REAL NOT NULL,
      category_id TEXT,
      brand_id TEXT,
      notes TEXT DEFAULT '[]',
      is_featured INTEGER DEFAULT 0,
      sales_count INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
      FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE SET NULL
    )
  `);

  // Perfume images table (multiple images per perfume)
  db.exec(`
    CREATE TABLE IF NOT EXISTS perfume_images (
      id TEXT PRIMARY KEY,
      perfume_id TEXT NOT NULL,
      url TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0,
      FOREIGN KEY (perfume_id) REFERENCES perfumes(id) ON DELETE CASCADE
    )
  `);

  // Admin table
  db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      display_name TEXT,
      role TEXT DEFAULT 'admin',
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  // Create indexes for better performance
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_perfumes_category ON perfumes(category_id);
    CREATE INDEX IF NOT EXISTS idx_perfumes_brand ON perfumes(brand_id);
    CREATE INDEX IF NOT EXISTS idx_perfumes_sales ON perfumes(sales_count DESC);
    CREATE INDEX IF NOT EXISTS idx_perfume_images_perfume ON perfume_images(perfume_id);
  `);

  // Migration: Add notes column if it doesn't exist
  try {
    db.exec(`ALTER TABLE perfumes ADD COLUMN notes TEXT DEFAULT '[]'`);
    console.log('✅ Added notes column to perfumes table');
  } catch (e) {
    // Column already exists, ignore
  }

  // Migration: Add gender column if it doesn't exist
  try {
    db.exec(`ALTER TABLE perfumes ADD COLUMN gender TEXT DEFAULT 'unisex'`);
    console.log('✅ Added gender column to perfumes table');
  } catch (e) {
    // Column already exists, ignore
  }

  // Migration: Add cover_image column if it doesn't exist
  try {
    db.exec(`ALTER TABLE perfumes ADD COLUMN cover_image TEXT DEFAULT ''`);
    console.log('✅ Added cover_image column to perfumes table');
  } catch (e) {
    // Column already exists, ignore
  }

  // Migration: Add out_of_stock column if it doesn't exist
  try {
    db.exec(`ALTER TABLE perfumes ADD COLUMN out_of_stock INTEGER DEFAULT 0`);
    console.log('✅ Added out_of_stock column to perfumes table');
  } catch (e) {
    // Column already exists, ignore
  }

  // Migration: Convert non-English slugs to English-safe slugs
  try {
    const nonEnglishSlugRegex = /[^a-z0-9-]/;

    const brands = db.prepare('SELECT id, name, slug FROM brands').all() as { id: string; name: string; slug: string }[];
    for (const brand of brands) {
      if (nonEnglishSlugRegex.test(brand.slug)) {
        const newSlug = `brand-${brand.id.split('-').pop() || Date.now()}`;
        db.prepare('UPDATE brands SET slug = ? WHERE id = ?').run(newSlug, brand.id);
        console.log(`✅ Migrated brand slug: "${brand.slug}" → "${newSlug}"`);
      }
    }

    const categories = db.prepare('SELECT id, name, slug FROM categories').all() as { id: string; name: string; slug: string }[];
    for (const cat of categories) {
      if (nonEnglishSlugRegex.test(cat.slug)) {
        const newSlug = `category-${cat.id.split('-').pop() || Date.now()}`;
        db.prepare('UPDATE categories SET slug = ? WHERE id = ?').run(newSlug, cat.id);
        console.log(`✅ Migrated category slug: "${cat.slug}" → "${newSlug}"`);
      }
    }
  } catch (e) {
    console.error('⚠️ Error migrating slugs:', e);
  }

  console.log('✅ Database initialized successfully');
}

export default db;
