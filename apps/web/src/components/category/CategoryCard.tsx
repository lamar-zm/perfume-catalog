'use client';

import { Card, Image, Text, Overlay, Box } from '@mantine/core';
import Link from 'next/link';
import { Category } from '@/types';
import { imageHelper } from '@/services';
import classes from './CategoryCard.module.css';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card
      component={Link}
      href={`/category/${category.slug}`}
      className={classes.card}
      p={0}
      radius="lg"
    >
      <Box className={classes.imageWrapper}>
        <Image
          src={category.image || imageHelper.getPlaceholder(400, 300)}
          alt={category.name}
          height={200}
          fallbackSrc={imageHelper.getPlaceholder(400, 300)}
        />
        <Overlay gradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .7) 100%)" />
        <Box className={classes.content}>
          <Text fw={700} size="xl" c="white">
            {category.name}
          </Text>
          {category.description && (
            <Text size="sm" c="white" opacity={0.9} lineClamp={2} mt={4}>
              {category.description}
            </Text>
          )}
        </Box>
      </Box>
    </Card>
  );
}
