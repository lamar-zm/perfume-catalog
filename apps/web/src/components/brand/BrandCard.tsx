'use client';

import { Card, Image, Text, Box } from '@mantine/core';
import Link from 'next/link';
import type { Brand } from '@perfume-catalog/shared';
import classes from './BrandCard.module.css';

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link href={`/brand/${brand.slug}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.card} padding="md" radius="lg" withBorder>
        <Card.Section className={classes.imageSection}>
          <Image
            src={brand.image || '/placeholder-brand.png'}
            alt={brand.name}
            height={120}
            fit="contain"
          />
        </Card.Section>
        <Box ta="center" mt="sm">
          <Text fw={600} size="lg">
            {brand.name}
          </Text>
          {brand.description && (
            <Text size="sm" c="dimmed" lineClamp={1}>
              {brand.description}
            </Text>
          )}
        </Box>
      </Card>
    </Link>
  );
}
