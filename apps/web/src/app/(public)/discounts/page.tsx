import { Metadata } from 'next';
import { PerfumeGrid, SectionHeader } from '@/components';
import { perfumeService, categoryService } from '@perfume-catalog/database';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'العروض والتخفيضات | عطور فاخرة',
    description: 'اكتشف العروض والتخفيضات الحالية على العطور',
  };
}

export default async function DiscountsPage() {
  // Using direct database access for static generation
  const discounted = perfumeService.getDiscounted(100);
  const categories = categoryService.getAll();

  return (
    <div>
      <SectionHeader title="العروض والتخفيضات" subtitle="المنتجات المتوفرة حالياً بعروض وتخفيضات" />
      <PerfumeGrid perfumes={discounted} categories={categories} showCategory />
    </div>
  );
}
