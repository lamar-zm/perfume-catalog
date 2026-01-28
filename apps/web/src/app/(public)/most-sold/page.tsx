import { Metadata } from 'next';
import { perfumeApi, categoryApi } from '@/services';
import { PerfumeGrid, SectionHeader } from '@/components';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'الأكثر مبيعاً | عطور فاخرة',
    description: 'اكتشف العطور الأكثر مبيعاً استناداً إلى بيانات المبيعات الفعلية',
  };
}

export default async function MostSoldPage() {
  const [mostSoldRes, categoriesRes] = await Promise.all([
    perfumeApi.getMostSold(100),
    categoryApi.getAll(),
  ]);

  const mostSold = mostSoldRes.success && mostSoldRes.data ? mostSoldRes.data : [];
  const categories = categoriesRes.success && categoriesRes.data ? categoriesRes.data : [];

  return (
    <div>
      <SectionHeader title="الأكثر مبيعاً" subtitle="العطور الأعلى مبيعاً بناءً على بيانات المبيعات" />
      <PerfumeGrid perfumes={mostSold} categories={categories} showCategory />
    </div>
  );
}
