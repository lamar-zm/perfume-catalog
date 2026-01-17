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
  NumberInput,
  Group,
  Button,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import { perfumeService, categoryService, imageService } from '@/services';
import { Perfume, Category } from '@/types';
import { LoadingState, EmptyState } from '@/components';

export default function AdminDiscountsPage() {
  const [loading, setLoading] = useState(true);
  const [discounted, setDiscounted] = useState<Perfume[]>([]);
  const [allPerfumes, setAllPerfumes] = useState<Perfume[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingDiscount, setEditingDiscount] = useState<{
    id: string;
    value: number;
  } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [discountedPerfumes, all, cats] = await Promise.all([
        perfumeService.getDiscounted(),
        perfumeService.getAll({ page: 1, pageSize: 100 }),
        categoryService.getAll(),
      ]);
      setDiscounted(discountedPerfumes);
      setAllPerfumes(all.data);
      setCategories(cats);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateDiscount = async (perfumeId: string, discount: number | undefined) => {
    try {
      await perfumeService.update(perfumeId, { discount });
      loadData();
      setEditingDiscount(null);
      notifications.show({
        title: 'تم التحديث',
        message: discount ? 'تم تحديث الخصم بنجاح' : 'تم إزالة الخصم',
        color: 'green',
      });
    } catch (error) {
      notifications.show({
        title: 'خطأ',
        message: 'حدث خطأ أثناء تحديث الخصم',
        color: 'red',
      });
    }
  };

  const handleRemoveDiscount = async (perfumeId: string) => {
    await handleUpdateDiscount(perfumeId, undefined);
  };

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || '-';
  };

  const nonDiscounted = allPerfumes.filter((p) => !p.discount || p.discount === 0);

  if (loading) {
    return <LoadingState message="جاري تحميل البيانات..." />;
  }

  return (
    <Stack gap="xl">
      <Title order={2}>إدارة التخفيضات</Title>

      {/* Discounted Perfumes */}
      <Paper p="md" radius="md" withBorder>
        <Group justify="space-between" mb="md">
          <Title order={4}>عطور بتخفيضات نشطة</Title>
          <Badge size="lg" variant="light" color="red">
            {discounted.length} عطر
          </Badge>
        </Group>

        {discounted.length === 0 ? (
          <EmptyState
            title="لا توجد تخفيضات"
            message="قم بإضافة تخفيضات للعطور من الجدول أدناه"
          />
        ) : (
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>الصورة</Table.Th>
                <Table.Th>العطر</Table.Th>
                <Table.Th>السعر الأصلي</Table.Th>
                <Table.Th>الخصم</Table.Th>
                <Table.Th>السعر النهائي</Table.Th>
                <Table.Th>الإجراءات</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {discounted.map((perfume) => (
                <Table.Tr key={perfume.id}>
                  <Table.Td>
                    <Image
                      src={perfume.image || imageService.getPlaceholder(50, 50)}
                      alt={perfume.title}
                      width={50}
                      height={50}
                      radius="sm"
                      fallbackSrc={imageService.getPlaceholder(50, 50)}
                    />
                  </Table.Td>
                  <Table.Td>
                    <Text fw={500}>{perfume.title}</Text>
                  </Table.Td>
                  <Table.Td>{perfume.price} د.ع</Table.Td>
                  <Table.Td>
                    {editingDiscount?.id === perfume.id ? (
                      <Group gap="xs">
                        <NumberInput
                          value={editingDiscount.value}
                          onChange={(val) =>
                            setEditingDiscount({
                              id: perfume.id,
                              value: Number(val) || 0,
                            })
                          }
                          min={0}
                          max={perfume.price - 1}
                          size="xs"
                          style={{ width: 80 }}
                        />
                        <ActionIcon
                          color="green"
                          size="sm"
                          onClick={() =>
                            handleUpdateDiscount(
                              perfume.id,
                              editingDiscount.value
                            )
                          }
                        >
                          <IconCheck size={14} />
                        </ActionIcon>
                        <ActionIcon
                          color="gray"
                          size="sm"
                          onClick={() => setEditingDiscount(null)}
                        >
                          <IconX size={14} />
                        </ActionIcon>
                      </Group>
                    ) : (
                      <Badge
                        color="red"
                        variant="light"
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                          setEditingDiscount({
                            id: perfume.id,
                            value: perfume.discount || 0,
                          })
                        }
                      >
                        -{perfume.discount} دينار
                      </Badge>
                    )}
                  </Table.Td>
                  <Table.Td>
                    <Text fw={600} c="green">
                      {perfume.price - (perfume.discount || 0)} د.ع
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Button
                      variant="light"
                      color="red"
                      size="xs"
                      onClick={() => handleRemoveDiscount(perfume.id)}
                    >
                      إزالة الخصم
                    </Button>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        )}
      </Paper>

      {/* Non-Discounted Perfumes */}
      <Paper p="md" radius="md" withBorder>
        <Group justify="space-between" mb="md">
          <Title order={4}>عطور بدون تخفيض</Title>
          <Badge size="lg" variant="light" color="gray">
            {nonDiscounted.length} عطر
          </Badge>
        </Group>

        {nonDiscounted.length === 0 ? (
          <Text c="dimmed" ta="center" py="md">
            جميع العطور لديها تخفيضات
          </Text>
        ) : (
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>الصورة</Table.Th>
                <Table.Th>العطر</Table.Th>
                <Table.Th>التصنيف</Table.Th>
                <Table.Th>السعر</Table.Th>
                <Table.Th>إضافة خصم</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {nonDiscounted.map((perfume) => (
                <Table.Tr key={perfume.id}>
                  <Table.Td>
                    <Image
                      src={perfume.image || imageService.getPlaceholder(50, 50)}
                      alt={perfume.title}
                      width={50}
                      height={50}
                      radius="sm"
                      fallbackSrc={imageService.getPlaceholder(50, 50)}
                    />
                  </Table.Td>
                  <Table.Td>
                    <Text fw={500}>{perfume.title}</Text>
                  </Table.Td>
                  <Table.Td>{getCategoryName(perfume.categoryId)}</Table.Td>
                  <Table.Td>{perfume.price} د.ع</Table.Td>
                  <Table.Td>
                    {editingDiscount?.id === perfume.id ? (
                      <Group gap="xs">
                        <NumberInput
                          value={editingDiscount.value}
                          onChange={(val) =>
                            setEditingDiscount({
                              id: perfume.id,
                              value: Number(val) || 0,
                            })
                          }
                          min={1}
                          max={perfume.price - 1}
                          placeholder="الخصم"
                          size="xs"
                          style={{ width: 80 }}
                        />
                        <ActionIcon
                          color="green"
                          size="sm"
                          onClick={() =>
                            handleUpdateDiscount(
                              perfume.id,
                              editingDiscount.value
                            )
                          }
                          disabled={editingDiscount.value <= 0}
                        >
                          <IconCheck size={14} />
                        </ActionIcon>
                        <ActionIcon
                          color="gray"
                          size="sm"
                          onClick={() => setEditingDiscount(null)}
                        >
                          <IconX size={14} />
                        </ActionIcon>
                      </Group>
                    ) : (
                      <Button
                        variant="light"
                        size="xs"
                        onClick={() =>
                          setEditingDiscount({ id: perfume.id, value: 0 })
                        }
                      >
                        إضافة خصم
                      </Button>
                    )}
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
