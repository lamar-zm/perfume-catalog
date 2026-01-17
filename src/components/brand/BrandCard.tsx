'use client';

import { Card, Image, Text, Box } from '@mantine/core';
import { Brand } from '@/data/brands';
import classes from './BrandCard.module.css';

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <Card className={classes.card} padding="md" radius="lg" withBorder>
      <Card.Section className={classes.imageSection}>
        <Image
          src={brand.logo}
          alt={brand.nameAr}
          height={120}
          fit="cover"
        />
      </Card.Section>
      <Box ta="center" mt="sm">
        <Text fw={600} size="lg">
          {brand.nameAr}
        </Text>
        <Text size="sm" c="dimmed">
          {brand.name}
        </Text>
      </Box>
    </Card>
  );
}
