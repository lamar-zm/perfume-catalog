import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Stack,
  Grid,
  GridCol,
  Title,
  Text,
  Badge,
  Group,
  Box,
  Paper,
  Divider,
} from '@mantine/core';
import { IconTag, IconCategory } from '@tabler/icons-react';
import { perfumeApi, categoryApi, imageHelper } from '@/services';
import { PerfumeGrid, SectionHeader } from '@/components';
import PerfumeCarousel from '@/components/perfume/PerfumeCarousel';

interface PerfumePageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all perfumes
export async function generateStaticParams() {
  const res = await perfumeApi.getAll({ page: 1, pageSize: 100 });
  if (!res.success || !res.data) return [];
  return res.data.data.map((perfume) => ({
    id: perfume.id,
  }));
}

// Generate metadata for each perfume
export async function generateMetadata({
  params,
}: PerfumePageProps): Promise<Metadata> {
  const { id } = await params;
  const res = await perfumeApi.getById(id);

  if (!res.success || !res.data) {
    return {
      title: 'العطر غير موجود',
    };
  }

  const perfume = res.data;
  const hasDiscount = perfume.discount && perfume.discount > 0;
  const finalPrice = hasDiscount ? perfume.price - perfume.discount! : perfume.price;
  const mainImage = perfume.images?.[0] || '';

  return {
    title: perfume.title,
    description: perfume.description.substring(0, 160),
    openGraph: {
      title: `${perfume.title} | عطور فاخرة`,
      description: perfume.description.substring(0, 160),
      images: mainImage ? [{ url: mainImage }] : undefined,
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
  const perfumeRes = await perfumeApi.getById(id);

  if (!perfumeRes.success || !perfumeRes.data) {
    notFound();
  }

  const perfume = perfumeRes.data;

  const [categoryRes, relatedRes, categoriesRes] = await Promise.all([
    perfume.categoryId ? categoryApi.getById(perfume.categoryId) : Promise.resolve({ success: false, data: null }),
    perfumeApi.getRelated(perfume.id, perfume.categoryId || '', 4),
    categoryApi.getAll(),
  ]);

  const category = categoryRes.success && categoryRes.data ? categoryRes.data : null;
  const relatedPerfumes = relatedRes.success && relatedRes.data ? relatedRes.data : [];
  const categories = categoriesRes.success && categoriesRes.data ? categoriesRes.data : [];

  const hasDiscount = perfume.discount && perfume.discount > 0;
  const finalPrice = hasDiscount ? perfume.price - perfume.discount! : perfume.price;
  const mainImage = perfume.images?.[0] || '';

  return (
    <Stack gap="xl">
      {/* Product Details */}
      <Paper p="xl" radius="lg" withBorder>
        <Grid gutter="xl">
          {/* Product Image */}
          <GridCol span={{ base: 12, md: 5 }}>
            <Box pos="relative">
              <PerfumeCarousel images={perfume.images || []} coverImage={perfume.coverImage} height={500} />
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

              {/* Gender Badge */}
              {perfume.gender && (
                <Badge variant="light" color="violet" size="lg">
                  {perfume.gender === 'men' ? 'للرجال' : perfume.gender === 'women' ? 'للنساء' : 'مناسب للجنسين'}
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

              {/* Perfume Notes */}
              {perfume.notes && perfume.notes.length > 0 && (
                <Box>
                  <Text fw={600} mb="xs">
                    نوع العطر
                  </Text>
                  <Group gap="xs">
                    {perfume.notes.map((note, index) => (
                      <Badge key={index} variant="light" color="grape" size="lg">
                        {note}
                      </Badge>
                    ))}
                  </Group>
                </Box>
              )}

              <Divider />

              {/* Availability */}
              <Group gap="xl">
                <Group gap="xs">
                  <IconTag size={20} color="var(--mantine-color-brand-6)" />
                  <Text size="sm">
                    {perfume.outOfStock ? 'غير متوفر حالياً' : 'متوفر في المخزون'}
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
