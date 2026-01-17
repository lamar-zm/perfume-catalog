'use client';

import { SimpleGrid, Text, Center, Loader } from '@mantine/core';
import { Category } from '@/types';
import { CategoryCard } from './CategoryCard';

interface CategoryGridProps {
  categories: Category[];
  loading?: boolean;
  emptyMessage?: string;
}

export function CategoryGrid({
  categories,
  loading = false,
  emptyMessage = 'لا توجد تصنيفات',
}: CategoryGridProps) {
  if (loading) {
    return (
      <Center py="xl">
        <Loader size="lg" />
      </Center>
    );
  }

  if (categories.length === 0) {
    return (
      <Center py="xl">
        <Text c="dimmed" size="lg">
          {emptyMessage}
        </Text>
      </Center>
    );
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </SimpleGrid>
  );
}
