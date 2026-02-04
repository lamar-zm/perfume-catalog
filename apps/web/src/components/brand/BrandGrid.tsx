'use client';

import { SimpleGrid, Text, Center, Loader } from '@mantine/core';
import { Brand } from '@/types';
import { BrandCard } from './BrandCard';

interface BrandGridProps {
  brands: Brand[];
  loading?: boolean;
  emptyMessage?: string;
}

export function BrandGrid({
  brands,
  loading = false,
  emptyMessage = 'لا توجد ماركات',
}: BrandGridProps) {
  if (loading) {
    return (
      <Center py="xl">
        <Loader size="lg" />
      </Center>
    );
  }

  if (brands.length === 0) {
    return (
      <Center py="xl">
        <Text c="dimmed" size="lg">
          {emptyMessage}
        </Text>
      </Center>
    );
  }

  return (
    <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing="lg">
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </SimpleGrid>
  );
}
