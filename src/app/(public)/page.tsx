import { Stack, Box, SimpleGrid } from '@mantine/core';
import { perfumeService, categoryService } from '@/services';
import { brands } from '@/data/brands';
import { PerfumeGrid, CategoryGrid, SectionHeader, BrandCard } from '@/components';
import { HeroSection } from './HeroSection';
import { FeaturedSection } from './FeaturedSection';

export default async function HomePage() {
  // Fetch data from service layer
  const [mostSold, featured, categories, allPerfumes] = await Promise.all([
    perfumeService.getMostSold(8),
    perfumeService.getFeatured(4),
    categoryService.getAll(),
    perfumeService.getAll({ page: 1, pageSize: 8 }),
  ]);

  return (
    <Stack gap={60}>
      {/* Hero Section */}
      <HeroSection />

      {/* 1. Most Sold Section */}
      <Box>
        <SectionHeader
          title="الأكثر مبيعاً"
          subtitle="العطور الأكثر طلباً من عملائنا المميزين"
          viewAllLink="/categories"
          viewAllText="عرض جميع العطور"
        />
        <PerfumeGrid
          perfumes={mostSold}
          categories={categories}
          showCategory
        />
      </Box>

      {/* 2. Categories Section */}
      <Box
        py={40}
        px={20}
        style={{
          background: 'linear-gradient(180deg, #fefbf3 0%, #fdf4f5 100%)',
          borderRadius: 'var(--mantine-radius-xl)',
          margin: '0 -1rem',
        }}
      >
        <SectionHeader
          title="التصنيفات"
          subtitle="تصفح مجموعاتنا المتنوعة من العطور الفاخرة"
        />
        <CategoryGrid categories={categories} />
      </Box>

      {/* 3. Brands Section */}
      <Box>
        <SectionHeader
          title="الماركات العالمية"
          subtitle="أشهر دور العطور العالمية والعربية"
        />
        <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing="lg">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </SimpleGrid>
      </Box>

      {/* 4. Featured Products Section */}
      {featured.length > 0 && (
        <FeaturedSection perfumes={featured} categories={categories} />
      )}

      {/* 5. All Products Preview */}
      <Box>
        <SectionHeader
          title="أحدث المنتجات"
          subtitle="استكشف آخر الإضافات لمجموعتنا"
          viewAllLink="/categories"
          viewAllText="تصفح جميع العطور"
        />
        <PerfumeGrid
          perfumes={allPerfumes.data}
          categories={categories}
          showCategory
        />
      </Box>
    </Stack>
  );
}
