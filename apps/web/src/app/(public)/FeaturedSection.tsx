'use client';

import { Box, Group, Title, Text, Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import { Perfume, Category } from '@/types';
import { PerfumeGrid } from '@/components';

interface FeaturedSectionProps {
  perfumes: Perfume[];
  categories: Category[];
}

export function FeaturedSection({ perfumes, categories }: FeaturedSectionProps) {
  return (
    <Box
      py={40}
      px={20}
      style={{
        background: 'linear-gradient(135deg, #7d3440 0%, #612833 100%)',
        borderRadius: 'var(--mantine-radius-xl)',
        margin: '0 -1rem',
      }}
    >
      <Group justify="space-between" align="flex-end" mb="xl">
        <Box>
          <Title order={2} c="white">
            عطور مميزة
          </Title>
          <Text c="rgba(255,255,255,0.8)" size="sm" mt={4}>
            اختياراتنا الحصرية لعملائنا المميزين
          </Text>
        </Box>
        <Button
          component={Link}
          href="/featured"
          variant="white"
          color="dark"
          radius="xl"
          rightSection={<IconArrowLeft size={16} />}
        >
          عرض الكل
        </Button>
      </Group>
      <PerfumeGrid
        perfumes={perfumes}
        categories={categories}
        showCategory
        columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
      />
    </Box>
  );
}
