import { Metadata } from 'next';
import { Stack } from '@mantine/core';
import { BrandGrid, SectionHeader } from '@/components';
import { brandService } from '@perfume-catalog/database';

// Always fetch fresh data on every request
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'الماركات',
  description: 'تصفح جميع ماركات العطور العالمية - ديور، شانيل، توم فورد، والمزيد من أفخم الماركات',
  openGraph: {
    title: 'الماركات | عطور فاخرة',
    description: 'تصفح جميع ماركات العطور العالمية - ديور، شانيل، توم فورد، والمزيد من أفخم الماركات',
  },
};

export default async function BrandsPage() {
  // Using direct database access for static generation
  const brands = brandService.getAll();

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
