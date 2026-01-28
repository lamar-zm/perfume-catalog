
'use client';

import { useEffect, useState } from 'react';
import {
  Stack,
  Title,
  Table,
  Badge,
  Image,
  Paper,
  Text,
  Group,
} from '@mantine/core';
import { perfumeApi, categoryApi, imageHelper } from '@/services';
import { Perfume, Category } from '@/types';
import { LoadingState, EmptyState } from '@/components';

export default function AdminMostSoldPage() {
  const [loading, setLoading] = useState(true);
  const [mostSold, setMostSold] = useState<Perfume[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [mostSoldRes, catsRes] = await Promise.all([
        perfumeApi.getMostSold(100),
        categoryApi.getAll(),
      ]);
      setMostSold(mostSoldRes.success && mostSoldRes.data ? mostSoldRes.data : []);
      setCategories(catsRes.success && catsRes.data ? catsRes.data : []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryName = (categoryId: string | null | undefined) => {
    if (!categoryId) return '-';
    return categories.find((c) => c.id === categoryId)?.name || '-';
  };

  if (loading) {
    return <LoadingState message="جاري تحميل البيانات..." />;
  }

  return (
    <Stack gap="xl">
      <Title order={2}>الأكثر مبيعاً</Title>

      <Paper p="md" radius="md" withBorder>
        <Group justify="space-between" mb="md">
          <Title order={4}>قائمة الأكثر مبيعاً</Title>
          <Badge size="lg" variant="light">
            {mostSold.length} عطر
          </Badge>
        </Group>

        {mostSold.length === 0 ? (
          <EmptyState title="لا توجد بيانات مبيعات" message="لم يتم العثور على بيانات مبيعات كافية" />
        ) : (
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>الصورة</Table.Th>
                <Table.Th>العطر</Table.Th>
                <Table.Th>التصنيف</Table.Th>
                <Table.Th>السعر</Table.Th>
                <Table.Th>المبيعات</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {mostSold.map((perfume) => (
                <Table.Tr key={perfume.id}>
                  <Table.Td>
                    <Image
                      src={perfume.images?.[0] || imageHelper.getPlaceholder(50, 50)}
                      alt={perfume.title}
                      width={50}
                      height={50}
                      radius="sm"
                      fallbackSrc={imageHelper.getPlaceholder(50, 50)}
                    />
                  </Table.Td>
                  <Table.Td>
                    <Text fw={500}>{perfume.title}</Text>
                  </Table.Td>
                  <Table.Td>{getCategoryName(perfume.categoryId)}</Table.Td>
                  <Table.Td>
                    {perfume.discount ? (
                      <Group gap="xs">
                        <Text td="line-through" c="dimmed" size="sm">
                          {perfume.price}
                        </Text>
                        <Text fw={500}>{perfume.price - perfume.discount} د.ع</Text>
                      </Group>
                    ) : (
                      `${perfume.price} د.ع`
                    )}
                  </Table.Td>
                  <Table.Td>
                    <Badge variant="light" color="blue">{perfume.salesCount}</Badge>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        )}
      </Paper>
    </Stack>
  );
}
