'use client';

import { useEffect, useState } from 'react';
import {
  Stack,
  Title,
  SimpleGrid,
  Paper,
  Text,
  Group,
  ThemeIcon,
  Table,
  Badge,
  ActionIcon,
  Tooltip,
} from '@mantine/core';
import {
  IconBottle,
  IconCategory,
  IconTrendingUp,
  IconDiscount,
  
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { perfumeApi, categoryApi } from '@/services';
import { Perfume, Category } from '@/types';
import { LoadingState } from '@/components';

interface DashboardStats {
  totalPerfumes: number;
  totalCategories: number;
  totalSales: number;
  discountedCount: number;
}

export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    totalPerfumes: 0,
    totalCategories: 0,
    totalSales: 0,
    discountedCount: 0,
  });
  const [mostSold, setMostSold] = useState<Perfume[]>([]);
  const [discounted, setDiscounted] = useState<Perfume[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [allPerfumesRes, allCategoriesRes, topSoldRes, discountedRes] =
        await Promise.all([
          perfumeApi.getAll({ page: 1, pageSize: 100 }),
          categoryApi.getAll(),
          perfumeApi.getMostSold(5),
          perfumeApi.getDiscounted(),
        ]);

      const allPerfumes = allPerfumesRes.success && allPerfumesRes.data ? allPerfumesRes.data : { data: [], total: 0, page: 1, pageSize: 100, totalPages: 0 };
      const allCategories = allCategoriesRes.success && allCategoriesRes.data ? allCategoriesRes.data : [];
      const topSold = topSoldRes.success && topSoldRes.data ? topSoldRes.data : [];
      const discountedPerfumes = discountedRes.success && discountedRes.data ? discountedRes.data : [];

      const totalSales = allPerfumes.data.reduce(
        (sum, p) => sum + p.salesCount,
        0
      );

      setStats({
        totalPerfumes: allPerfumes.total,
        totalCategories: allCategories.length,
        totalSales,
        discountedCount: discountedPerfumes.length,
      });
      setMostSold(topSold);
      setDiscounted(discountedPerfumes.slice(0, 5));
      setCategories(allCategories);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  // featured concept removed

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || '-';
  };

  if (loading) {
    return <LoadingState message="جاري تحميل البيانات..." />;
  }

  return (
    <Stack gap="xl">
      <Title order={2}>لوحة التحكم</Title>

      {/* Stats Cards */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>
        <Paper p="md" radius="md" withBorder>
          <Group>
            <ThemeIcon size="xl" radius="md" variant="light" color="brand">
              <IconBottle size={24} />
            </ThemeIcon>
            <div>
              <Text size="xs" c="dimmed">
                إجمالي العطور
              </Text>
              <Text fw={700} size="xl">
                {stats.totalPerfumes}
              </Text>
            </div>
          </Group>
        </Paper>

        <Paper p="md" radius="md" withBorder>
          <Group>
            <ThemeIcon size="xl" radius="md" variant="light" color="teal">
              <IconCategory size={24} />
            </ThemeIcon>
            <div>
              <Text size="xs" c="dimmed">
                التصنيفات
              </Text>
              <Text fw={700} size="xl">
                {stats.totalCategories}
              </Text>
            </div>
          </Group>
        </Paper>

        <Paper p="md" radius="md" withBorder>
          <Group>
            <ThemeIcon size="xl" radius="md" variant="light" color="blue">
              <IconTrendingUp size={24} />
            </ThemeIcon>
            <div>
              <Text size="xs" c="dimmed">
                إجمالي المبيعات
              </Text>
              <Text fw={700} size="xl">
                {stats.totalSales}
              </Text>
            </div>
          </Group>
        </Paper>

        <Paper p="md" radius="md" withBorder>
          <Group>
            <ThemeIcon size="xl" radius="md" variant="light" color="red">
              <IconDiscount size={24} />
            </ThemeIcon>
            <div>
              <Text size="xs" c="dimmed">
                عطور بتخفيض
              </Text>
              <Text fw={700} size="xl">
                {stats.discountedCount}
              </Text>
            </div>
          </Group>
        </Paper>
      </SimpleGrid>

      {/* Most Sold Perfumes */}
      <Paper p="md" radius="md" withBorder>
        <Title order={4} mb="md">
          الأكثر مبيعاً
        </Title>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>العطر</Table.Th>
              <Table.Th>التصنيف</Table.Th>
              <Table.Th>السعر</Table.Th>
              <Table.Th>المبيعات</Table.Th>
              {/* featured removed */}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {mostSold.map((perfume) => (
              <Table.Tr key={perfume.id}>
                <Table.Td fw={500}>{perfume.title}</Table.Td>
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
                  <Badge variant="light" color="blue">
                    {perfume.salesCount}
                  </Badge>
                </Table.Td>
                {/* featured actions removed */}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>

      {/* Discounted Perfumes */}
      <Paper p="md" radius="md" withBorder>
        <Title order={4} mb="md">
          عطور بتخفيضات نشطة
        </Title>
        {discounted.length === 0 ? (
          <Text c="dimmed" ta="center" py="md">
            لا توجد عطور بتخفيضات حالياً
          </Text>
        ) : (
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>العطر</Table.Th>
                <Table.Th>السعر الأصلي</Table.Th>
                <Table.Th>الخصم</Table.Th>
                <Table.Th>السعر النهائي</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {discounted.map((perfume) => (
                <Table.Tr key={perfume.id}>
                  <Table.Td fw={500}>{perfume.title}</Table.Td>
                  <Table.Td>{perfume.price} د.ع</Table.Td>
                  <Table.Td>
                    <Badge color="red" variant="light">
                      -{perfume.discount} دينار
                    </Badge>
                  </Table.Td>
                  <Table.Td fw={600} c="green">
                    {perfume.price - (perfume.discount || 0)} د.ع
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
