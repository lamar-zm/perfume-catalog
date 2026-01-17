import db, { initializeDatabase } from './db';
import { categoryService } from './services/categoryService';
import { brandService } from './services/brandService';
import { perfumeService } from './services/perfumeService';
import { authService } from './services/authService';

// Seed data
const categories = [
  { name: 'عطور رجالية', slug: 'mens-perfumes', description: 'أفضل العطور الرجالية الفاخرة' },
  { name: 'عطور نسائية', slug: 'womens-perfumes', description: 'عطور نسائية راقية وأنيقة' },
  { name: 'عطور عربية', slug: 'arabic-perfumes', description: 'عطور عربية أصيلة بالعود والمسك' },
  { name: 'عطور فرنسية', slug: 'french-perfumes', description: 'عطور فرنسية راقية من أشهر الماركات' },
  { name: 'مجموعات الهدايا', slug: 'gift-sets', description: 'مجموعات هدايا مميزة للمناسبات' },
  { name: 'عطور زهرية', slug: 'floral-perfumes', description: 'عطور بنفحات الزهور الطبيعية' },
  { name: 'عطور خشبية', slug: 'woody-perfumes', description: 'عطور بروائح خشبية دافئة' },
  { name: 'عطور حمضية', slug: 'citrus-perfumes', description: 'عطور منعشة بنفحات الحمضيات' },
];

const brands = [
  { name: 'شانيل', slug: 'chanel', description: 'دار الأزياء الفرنسية الفاخرة' },
  { name: 'ديور', slug: 'dior', description: 'علامة فرنسية للعطور الفاخرة' },
  { name: 'توم فورد', slug: 'tom-ford', description: 'علامة أمريكية فاخرة' },
  { name: 'غوتشي', slug: 'gucci', description: 'دار أزياء إيطالية عالمية' },
  { name: 'فرزاتشي', slug: 'versace', description: 'علامة إيطالية فاخرة' },
  { name: 'العود العربي', slug: 'arabian-oud', description: 'أفخم العطور العربية' },
  { name: 'أرماني', slug: 'armani', description: 'علامة إيطالية راقية' },
  { name: 'باكو رابان', slug: 'paco-rabanne', description: 'علامة فرنسية مميزة' },
];

const perfumeNames = [
  'عطر الليل الساحر',
  'عبير الورد',
  'مسك الختام',
  'عود الملوك',
  'سحر الشرق',
  'نفحات الياسمين',
  'عطر النخبة',
  'رائحة الفجر',
  'عبق العنبر',
  'زهور البنفسج',
  'عطر الأميرات',
  'روح العود',
  'نسيم الصباح',
  'عطر الأناقة',
  'سفر العطور',
  'ليالي الشرق',
  'عطر الرجل الأنيق',
  'زهور الربيع',
  'عطر المساء',
  'روائح الطبيعة',
  'عطر الفخامة',
  'نفحات المسك',
  'عبير الصندل',
  'عطر الأصالة',
  'زهور الجنة',
  'عطر التميز',
  'روح الياسمين',
  'عطر الكلاسيك',
  'نسمات البحر',
  'عطر الذهب',
];

const descriptions = [
  'عطر فاخر يجمع بين نفحات العود والمسك مع لمسات من الورد الطبيعي. يدوم طويلاً ويمنحك إطلالة مميزة.',
  'عطر شرقي أصيل بتركيبة فريدة من العنبر والفانيليا. مثالي للمناسبات الخاصة والسهرات.',
  'مزيج رائع من الزهور الطبيعية مع قاعدة من خشب الصندل. عطر يناسب جميع الأوقات.',
  'عطر منعش بنفحات الحمضيات والبرتقال مع لمسات من الزنجبيل. مثالي لفصل الصيف.',
  'تركيبة فاخرة من العود الكمبودي مع الورد الطائفي. عطر يعكس الذوق الرفيع.',
  'عطر كلاسيكي بنفحات الياسمين والقرنفل. يمنحك شعوراً بالأناقة والتميز.',
  'مزيج فريد من المسك الأبيض والفانيليا مع لمسات من الكراميل. عطر دافئ ومميز.',
  'عطر عصري بنفحات الفواكه الاستوائية والزهور البيضاء. منعش ومثالي للنهار.',
];

