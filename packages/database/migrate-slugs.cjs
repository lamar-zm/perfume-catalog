const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'data', 'perfume-catalog.db');
const db = new Database(dbPath);

const nonEnglishSlugRegex = /[^a-z0-9-]/;

console.log('=== Migrating slugs to English-only ===\n');

// Migrate brands
const brands = db.prepare('SELECT id, name, slug FROM brands').all();
for (const brand of brands) {
  if (nonEnglishSlugRegex.test(brand.slug)) {
    const newSlug = 'brand-' + (brand.id.split('-').pop() || Date.now());
    db.prepare('UPDATE brands SET slug = ? WHERE id = ?').run(newSlug, brand.id);
    console.log(`Brand: "${brand.name}" slug: "${brand.slug}" -> "${newSlug}"`);
  } else {
    console.log(`Brand OK: "${brand.name}" slug: "${brand.slug}"`);
  }
}

// Migrate categories
const categories = db.prepare('SELECT id, name, slug FROM categories').all();
for (const cat of categories) {
  if (nonEnglishSlugRegex.test(cat.slug)) {
    const newSlug = 'category-' + (cat.id.split('-').pop() || Date.now());
    db.prepare('UPDATE categories SET slug = ? WHERE id = ?').run(newSlug, cat.id);
    console.log(`Category: "${cat.name}" slug: "${cat.slug}" -> "${newSlug}"`);
  } else {
    console.log(`Category OK: "${cat.name}" slug: "${cat.slug}"`);
  }
}

console.log('\n=== After migration ===');
console.log('\nBrands:');
db.prepare('SELECT name, slug FROM brands').all().forEach(b => console.log(`  ${b.name} -> ${b.slug}`));
console.log('\nCategories:');
db.prepare('SELECT name, slug FROM categories').all().forEach(c => console.log(`  ${c.name} -> ${c.slug}`));

db.close();
console.log('\n✅ Migration complete!');
