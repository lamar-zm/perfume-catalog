import { Metadata } from 'next';
import { Stack } from '@mantine/core';
import { brandApi } from '@/services';
import { BrandGrid, SectionHeader } from '@/components';

export const metadata: Metadata = {
  title: 'الماركات',
  description: 'تصفح جميع ماركات العطور العالمية - ديور، شانيل، توم فورد، والمزيد من أفخم الماركات',
  openGraph: {
    title: 'الماركات | عطور فاخرة',
    description: 'تصفح جميع ماركات العطور العالمية - ديور، شانيل، توم فورد، والمزيد من أفخم الماركات',
  },
};

export default async function BrandsPage() {
  const res = await brandApi.getAll();
  const brands = res.success && res.data ? res.data : [];

  return (
    <Stack gap="xl">
      <SectionHeader
        title="الماركات"
        subtitle="تصفح عطورنا حسب الماركة"
      />
      <BrandGrid
        brands={brands}
        emptyMessage="لا توجد ماركات متاحة حالياً"
      />
    </Stack>
  );
}
