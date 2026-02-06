import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Stack, Box, Image, Text, Group, Badge } from '@mantine/core';
import { PerfumeGrid, SectionHeader, EmptyState } from '@/components';
import { BrandPagination } from './BrandPagination';
import { brandService, perfumeService, categoryService } from '@perfume-catalog/database';

// Always fetch fresh data on every request
export const dynamic = 'force-dynamic';

interface BrandPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

// Generate metadata for each brand
// Using direct database access for static generation
export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandService.getBySlug(slug);

  if (!brand) {
    return {
      title: 'الماركة غير موجودة',
    };
  }

  return {
    title: brand.name,
    description: brand.description || `تصفح مجموعة عطور ${brand.name} - أفضل العطور من هذه الماركة العالمية`,
    openGraph: {
      title: `${brand.name} | عطور فاخرة`,
      description: brand.description || `تصفح مجموعة عطور ${brand.name}`,
      images: brand.image ? [{ url: brand.image }] : undefined,
    },
  };
}

const PAGE_SIZE = 12;

export default async function BrandPage({
  params,
  searchParams,
}: BrandPageProps) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  
  // Using direct database access for static generation
  const brand = brandService.getBySlug(slug);

  if (!brand) {
    notFound();
  }

  const currentPage = parseInt(pageParam || '1', 10);
  
  // Fetch perfumes for this brand using direct database access
  const result = perfumeService.getAll(
    { page: currentPage, pageSize: PAGE_SIZE },
    { brandId: brand.id }
  );

  // Fetch categories for display using direct database access
  const categories = categoryService.getAll();

  return (
    <Stack gap="xl">
      {/* Brand Header */}
      <Box
        py={40}
        px={20}
        style={{
          background: 'linear-gradient(180deg, #fefbf3 0%, #fdf4f5 100%)',
          borderRadius: 'var(--mantine-radius-xl)',
          margin: '0 -1rem',
        }}
      >
        <Group justify="center" align="center" gap="xl" wrap="wrap">
          {brand.image && (
            <Box
              style={{
                width: 150,
                height: 150,
                borderRadius: 'var(--mantine-radius-lg)',
                overflow: 'hidden',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--mantine-shadow-md)',
              }}
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fit="contain"
                style={{ maxWidth: '80%', maxHeight: '80%' }}
              />
            </Box>
          )}
          <Stack gap="xs" align="center">
            <Text size="xl" fw={700} ta="center">
              {brand.name}
            </Text>
            {brand.description && (
              <Text size="md" c="dimmed" ta="center" maw={500}>
                {brand.description}
              </Text>
            )}
            <Badge size="lg" variant="light" color="grape">
              {result.total} عطر
            </Badge>
          </Stack>
        </Group>
      </Box>

      {/* Perfumes Section */}
      <Box>
        <SectionHeader
          title={`عطور ${brand.name}`}
          subtitle={`اكتشف مجموعتنا من عطور ${brand.name} الفاخرة`}
        />

        {result.data.length === 0 ? (
          <EmptyState
            title="لا توجد عطور"
            message={`لا توجد عطور متاحة من ماركة ${brand.name} حالياً`}
          />
        ) : (
          <>
            <PerfumeGrid 
              perfumes={result.data} 
              categories={categories}
              showCategory
            />
            <BrandPagination
              currentPage={currentPage}
              totalPages={result.totalPages}
              slug={slug}
            />
          </>
        )}
      </Box>
    </Stack>
  );
}
