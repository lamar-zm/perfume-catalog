import { Metadata } from 'next';
import { perfumeApi, categoryApi } from '@/services';
import { PerfumeGrid, SectionHeader } from '@/components';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'العروض والتخفيضات | عطور فاخرة',
    description: 'اكتشف العروض والتخفيضات الحالية على العطور',
  };
}

export default async function DiscountsPage() {
  const [discountRes, categoriesRes] = await Promise.all([
    perfumeApi.getDiscounted(100),
    categoryApi.getAll(),
  ]);

  const discounted = discountRes.success && discountRes.data ? discountRes.data : [];
  const categories = categoriesRes.success && categoriesRes.data ? categoriesRes.data : [];

  return (
    <div>
      <SectionHeader title="العروض والتخفيضات" subtitle="المنتجات المتوفرة حالياً بعروض وتخفيضات" />
      <PerfumeGrid perfumes={discounted} categories={categories} showCategory />
    </div>
  );
}
