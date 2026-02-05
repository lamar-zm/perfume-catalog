import { initializeDatabase } from './db';

async function seed() {
  console.log('🌱 Initializing database...\n');

  // Initialize database tables only (no seed data)
  initializeDatabase();

  console.log('✨ Database initialized successfully!');
  console.log('\n📝 Admin credentials:');
  console.log('   📧 Email: admin@email.com');
  console.log('   🔑 Password: 123456');
}

seed().catch(console.error);
