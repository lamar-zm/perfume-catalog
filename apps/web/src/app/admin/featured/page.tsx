'use client';

import { useEffect, useState } from 'react';
import {
  Stack,
  Title,
  Table,
  ActionIcon,
  Badge,
  Image,
  Paper,
  Text,
  Tooltip,
  Group,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconStar, IconStarOff } from '@tabler/icons-react';
import { perfumeApi, categoryApi, imageHelper } from '@/services';
import { Perfume, Category } from '@/types';
import { LoadingState, EmptyState } from '@/components';

export default function AdminFeaturedPage() {
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState<Perfume[]>([]);
  const [allPerfumes, setAllPerfumes] = useState<Perfume[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [featuredRes, allRes, catsRes] = await Promise.all([
        perfumeApi.getFeatured(100),
        perfumeApi.getAll({ page: 1, pageSize: 100 }),
        categoryApi.getAll(),
      ]);
      setFeatured(featuredRes.success ? featuredRes.data : []);
      setAllPerfumes(allRes.success ? allRes.data.data : []);
      setCategories(catsRes.success ? catsRes.data : []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFeatured = async (perfume: Perfume) => {
    try {
      const res = await perfumeApi.toggleFeatured(perfume.id);
      if (res.success) {
        loadData();
        notifications.show({
          title: 'تم التحديث',
          message: perfume.isFeatured
            ? 'تم إزالة العطر من المميزة'
            : 'تم إضافة العطر للمميزة',
          color: 'green',
        });
      } else {
        throw new Error(res.error);
      }
    } catch (error) {
      notifications.show({
        title: 'خطأ',
        message: 'حدث خطأ أثناء تحديث حالة العطر',
        color: 'red',
      });
    }
  };

  const getCategoryName = (categoryId: string | null | undefined) => {
    if (!categoryId) return '-';
    return categories.find((c) => c.id === categoryId)?.name || '-';
  };

  const nonFeatured = allPerfumes.filter((p) => !p.isFeatured);

  if (loading) {
    return <LoadingState message="جاري تحميل البيانات..." />;
  }

  return (
    <Stack gap="xl">
      <Title order={2}>إدارة العطور المميزة</Title>

      {/* Featured Perfumes */}
      <Paper p="md" radius="md" withBorder>
        <Group justify="space-between" mb="md">
          <Title order={4}>العطور المميزة الحالية</Title>
          <Badge size="lg" variant="light">
            {featured.length} عطر
          </Badge>
        </Group>

        {featured.length === 0 ? (
          <EmptyState
            title="لا توجد عطور مميزة"
            message="قم بإضافة عطور للقائمة المميزة من الجدول أدناه"
          />
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
              {featured.map((perfume) => (
                <Table.Tr key={perfume.id}>
                  <Table.Td>
                    <Image
                      src={(perfume.images?.[0]?.url || perfume.image) || imageHelper.getPlaceholder(50, 50)}
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
                        <Text fw={500}>
                          {perfume.price - perfume.discount} د.ع
                        </Text>
                      </Group>
                    ) : (
                      `${perfume.price} د.ع`
                    )}
                  </Table.Td>
                  <Table.Td>
                    <Tooltip label="إزالة من المميزة">
                      <ActionIcon
                        variant="filled"
                        color="yellow"
                        onClick={() => handleToggleFeatured(perfume)}
                      >
                        <IconStar size={16} />
                      </ActionIcon>
                    </Tooltip>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        )}
      </Paper>

      {/* Non-Featured Perfumes */}
      <Paper p="md" radius="md" withBorder>
        <Group justify="space-between" mb="md">
          <Title order={4}>العطور الأخرى</Title>
          <Badge size="lg" variant="light" color="gray">
            {nonFeatured.length} عطر
          </Badge>
        </Group>

        {nonFeatured.length === 0 ? (
          <Text c="dimmed" ta="center" py="md">
            جميع العطور مميزة
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
              {nonFeatured.map((perfume) => (
                <Table.Tr key={perfume.id}>
                  <Table.Td>
                    <Image
                      src={(perfume.images?.[0]?.url || perfume.image) || imageHelper.getPlaceholder(50, 50)}
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
                        <Text fw={500}>
                          {perfume.price - perfume.discount} د.ع
                        </Text>
                      </Group>
                    ) : (
                      `${perfume.price} د.ع`
                    )}
                  </Table.Td>
                  <Table.Td>
                    <Tooltip label="إضافة للمميزة">
                      <ActionIcon
                        variant="light"
                        color="gray"
                        onClick={() => handleToggleFeatured(perfume)}
                      >
                        <IconStarOff size={16} />
                      </ActionIcon>
                    </Tooltip>
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
