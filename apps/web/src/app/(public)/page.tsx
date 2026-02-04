import { Stack, Box, SimpleGrid } from '@mantine/core';
import { perfumeApi, categoryApi, brandApi } from '@/services';
import { PerfumeGrid, CategoryGrid, SectionHeader, BrandCard } from '@/components';
import { HeroSection } from './HeroSection';

export default async function HomePage() {
  // Fetch data from API
  const [mostSoldRes, categoriesRes, allPerfumesRes, brandsRes, discountedRes] = await Promise.all([
    perfumeApi.getMostSold(8),
    categoryApi.getAll(),
    perfumeApi.getAll({ page: 1, pageSize: 8 }),
    brandApi.getAll(),
    perfumeApi.getDiscounted(8),
  ]);

  const mostSold = mostSoldRes.success && mostSoldRes.data ? mostSoldRes.data : [];
  const categories = categoriesRes.success && categoriesRes.data ? categoriesRes.data : [];
  const allPerfumes = allPerfumesRes.success && allPerfumesRes.data ? allPerfumesRes.data : { data: [], total: 0, page: 1, pageSize: 8, totalPages: 0 };
  const brands = brandsRes.success && brandsRes.data ? brandsRes.data : [];
  const discounted = discountedRes.success && discountedRes.data ? discountedRes.data : [];
  

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

      {/* 3. Discounted Section */}
      {discounted.length > 0 && (
        <Box
          py={40}
          px={20}
          style={{
            background: 'linear-gradient(135deg, #fef3f2 0%, #fdf2f8 100%)',
            borderRadius: 'var(--mantine-radius-xl)',
            margin: '0 -1rem',
          }}
        >
          <SectionHeader
            title="🔥 عروض وتخفيضات"
            subtitle="لا تفوت فرصة الحصول على أفضل العطور بأسعار مميزة"
            viewAllLink="/discounts"
            viewAllText="عرض المزيد"
          />
          <PerfumeGrid
            perfumes={discounted}
            categories={categories}
            showCategory
          />
        </Box>
      )}

      {/* 4. Brands Section */}
      <Box>
        <SectionHeader
          title="البراندات"
          subtitle="أشهر دور العطور العالمية والعربية"
        />
        <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing="lg">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </SimpleGrid>
      </Box>

      {/* 5. Featured Products Section removed - replaced by Most Sold above */}

      {/* 6. All Products Preview */}
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
