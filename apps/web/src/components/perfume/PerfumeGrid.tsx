'use client';

import { SimpleGrid, Text, Center, Loader, Box } from '@mantine/core';
import { Perfume, Category } from '@/types';
import { PerfumeCard } from './PerfumeCard';

interface PerfumeGridProps {
  perfumes: Perfume[];
  categories?: Category[];
  showCategory?: boolean;
  loading?: boolean;
  emptyMessage?: string;
  columns?: { base: number; sm: number; md: number; lg: number };
}

export function PerfumeGrid({
  perfumes,
  categories = [],
  showCategory = false,
  loading = false,
  emptyMessage = 'لا توجد عطور',
  columns = { base: 1, sm: 2, md: 3, lg: 4 },
}: PerfumeGridProps) {
  // Create a map for quick category lookup
  const categoryMap = new Map(categories.map((c) => [c.id, c.name]));

  if (loading) {
    return (
      <Center py="xl">
        <Loader size="lg" />
      </Center>
    );
  }

  if (perfumes.length === 0) {
    return (
      <Center py="xl">
        <Text c="dimmed" size="lg">
          {emptyMessage}
        </Text>
      </Center>
    );
  }

  return (
    <Box
      style={{
        display: 'grid',
        gap: 'var(--mantine-spacing-lg)',
        gridTemplateColumns: `repeat(${columns.base}, 1fr)`,
      }}
      __vars={{
        '--perfume-grid-cols-sm': columns.sm.toString(),
        '--perfume-grid-cols-md': columns.md.toString(),
        '--perfume-grid-cols-lg': columns.lg.toString(),
      }}
      className="perfume-grid"
    >
      <style>{`
        @media (min-width: 36em) {
          .perfume-grid { grid-template-columns: repeat(var(--perfume-grid-cols-sm), 1fr) !important; }
        }
        @media (min-width: 48em) {
          .perfume-grid { grid-template-columns: repeat(var(--perfume-grid-cols-md), 1fr) !important; }
        }
        @media (min-width: 62em) {
          .perfume-grid { grid-template-columns: repeat(var(--perfume-grid-cols-lg), 1fr) !important; }
        }
      `}</style>
      {perfumes.map((perfume) => (
        <PerfumeCard
          key={perfume.id}
          perfume={perfume}
          showCategory={showCategory}
          categoryName={categoryMap.get(perfume.categoryId)}
        />
      ))}
    </Box>
  );
}
