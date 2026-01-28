import { Metadata } from 'next';
import { Stack } from '@mantine/core';
import { perfumeApi, categoryApi } from '@/services';
import { PerfumeGrid, SectionHeader, EmptyState } from '@/components';

export const metadata: Metadata = {
  title: 'الأكثر مبيعاً',
  description: 'اكتشف العطور الأكثر مبيعاً استناداً إلى بيانات المبيعات الفعلية',
  openGraph: {
    title: 'الأكثر مبيعاً | عطور فاخرة',
    description: 'اكتشف العطور الأكثر مبيعاً استناداً إلى بيانات المبيعات',
  },
};

export default async function FeaturedPage() {
  const [mostSoldRes, categoriesRes] = await Promise.all([
    perfumeApi.getMostSold(20),
    categoryApi.getAll(),
  ]);

  const featured = mostSoldRes.success && mostSoldRes.data ? mostSoldRes.data : [];
  const categories = categoriesRes.success && categoriesRes.data ? categoriesRes.data : [];

  return (
    <Stack gap="xl">
      <SectionHeader
        title="العطور المميزة"
        subtitle="اختياراتنا الحصرية من أفخم العطور"
      />

      {featured.length === 0 ? (
        <EmptyState
          title="لا توجد عطور مميزة"
          message="لم يتم تحديد عطور مميزة حالياً"
        />
      ) : (
        <PerfumeGrid
          perfumes={featured}
          categories={categories}
          showCategory
        />
      )}
    </Stack>
  );
}
