import { Metadata } from 'next';
import { Stack } from '@mantine/core';
import { categoryService } from '@/services';
import { CategoryGrid, SectionHeader } from '@/components';

export const metadata: Metadata = {
  title: 'التصنيفات',
  description: 'تصفح جميع تصنيفات العطور - عطور رجالية، عطور نسائية، عطور عربية، عطور فرنسية، ومجموعات الهدايا',
  openGraph: {
    title: 'التصنيفات | عطور فاخرة',
    description: 'تصفح جميع تصنيفات العطور - عطور رجالية، عطور نسائية، عطور عربية، عطور فرنسية، ومجموعات الهدايا',
  },
};

export default async function CategoriesPage() {
  const categories = await categoryService.getAll();

  return (
    <Stack gap="xl">
      <SectionHeader
        title="التصنيفات"
        subtitle="تصفح عطورنا حسب الفئة"
      />
      <CategoryGrid
        categories={categories}
        emptyMessage="لا توجد تصنيفات متاحة حالياً"
      />
    </Stack>
  );
}
