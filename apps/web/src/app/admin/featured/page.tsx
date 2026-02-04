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
  Button,
  Switch,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { perfumeApi, categoryApi, imageHelper } from '@/services';
import { Perfume, Category } from '@/types';
import { LoadingState, EmptyState } from '@/components';

export default function AdminMostSoldPage() {
  const [loading, setLoading] = useState(true);
  const [allPerfumes, setAllPerfumes] = useState<Perfume[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [toggling, setToggling] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [perfumesRes, catsRes] = await Promise.all([
        perfumeApi.getAllForMostSoldAdmin(),
        categoryApi.getAll(),
      ]);
      setAllPerfumes(perfumesRes.success && perfumesRes.data ? perfumesRes.data : []);
      setCategories(catsRes.success && catsRes.data ? catsRes.data : []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleMostSold = async (perfumeId: string) => {
    setToggling(perfumeId);
    try {
      const res = await perfumeApi.toggleMostSold(perfumeId);
      if (res.success) {
        // Update local state
        setAllPerfumes(prev => prev.map(p => 
          p.id === perfumeId ? { ...p, isMostSold: !p.isMostSold } : p
        ));
        notifications.show({
          title: 'تم التحديث',
          message: res.data?.isMostSold ? 'تمت إضافة العطر للأكثر مبيعاً' : 'تمت إزالة العطر من الأكثر مبيعاً',
          color: 'green',
        });
      } else {
        throw new Error(res.error);
      }
    } catch (error) {
      notifications.show({
        title: 'خطأ',
        message: 'حدث خطأ أثناء التحديث',
        color: 'red',
      });
    } finally {
      setToggling(null);
    }
  };

  const getCategoryName = (categoryId: string | null | undefined) => {
    if (!categoryId) return '-';
    return categories.find((c) => c.id === categoryId)?.name || '-';
  };

  const mostSold = allPerfumes.filter(p => p.isMostSold);
  const notMostSold = allPerfumes.filter(p => !p.isMostSold);

  if (loading) {
    return <LoadingState message="جاري تحميل البيانات..." />;
  }

  return (
    <Stack gap="xl">
      <Title order={2}>إدارة الأكثر مبيعاً</Title>

      {/* Most Sold Perfumes */}
      <Paper p="md" radius="md" withBorder>
        <Group justify="space-between" mb="md">
          <Title order={4}>العطور في قائمة الأكثر مبيعاً</Title>
          <Badge size="lg" variant="light" color="green">
            {mostSold.length} عطر
          </Badge>
        </Group>

        {mostSold.length === 0 ? (
          <EmptyState 
            title="لا توجد عطور" 
            message="قم بإضافة عطور لقائمة الأكثر مبيعاً من الجدول أدناه" 
          />
        ) : (
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>الصورة</Table.Th>
                <Table.Th>العطر</Table.Th>
                <Table.Th>التصنيف</Table.Th>
                <Table.Th>السعر</Table.Th>
                <Table.Th>الحالة</Table.Th>
                <Table.Th>الإجراء</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {mostSold.map((perfume) => (
                <Table.Tr key={perfume.id}>
                  <Table.Td>
                    <Image
                      src={(perfume.coverImage || perfume.images?.[0]) || imageHelper.getPlaceholder(50, 50)}
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
                    <Badge color="green" variant="light">الأكثر مبيعاً</Badge>
                  </Table.Td>
                  <Table.Td>
                    <Button
                      variant="light"
                      color="red"
                      size="xs"
                      loading={toggling === perfume.id}
                      onClick={() => handleToggleMostSold(perfume.id)}
                    >
                      إزالة
                    </Button>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        )}
      </Paper>

      {/* Other Perfumes */}
      <Paper p="md" radius="md" withBorder>
        <Group justify="space-between" mb="md">
          <Title order={4}>عطور أخرى</Title>
          <Badge size="lg" variant="light" color="gray">
            {notMostSold.length} عطر
          </Badge>
        </Group>

        {notMostSold.length === 0 ? (
          <Text c="dimmed" ta="center" py="md">
            جميع العطور مضافة للأكثر مبيعاً
          </Text>
        ) : (
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>الصورة</Table.Th>
                <Table.Th>العطر</Table.Th>
                <Table.Th>التصنيف</Table.Th>
                <Table.Th>السعر</Table.Th>
                <Table.Th>الإجراء</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {notMostSold.map((perfume) => (
                <Table.Tr key={perfume.id}>
                  <Table.Td>
                    <Image
                      src={(perfume.coverImage || perfume.images?.[0]) || imageHelper.getPlaceholder(50, 50)}
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
                    <Button
                      variant="light"
                      color="green"
                      size="xs"
                      loading={toggling === perfume.id}
                      onClick={() => handleToggleMostSold(perfume.id)}
                    >
                      إضافة للأكثر مبيعاً
                    </Button>
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
