'use client';

import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Stack,
  Box,
} from '@mantine/core';
import Link from 'next/link';
import { Perfume } from '@/types';
import { imageService } from '@/services';
import classes from './PerfumeCard.module.css';

interface PerfumeCardProps {
  perfume: Perfume;
  showCategory?: boolean;
  categoryName?: string;
}

export function PerfumeCard({
  perfume,
  showCategory = false,
  categoryName,
}: PerfumeCardProps) {
  const hasDiscount = perfume.discount && perfume.discount > 0;
  const finalPrice = hasDiscount ? perfume.price - perfume.discount! : perfume.price;

  return (
    <Card
      component={Link}
      href={`/perfume/${perfume.id}`}
      className={classes.card}
      padding="md"
      withBorder
    >
      <Card.Section className={classes.imageSection}>
        <Image
          src={perfume.image || imageService.getPlaceholder()}
          alt={perfume.title}
          height={220}
          fallbackSrc={imageService.getPlaceholder()}
        />
        {hasDiscount && (
          <Badge className={classes.discountBadge} color="red" variant="filled">
            خصم {perfume.discount} دينار
          </Badge>
        )}
        {perfume.isFeatured && (
          <Badge className={classes.featuredBadge} color="gold" variant="filled">
            مميز
          </Badge>
        )}
      </Card.Section>

      <Stack gap="xs" mt="md">
        {showCategory && categoryName && (
          <Text size="xs" c="dimmed">
            {categoryName}
          </Text>
        )}
        
        <Text fw={600} lineClamp={1} className={classes.title}>
          {perfume.title}
        </Text>
        
        <Text size="sm" c="dimmed" lineClamp={2} className={classes.description}>
          {perfume.description}
        </Text>

        <Group justify="space-between" mt="xs">
          <Box>
            {hasDiscount ? (
              <Group gap="xs">
                <Text fw={700} size="lg" c="brand">
                  {finalPrice} د.ع
                </Text>
                <Text td="line-through" c="dimmed" size="sm">
                  {perfume.price} د.ع
                </Text>
              </Group>
            ) : (
              <Text fw={700} size="lg" c="brand">
                {perfume.price} د.ع
              </Text>
            )}
          </Box>
          <Text size="xs" c="dimmed">
            {perfume.salesCount} مبيعة
          </Text>
        </Group>
      </Stack>
    </Card>
  );
}
