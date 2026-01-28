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
import { imageHelper } from '@/services';
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
  const mainImage = perfume.coverImage || perfume.images?.[0] || '';

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
          src={mainImage || imageHelper.getPlaceholder()}
          alt={perfume.title}
          height={220}
          fallbackSrc={imageHelper.getPlaceholder()}
        />
        {hasDiscount && (
          <Badge className={classes.discountBadge} color="red" variant="filled">
            خصم {perfume.discount} دينار
          </Badge>
        )}
        {perfume.outOfStock && (
          <Badge color="red" variant="filled">
            نفد من المخزون
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
                  {finalPrice.toLocaleString()} د.ع
                </Text>
                <Text td="line-through" c="dimmed" size="sm">
                  {perfume.price.toLocaleString()} د.ع
                </Text>
              </Group>
            ) : (
              <Text fw={700} size="lg" c="brand">
                {perfume.price.toLocaleString()} د.ع
              </Text>
            )}
          </Box>
        </Group>
      </Stack>
    </Card>
  );
}
