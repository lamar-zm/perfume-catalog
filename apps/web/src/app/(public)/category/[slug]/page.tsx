import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Stack } from '@mantine/core';
import { PerfumeGrid, SectionHeader, Pagination, EmptyState } from '@/components';
import { BrandFilter } from '@/components/filters/BrandFilter';
import { CategoryPagination } from './CategoryPagination';
import { categoryService, perfumeService } from '@perfume-catalog/database';

// Force dynamic rendering for pages with pagination/filters
export const dynamic = 'force-dynamic';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string; brand?: string }>;
}

// Generate static params for all categories
// Using direct database access to avoid API calls during build
export async function generateStaticParams() {
  try {
    const categories = categoryService.getAll();
    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error('Error generating category params:', error);
    return [];
  }
}

// Generate metadata for each category
// Using direct database access for static generation
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryService.getBySlug(slug);

  if (!category) {
    return {
      title: 'التصنيف غير موجود',
    };
  }

  return {
    title: category.name,
    description: category.description || `تصفح مجموعة ${category.name} - أفضل العطور في هذا التصنيف`,
    openGraph: {
      title: `${category.name} | عطور فاخرة`,
      description: category.description || `تصفح مجموعة ${category.name}`,
      images: category.image ? [{ url: category.image }] : undefined,
    },
  };
}

const PAGE_SIZE = 12;

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = await params;
  const { page: pageParam, brand: brandParam } = await searchParams;
  
  // Using direct database access for static generation
  const category = categoryService.getBySlug(slug);

  if (!category) {
    notFound();
  }

  const currentPage = parseInt(pageParam || '1', 10);
  
  // Fetch perfumes using direct database access
  const result = perfumeService.getAll(
    { page: currentPage, pageSize: PAGE_SIZE },
    { categoryId: category.id, brandId: brandParam || undefined }
  );

  return (
    <Stack gap="xl">
      <SectionHeader
        title={category.name}
        subtitle={category.description || `عرض جميع العطور في تصنيف ${category.name}`}
      />

      {result.data.length === 0 ? (
        <EmptyState
          title="لا توجد عطور"
          message={`لا توجد عطور متاحة في تصنيف ${category.name} حالياً`}
        />
      ) : (
        <>
          <PerfumeGrid perfumes={result.data} />
          <CategoryPagination
            currentPage={currentPage}
            totalPages={result.totalPages}
            slug={slug}
          />
        </>
      )}
    </Stack>
  );
// end of CategoryPage

}
