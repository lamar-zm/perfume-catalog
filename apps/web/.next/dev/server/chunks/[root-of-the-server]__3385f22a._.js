module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/packages/database/src/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "initializeDatabase",
    ()=>initializeDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs, [project]/node_modules/better-sqlite3)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("packages/database/src/db.ts")}`;
    }
};
;
;
;
;
// Get the directory of this file (works in ESM)
const __filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const __dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(__filename);
// Ensure data directory exists (relative to this package)
const dataDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(__dirname, '..', 'data');
if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(dataDir)) {
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(dataDir, {
        recursive: true
    });
}
const dbPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dataDir, 'perfume-catalog.db');
const db = new __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$29$__["default"](dbPath);
// Enable foreign keys
db.pragma('foreign_keys = ON');
function initializeDatabase() {
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
    console.log('✅ Database initialized successfully');
}
const __TURBOPACK__default__export__ = db;
}),
"[project]/packages/database/src/services/categoryService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryService",
    ()=>categoryService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/db.ts [app-route] (ecmascript)");
;
// Helper to convert DB row to Category
function rowToCategory(row) {
    return {
        id: row.id,
        name: row.name,
        slug: row.slug,
        description: row.description || '',
        image: row.image || '',
        createdAt: row.created_at,
        updatedAt: row.updated_at
    };
}
const categoryService = {
    getAll () {
        const rows = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM categories ORDER BY name').all();
        return rows.map(rowToCategory);
    },
    getById (id) {
        const row = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM categories WHERE id = ?').get(id);
        return row ? rowToCategory(row) : null;
    },
    getBySlug (slug) {
        const row = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM categories WHERE slug = ?').get(slug);
        return row ? rowToCategory(row) : null;
    },
    getPaginated (params) {
        const { page, pageSize } = params;
        const offset = (page - 1) * pageSize;
        const totalRow = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT COUNT(*) as count FROM categories').get();
        const total = totalRow.count;
        const totalPages = Math.ceil(total / pageSize);
        const rows = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM categories ORDER BY name LIMIT ? OFFSET ?').all(pageSize, offset);
        return {
            data: rows.map(rowToCategory),
            total,
            page,
            pageSize,
            totalPages
        };
    },
    create (data) {
        const id = `cat-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        const now = new Date().toISOString();
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`
      INSERT INTO categories (id, name, slug, description, image, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, data.name, data.slug, data.description, data.image, now, now);
        return this.getById(id);
    },
    update (id, data) {
        const existing = this.getById(id);
        if (!existing) return null;
        const now = new Date().toISOString();
        const updated = {
            ...existing,
            ...data,
            updatedAt: now
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`
      UPDATE categories 
      SET name = ?, slug = ?, description = ?, image = ?, updated_at = ?
      WHERE id = ?
    `).run(updated.name, updated.slug, updated.description, updated.image, now, id);
        return this.getById(id);
    },
    delete (id) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('DELETE FROM categories WHERE id = ?').run(id);
        return result.changes > 0;
    }
};
}),
"[project]/packages/database/src/services/brandService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brandService",
    ()=>brandService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/db.ts [app-route] (ecmascript)");
;
// Helper to convert DB row to Brand
function rowToBrand(row) {
    return {
        id: row.id,
        name: row.name,
        slug: row.slug,
        description: row.description || '',
        image: row.image || '',
        createdAt: row.created_at,
        updatedAt: row.updated_at
    };
}
const brandService = {
    getAll () {
        const rows = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM brands ORDER BY name').all();
        return rows.map(rowToBrand);
    },
    getById (id) {
        const row = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM brands WHERE id = ?').get(id);
        return row ? rowToBrand(row) : null;
    },
    getBySlug (slug) {
        const row = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM brands WHERE slug = ?').get(slug);
        return row ? rowToBrand(row) : null;
    },
    getPaginated (params) {
        const { page, pageSize } = params;
        const offset = (page - 1) * pageSize;
        const totalRow = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT COUNT(*) as count FROM brands').get();
        const total = totalRow.count;
        const totalPages = Math.ceil(total / pageSize);
        const rows = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM brands ORDER BY name LIMIT ? OFFSET ?').all(pageSize, offset);
        return {
            data: rows.map(rowToBrand),
            total,
            page,
            pageSize,
            totalPages
        };
    },
    create (data) {
        const id = `brand-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        const now = new Date().toISOString();
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`
      INSERT INTO brands (id, name, slug, description, image, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, data.name, data.slug, data.description, data.image, now, now);
        return this.getById(id);
    },
    update (id, data) {
        const existing = this.getById(id);
        if (!existing) return null;
        const now = new Date().toISOString();
        const updated = {
            ...existing,
            ...data,
            updatedAt: now
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`
      UPDATE brands 
      SET name = ?, slug = ?, description = ?, image = ?, updated_at = ?
      WHERE id = ?
    `).run(updated.name, updated.slug, updated.description, updated.image, now, id);
        return this.getById(id);
    },
    delete (id) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('DELETE FROM brands WHERE id = ?').run(id);
        return result.changes > 0;
    }
};
}),
"[project]/packages/database/src/services/perfumeService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "perfumeService",
    ()=>perfumeService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/db.ts [app-route] (ecmascript)");
;
// Helper to get images for a perfume
function getPerfumeImages(perfumeId) {
    const rows = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT url FROM perfume_images WHERE perfume_id = ? ORDER BY sort_order').all(perfumeId);
    return rows.map((r)=>r.url);
}
// Helper to convert DB row to Perfume
function rowToPerfume(row) {
    // Parse notes from JSON string
    let notes = [];
    try {
        notes = JSON.parse(row.notes || '[]');
    } catch  {
        notes = [];
    }
    return {
        id: row.id,
        title: row.title,
        description: row.description || '',
        price: row.price,
        discount: row.discount || 0,
        gender: row.gender || 'unisex',
        coverImage: row.cover_image || '',
        outOfStock: row.out_of_stock === 1,
        finalPrice: row.final_price,
        categoryId: row.category_id || '',
        brandId: row.brand_id || '',
        images: getPerfumeImages(row.id),
        notes,
        isFeatured: row.is_featured === 1,
        salesCount: row.sales_count || 0,
        createdAt: row.created_at,
        updatedAt: row.updated_at
    };
}
// Helper to save perfume images
function savePerfumeImages(perfumeId, images) {
    // Delete existing images
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('DELETE FROM perfume_images WHERE perfume_id = ?').run(perfumeId);
    // Insert new images
    const insertStmt = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`
    INSERT INTO perfume_images (id, perfume_id, url, sort_order) VALUES (?, ?, ?, ?)
  `);
    images.forEach((url, index)=>{
        insertStmt.run(`img-${perfumeId}-${index}`, perfumeId, url, index);
    });
}
const perfumeService = {
    getAll (params, filters, sort) {
        const { page, pageSize } = params;
        const offset = (page - 1) * pageSize;
        let whereClause = 'WHERE 1=1';
        const queryParams = [];
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
        const totalRow = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`SELECT COUNT(*) as count FROM perfumes ${whereClause}`).get(...queryParams);
        const total = totalRow.count;
        const totalPages = Math.ceil(total / pageSize);
        // Build sort clause
        let orderClause = 'ORDER BY created_at DESC';
        if (sort) {
            const fieldMap = {
                price: 'price',
                salesCount: 'sales_count',
                createdAt: 'created_at',
                title: 'title'
            };
            const dbField = fieldMap[sort.field] || 'created_at';
            orderClause = `ORDER BY ${dbField} ${sort.direction.toUpperCase()}`;
        }
        const rows = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`SELECT * FROM perfumes ${whereClause} ${orderClause} LIMIT ? OFFSET ?`).all(...queryParams, pageSize, offset);
        return {
            data: rows.map(rowToPerfume),
            total,
            page,
            pageSize,
            totalPages
        };
    },
    getById (id) {
        const row = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM perfumes WHERE id = ?').get(id);
        return row ? rowToPerfume(row) : null;
    },
    getMostSold (limit = 8) {
        const rows = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM perfumes ORDER BY sales_count DESC LIMIT ?').all(limit);
        return rows.map(rowToPerfume);
    },
    getFeatured (limit = 8) {
        const rows = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM perfumes WHERE is_featured = 1 LIMIT ?').all(limit);
        return rows.map(rowToPerfume);
    },
    getDiscounted (limit) {
        const query = limit ? 'SELECT * FROM perfumes WHERE discount > 0 ORDER BY discount DESC LIMIT ?' : 'SELECT * FROM perfumes WHERE discount > 0 ORDER BY discount DESC';
        const rows = limit ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(query).all(limit) : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(query).all();
        return rows.map(rowToPerfume);
    },
    getByCategory (categoryId, params) {
        return this.getAll(params, {
            categoryId
        });
    },
    getByBrand (brandId, params) {
        return this.getAll(params, {
            brandId
        });
    },
    getRelated (perfumeId, categoryId, limit = 4) {
        const rows = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM perfumes WHERE category_id = ? AND id != ? LIMIT ?').all(categoryId, perfumeId, limit);
        return rows.map(rowToPerfume);
    },
    create (data) {
        const id = `perf-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        const now = new Date().toISOString();
        const finalPrice = data.price - (data.discount || 0);
        const notesJson = JSON.stringify(data.notes || []);
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`
      INSERT INTO perfumes (id, title, description, price, discount, final_price, category_id, brand_id, gender, cover_image, notes, out_of_stock, sales_count, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, data.title, data.description, data.price, data.discount || 0, finalPrice, data.categoryId || null, data.brandId || null, data.gender || 'unisex', data.coverImage || '', notesJson, data.outOfStock ? 1 : 0, data.salesCount || 0, now, now);
        // Save images
        if (data.images && data.images.length > 0) {
            savePerfumeImages(id, data.images);
        }
        return this.getById(id);
    },
    update (id, data) {
        const existing = this.getById(id);
        if (!existing) return null;
        const now = new Date().toISOString();
        const price = data.price ?? existing.price;
        const discount = data.discount ?? existing.discount;
        const finalPrice = price - discount;
        const notesJson = JSON.stringify(data.notes ?? existing.notes);
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`
      UPDATE perfumes 
      SET title = ?, description = ?, price = ?, discount = ?, final_price = ?, 
          category_id = ?, brand_id = ?, gender = ?, cover_image = ?, notes = ?, out_of_stock = ?, sales_count = ?, updated_at = ?
      WHERE id = ?
    `).run(data.title ?? existing.title, data.description ?? existing.description, price, discount, finalPrice, (data.categoryId ?? existing.categoryId) || null, (data.brandId ?? existing.brandId) || null, data.gender ?? existing.gender ?? 'unisex', data.coverImage ?? existing.coverImage ?? '', notesJson, data.outOfStock ? 1 : 0, data.salesCount ?? existing.salesCount, now, id);
        // Update images if provided
        if (data.images) {
            savePerfumeImages(id, data.images);
        }
        return this.getById(id);
    },
    updateDiscount (id, discount) {
        const existing = this.getById(id);
        if (!existing) return null;
        const finalPrice = existing.price - discount;
        const now = new Date().toISOString();
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`
      UPDATE perfumes SET discount = ?, final_price = ?, updated_at = ? WHERE id = ?
    `).run(discount, finalPrice, now, id);
        return this.getById(id);
    },
    toggleFeatured (id) {
        const existing = this.getById(id);
        if (!existing) return null;
        const now = new Date().toISOString();
        const newFeatured = existing.isFeatured ? 0 : 1;
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`
      UPDATE perfumes SET is_featured = ?, updated_at = ? WHERE id = ?
    `).run(newFeatured, now, id);
        return this.getById(id);
    },
    delete (id) {
        // Images will be deleted by CASCADE
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('DELETE FROM perfumes WHERE id = ?').run(id);
        return result.changes > 0;
    }
};
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/packages/database/src/services/authService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/db.ts [app-route] (ecmascript)");
;
;
// Helper to convert DB row to Admin
function rowToAdmin(row) {
    return {
        id: row.id,
        email: row.email,
        displayName: row.display_name || 'مدير النظام',
        role: row.role || 'admin',
        createdAt: row.created_at
    };
}
const authService = {
    async signIn (credentials) {
        const { email, password } = credentials;
        const row = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM admins WHERE email = ?').get(email);
        if (!row) {
            return {
                success: false,
                error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
            };
        }
        const isValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, row.password);
        if (!isValid) {
            return {
                success: false,
                error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
            };
        }
        const admin = rowToAdmin(row);
        // Generate a simple token (in production, use JWT)
        const token = Buffer.from(`${admin.id}:${Date.now()}`).toString('base64');
        return {
            success: true,
            user: admin,
            token
        };
    },
    getById (id) {
        const row = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM admins WHERE id = ?').get(id);
        return row ? rowToAdmin(row) : null;
    },
    getByEmail (email) {
        const row = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM admins WHERE email = ?').get(email);
        return row ? rowToAdmin(row) : null;
    },
    async createAdmin (email, password, displayName = 'مدير النظام', role = 'admin') {
        const id = `admin-${Date.now()}`;
        const now = new Date().toISOString();
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].prepare(`
      INSERT INTO admins (id, email, password, display_name, role, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(id, email, hashedPassword, displayName, role, now);
        return this.getById(id);
    },
    validateToken (token) {
        try {
            const decoded = Buffer.from(token, 'base64').toString('utf-8');
            const [adminId] = decoded.split(':');
            return this.getById(adminId);
        } catch  {
            return null;
        }
    }
};
}),
"[project]/packages/database/src/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$services$2f$categoryService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/services/categoryService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$services$2f$brandService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/services/brandService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/services/perfumeService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$services$2f$authService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/services/authService.ts [app-route] (ecmascript)");
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initializeDatabase"])();
;
;
;
;
;
}),
"[project]/apps/web/src/app/api/perfumes/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/database/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/services/perfumeService.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const page = parseInt(searchParams.get('page') || '1');
        const pageSize = parseInt(searchParams.get('pageSize') || '12');
        const categoryId = searchParams.get('categoryId') || undefined;
        const brandId = searchParams.get('brandId') || undefined;
        const hasDiscount = searchParams.get('hasDiscount') === 'true';
        const search = searchParams.get('search') || undefined;
        const sortField = searchParams.get('sortField');
        const sortDirection = searchParams.get('sortDirection');
        // Special endpoints
        const endpoint = searchParams.get('endpoint');
        if (endpoint === 'most-sold') {
            const limit = parseInt(searchParams.get('limit') || '8');
            const data = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["perfumeService"].getMostSold(limit);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data
            });
        }
        // remove featured endpoint - most-sold handled separately
        if (endpoint === 'discounted') {
            const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : undefined;
            const data = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["perfumeService"].getDiscounted(limit);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data
            });
        }
        const filters = {
            categoryId,
            brandId,
            hasDiscount,
            search
        };
        const sort = sortField && sortDirection ? {
            field: sortField,
            direction: sortDirection
        } : undefined;
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["perfumeService"].getAll({
            page,
            pageSize
        }, filters, sort);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error('Error fetching perfumes:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'فشل تحميل العطور'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        // Validate required fields
        if (!body.title || !body.price) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'العنوان والسعر مطلوبان'
            }, {
                status: 400
            });
        }
        // Validate discount
        if (body.discount && body.discount >= body.price) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'الخصم يجب أن يكون أقل من السعر'
            }, {
                status: 400
            });
        }
        const perfume = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["perfumeService"].create({
            title: body.title,
            description: body.description || '',
            price: body.price,
            discount: body.discount || 0,
            gender: body.gender || 'unisex',
            coverImage: body.coverImage || '',
            outOfStock: body.outOfStock || false,
            categoryId: body.categoryId || '',
            brandId: body.brandId || '',
            salesCount: body.salesCount || 0,
            images: body.images || []
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: perfume,
            message: 'تم إضافة العطر بنجاح'
        });
    } catch (error) {
        console.error('Error creating perfume:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'فشل إضافة العطر'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3385f22a._.js.map