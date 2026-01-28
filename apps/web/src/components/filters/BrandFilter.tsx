'use client';

import { useEffect, useState } from 'react';
import { Stack, Title, SimpleGrid, Card, Image, Text, Button } from '@mantine/core';
import Link from 'next/link';
import { brandApi, imageHelper } from '@/services';
import type { Brand } from '@perfume-catalog/shared';

export function BrandFilter({ currentBrand }: { currentBrand?: string }) {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    brandApi.getAll().then((res) => {
      if (!mounted) return;
      if (res.success) setBrands(res.data || []);
      setLoading(false);
    });
    return () => { mounted = false; };
  }, []);

  if (loading) return null;

  return (
    <Stack>
      <Title order={4}>البراندات</Title>
      <SimpleGrid cols={3} spacing="sm">
        <Link href={`/category?brand=`}>
          <Button variant={currentBrand ? 'subtle' : 'filled'}>الكل</Button>
        </Link>
        {brands.map((b) => (
          <Link key={b.id} href={`?brand=${b.id}`}>
            <Card padding="sm" withBorder style={{ cursor: 'pointer' }}>
              <Image src={b.image || imageHelper.getPlaceholder(80, 40)} alt={b.name} height={40} />
              <Text size="sm" mt={6}>{b.name}</Text>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
