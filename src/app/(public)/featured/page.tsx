import { Metadata } from 'next';
import { Stack } from '@mantine/core';
import { perfumeService, categoryService } from '@/services';
import { PerfumeGrid, SectionHeader, EmptyState } from '@/components';

export const metadata: Metadata = {
  title: 'العطور المميزة',
  description: 'اكتشف مجموعتنا من العطور المميزة - اختيارات حصرية من أفخم العطور العربية والعالمية',
  openGraph: {
    title: 'العطور المميزة | عطور فاخرة',
    description: 'اكتشف مجموعتنا من العطور المميزة - اختيارات حصرية من أفخم العطور',
  },
};

export default async function FeaturedPage() {
  const [featured, categories] = await Promise.all([
    perfumeService.getFeatured(20),
    categoryService.getAll(),
  ]);

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
