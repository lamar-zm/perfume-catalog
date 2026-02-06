import { Metadata } from 'next';
import { PerfumeGrid, SectionHeader } from '@/components';
import { perfumeService, categoryService } from '@perfume-catalog/database';

// Always fetch fresh data on every request
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'الأكثر مبيعاً | عطور فاخرة',
    description: 'اكتشف العطور الأكثر مبيعاً استناداً إلى بيانات المبيعات الفعلية',
  };
}

export default async function MostSoldPage() {
  // Using direct database access for static generation
  const mostSold = perfumeService.getMostSold(100);
  const categories = categoryService.getAll();

  return (
    <div>
      <SectionHeader title="الأكثر مبيعاً" subtitle="العطور الأعلى مبيعاً بناءً على بيانات المبيعات" />
      <PerfumeGrid perfumes={mostSold} categories={categories} showCategory />
    </div>
  );
}
