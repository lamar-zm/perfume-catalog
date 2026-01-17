import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Stack } from '@mantine/core';
import { categoryApi, perfumeApi } from '@/services';
import { PerfumeGrid, SectionHeader, Pagination, EmptyState } from '@/components';
import { CategoryPagination } from './CategoryPagination';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
  const res = await categoryApi.getAll();
  if (!res.success) return [];
  return res.data.map((category) => ({
    slug: category.slug,
  }));
}

// Generate metadata for each category
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const res = await categoryApi.getBySlug(slug);

  if (!res.success || !res.data) {
    return {
      title: 'التصنيف غير موجود',
    };
  }

  const category = res.data;

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
  const { page: pageParam } = await searchParams;
  
  const categoryRes = await categoryApi.getBySlug(slug);

  if (!categoryRes.success || !categoryRes.data) {
    notFound();
  }

  const category = categoryRes.data;
  const currentPage = parseInt(pageParam || '1', 10);
  const perfumesRes = await perfumeApi.getAll({
    page: currentPage,
    pageSize: PAGE_SIZE,
    categoryId: category.id,
  });

  const result = perfumesRes.success ? perfumesRes.data : { data: [], total: 0, page: 1, pageSize: PAGE_SIZE, totalPages: 0 };

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
}
