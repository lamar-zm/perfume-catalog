import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Stack,
  Grid,
  GridCol,
  Image,
  Title,
  Text,
  Badge,
  Group,
  Box,
  Paper,
  Divider,
} from '@mantine/core';
import { IconTag, IconCategory, IconTrendingUp } from '@tabler/icons-react';
import { perfumeService, categoryService, imageService } from '@/services';
import { PerfumeGrid, SectionHeader } from '@/components';

interface PerfumePageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all perfumes
export async function generateStaticParams() {
  const result = await perfumeService.getAll({ page: 1, pageSize: 100 });
  return result.data.map((perfume) => ({
    id: perfume.id,
  }));
}

// Generate metadata for each perfume
export async function generateMetadata({
  params,
}: PerfumePageProps): Promise<Metadata> {
  const { id } = await params;
  const perfume = await perfumeService.getById(id);

  if (!perfume) {
    return {
      title: 'العطر غير موجود',
    };
  }

  const hasDiscount = perfume.discount && perfume.discount > 0;
  const finalPrice = hasDiscount ? perfume.price - perfume.discount! : perfume.price;

  return {
    title: perfume.title,
    description: perfume.description.substring(0, 160),
    openGraph: {
      title: `${perfume.title} | عطور فاخرة`,
      description: perfume.description.substring(0, 160),
      images: perfume.image ? [{ url: perfume.image }] : undefined,
      type: 'website',
    },
    other: {
      'product:price:amount': finalPrice.toString(),
      'product:price:currency': 'IQD',
    },
  };
}

export default async function PerfumePage({ params }: PerfumePageProps) {
  const { id } = await params;
  const perfume = await perfumeService.getById(id);

  if (!perfume) {
    notFound();
  }

  const [category, relatedPerfumes, categories] = await Promise.all([
    categoryService.getById(perfume.categoryId),
    perfumeService.getRelated(perfume.id, perfume.categoryId, 4),
    categoryService.getAll(),
  ]);

  const hasDiscount = perfume.discount && perfume.discount > 0;
  const finalPrice = hasDiscount ? perfume.price - perfume.discount! : perfume.price;

  return (
    <Stack gap="xl">
      {/* Product Details */}
      <Paper p="xl" radius="lg" withBorder>
        <Grid gutter="xl">
          {/* Product Image */}
          <GridCol span={{ base: 12, md: 5 }}>
            <Box pos="relative">
              <Image
                src={perfume.image || imageService.getPlaceholder(500, 500)}
                alt={perfume.title}
                radius="lg"
                fallbackSrc={imageService.getPlaceholder(500, 500)}
              />
              {hasDiscount && (
                <Badge
                  color="red"
                  variant="filled"
                  size="lg"
                  pos="absolute"
                  top={16}
                  right={16}
                >
                  خصم {perfume.discount} دينار
                </Badge>
              )}
              {perfume.isFeatured && (
                <Badge
                  color="gold"
                  variant="filled"
                  size="lg"
                  pos="absolute"
                  top={16}
                  left={16}
                >
                  مميز
                </Badge>
              )}
            </Box>
          </GridCol>

          {/* Product Info */}
          <GridCol span={{ base: 12, md: 7 }}>
            <Stack gap="md">
              {/* Category Badge */}
              {category && (
                <Badge
                  variant="light"
                  color="brand"
                  size="lg"
                  leftSection={<IconCategory size={14} />}
                >
                  {category.name}
                </Badge>
              )}

              {/* Title */}
              <Title order={1}>{perfume.title}</Title>

              {/* Price */}
              <Box>
                {hasDiscount ? (
                  <Group gap="md" align="baseline">
                    <Text fw={700} size="2rem" c="brand">
                      {finalPrice} د.ع
                    </Text>
                    <Text td="line-through" c="dimmed" size="xl">
                      {perfume.price} د.ع
                    </Text>
                    <Badge color="red" variant="light">
                      وفر {perfume.discount} دينار
                    </Badge>
                  </Group>
                ) : (
                  <Text fw={700} size="2rem" c="brand">
                    {perfume.price} د.ع
                  </Text>
                )}
              </Box>

              <Divider />

              {/* Description */}
              <Box>
                <Text fw={600} mb="xs">
                  الوصف
                </Text>
                <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                  {perfume.description}
                </Text>
              </Box>

              <Divider />

              {/* Stats */}
              <Group gap="xl">
                <Group gap="xs">
                  <IconTrendingUp size={20} color="var(--mantine-color-brand-6)" />
                  <Text size="sm">
                    <Text span fw={600}>
                      {perfume.salesCount}
                    </Text>{' '}
                    مبيعة
                  </Text>
                </Group>
                <Group gap="xs">
                  <IconTag size={20} color="var(--mantine-color-brand-6)" />
                  <Text size="sm">
                    متوفر في المخزون
                  </Text>
                </Group>
              </Group>
            </Stack>
          </GridCol>
        </Grid>
      </Paper>

      {/* Related Perfumes */}
      {relatedPerfumes.length > 0 && (
        <Box>
          <SectionHeader
            title="عطور مشابهة"
            subtitle={`المزيد من ${category?.name || 'هذا التصنيف'}`}
            viewAllLink={category ? `/category/${category.slug}` : undefined}
          />
          <PerfumeGrid
            perfumes={relatedPerfumes}
            categories={categories}
            columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
          />
        </Box>
      )}
    </Stack>
  );
}
