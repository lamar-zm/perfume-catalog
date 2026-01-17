import { Metadata } from 'next';
import { Stack } from '@mantine/core';
import { categoryApi } from '@/services';
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
  const res = await categoryApi.getAll();
  const categories = res.success ? res.data : [];

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