// Generate dummy image URLs
function generateImageUrls(perfumeId: string, count: number = 3): string[] {
  const baseUrls = [
    'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80',
    'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80',
    'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80',
    'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80',
    'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80',
    'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&q=80',
    'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&q=80',
    'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80',
    'https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=600&q=80',
    'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=600&q=80',
  ];
  
  const images: string[] = [];
  for (let i = 0; i < Math.min(count, 10); i++) {
    images.push(baseUrls[i % baseUrls.length]);
  }
  return images;
}

// Generate random perfume notes
function generateNotes(): string[] {
  const allNotes = [
    'عود', 'مسك', 'عنبر', 'فانيلا', 'ورد', 'ياسمين', 'صندل', 'بخور',
    'ليمون', 'برتقال', 'قرنفل', 'زنجبيل', 'لافندر', 'نعناع', 'توت',
    'فراولة', 'تفاح', 'كراميل', 'شوكولاتة', 'قهوة', 'جلد', 'خشب الأرز'
  ];
  
  const count = Math.floor(Math.random() * 4) + 1; // 1-4 notes
  const shuffled = allNotes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateCategoryImage(slug: string): string {
  const imageMap: Record<string, string> = {
    'mens-perfumes': 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80',
    'womens-perfumes': 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80',
    'arabic-perfumes': 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80',
    'french-perfumes': 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80',
    'gift-sets': 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&q=80',
    'floral-perfumes': 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80',
    'woody-perfumes': 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=600&q=80',
    'citrus-perfumes': 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=600&q=80',
  };
  return imageMap[slug] || 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80';
}

function generateBrandImage(slug: string): string {
  const imageMap: Record<string, string> = {
    'chanel': 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80',
    'dior': 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80',
    'tom-ford': 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80',
    'gucci': 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80',
    'versace': 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&q=80',
    'arabian-oud': 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80',
    'armani': 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=600&q=80',
    'paco-rabanne': 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=600&q=80',
  };
  return imageMap[slug] || 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80';
}

async function seed() {
  console.log('🌱 Starting database seed...\n');

  // Initialize database tables
  initializeDatabase();

  // Check if already seeded
  const existingCategories = categoryService.getAll();
  if (existingCategories.length > 0) {
    console.log('⚠️ Database already seeded. Skipping...');
    console.log('   Run "npm run db:reset" to reset and reseed.');
    return;
  }

  // Seed categories
  console.log('📁 Seeding categories...');
  const createdCategories = categories.map(cat => 
    categoryService.create({
      ...cat,
      image: generateCategoryImage(cat.slug),
    })
  );
  console.log(`   ✅ Created ${createdCategories.length} categories`);

  // Seed brands
  console.log('🏷️ Seeding brands...');
  const createdBrands = brands.map(brand => 
    brandService.create({
      ...brand,
      image: generateBrandImage(brand.slug),
    })
  );
  console.log(`   ✅ Created ${createdBrands.length} brands`);

  // Seed perfumes
  console.log('🧴 Seeding perfumes...');
  let perfumeCount = 0;
  
  for (let i = 0; i < perfumeNames.length; i++) {
    const name = perfumeNames[i];
    const category = createdCategories[i % createdCategories.length];
    const brand = createdBrands[i % createdBrands.length];
    const description = descriptions[i % descriptions.length];
    
    // Random price between 15,000 and 150,000 IQD
    const price = Math.floor(Math.random() * 135000) + 15000;
    
    // Random discount (30% chance, between 5000 and 30000)
    const hasDiscount = Math.random() < 0.3;
    const discount = hasDiscount ? Math.floor(Math.random() * 25000) + 5000 : 0;
    
    // Random sales count
    const salesCount = Math.floor(Math.random() * 500);
    
    // Random featured (20% chance)
    const isFeatured = Math.random() < 0.2;
    
    // Random number of images (1-5)
    const imageCount = Math.floor(Math.random() * 5) + 1;
    
    perfumeService.create({
      title: name,
      description,
      price,
      discount,
      categoryId: category.id,
      brandId: brand.id,
      isFeatured,
      salesCount,
      images: generateImageUrls(`perf-${i}`, imageCount),
      notes: generateNotes(),
    });
    
    perfumeCount++;
  }
  console.log(`   ✅ Created ${perfumeCount} perfumes`);

  // Seed admin user
  console.log('👤 Seeding admin user...');
  await authService.createAdmin('admin@email.com', '123456', 'مدير النظام', 'superadmin');
  console.log('   ✅ Created admin user');
  console.log('   📧 Email: admin@email.com');
  console.log('   🔑 Password: 123456');

  console.log('\n✨ Database seeded successfully!');
}

seed().catch(console.error);
