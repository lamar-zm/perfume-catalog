import { Metadata } from 'next';
import { Stack } from '@mantine/core';
import { PerfumeGrid, SectionHeader, EmptyState } from '@/components';
import { perfumeService, categoryService } from '@perfume-catalog/database';

export const metadata: Metadata = {
  title: 'الأكثر مبيعاً',
  description: 'اكتشف العطور الأكثر مبيعاً استناداً إلى بيانات المبيعات الفعلية',
  openGraph: {
    title: 'الأكثر مبيعاً | عطور فاخرة',
    description: 'اكتشف العطور الأكثر مبيعاً استناداً إلى بيانات المبيعات',
  },
};

export default async function FeaturedPage() {
  // Using direct database access for static generation
  const featured = perfumeService.getMostSold(20);
  const categories = categoryService.getAll();

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
