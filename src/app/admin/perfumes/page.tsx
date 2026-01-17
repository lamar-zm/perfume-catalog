'use client';

import { useEffect, useState } from 'react';
import {
  Stack,
  Title,
  Group,
  Button,
  Table,
  ActionIcon,
  Badge,
  Image,
  Menu,
  TextInput,
  Select,
  Paper,
  Text,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import {
  IconPlus,
  IconPencil,
  IconTrash,
  IconDotsVertical,
  IconSearch,
  IconStar,
  IconStarOff,
} from '@tabler/icons-react';
import { perfumeService, categoryService, imageService } from '@/services';
import { Perfume, Category, PaginatedResult } from '@/types';
import { Pagination, LoadingState, EmptyState } from '@/components';
import { PerfumeFormModal } from './PerfumeFormModal';
import { DeleteConfirmModal } from './DeleteConfirmModal';

const PAGE_SIZE = 10;

export default function AdminPerfumesPage() {
  const [loading, setLoading] = useState(true);
  const [perfumes, setPerfumes] = useState<PaginatedResult<Perfume> | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const [perfumeToDelete, setPerfumeToDelete] = useState<Perfume | null>(null);

  const [formOpened, { open: openForm, close: closeForm }] = useDisclosure(false);
  const [deleteOpened, { open: openDelete, close: closeDelete }] = useDisclosure(false);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadPerfumes();
  }, [currentPage, categoryFilter]);

  const loadCategories = async () => {
    const data = await categoryService.getAll();
    setCategories(data);
  };

  const loadPerfumes = async () => {
    setLoading(true);
    try {
      const result = await perfumeService.getAll(
        { page: currentPage, pageSize: PAGE_SIZE },
        categoryFilter ? { categoryId: categoryFilter } : undefined
      );
      setPerfumes(result);
    } catch (error) {
      console.error('Error loading perfumes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      loadPerfumes();
      return;
    }
    setLoading(true);
    try {
      const result = await perfumeService.search(searchQuery, {
        page: 1,
        pageSize: PAGE_SIZE,
      });
      setPerfumes(result);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error searching perfumes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setSelectedPerfume(null);
    openForm();
  };

  const handleEdit = (perfume: Perfume) => {
    setSelectedPerfume(perfume);
    openForm();
  };

  const handleDelete = (perfume: Perfume) => {
    setPerfumeToDelete(perfume);
    openDelete();
  };

  const confirmDelete = async () => {
    if (!perfumeToDelete) return;

    try {
      await perfumeService.delete(perfumeToDelete.id);
      notifications.show({
        title: 'تم الحذف',
        message: 'تم حذف العطر بنجاح',
        color: 'green',
      });
      loadPerfumes();
    } catch (error) {
      notifications.show({
        title: 'خطأ',
        message: 'حدث خطأ أثناء حذف العطر',
        color: 'red',
      });
    } finally {
      closeDelete();
      setPerfumeToDelete(null);
    }
  };

  const handleFormSuccess = () => {
    closeForm();
    loadPerfumes();
    notifications.show({
      title: 'تم الحفظ',
      message: selectedPerfume ? 'تم تحديث العطر بنجاح' : 'تم إضافة العطر بنجاح',
      color: 'green',
    });
  };

  const handleToggleFeatured = async (perfume: Perfume) => {
    try {
      await perfumeService.toggleFeatured(perfume.id);
      loadPerfumes();
      notifications.show({
        title: 'تم التحديث',
        message: perfume.isFeatured
          ? 'تم إزالة العطر من المميزة'
          : 'تم إضافة العطر للمميزة',
        color: 'green',
      });
    } catch (error) {
      notifications.show({
        title: 'خطأ',
        message: 'حدث خطأ أثناء تحديث حالة العطر',
        color: 'red',
      });
    }
  };

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || '-';
  };

  return (
    <>
      <Stack gap="lg">
        <Group justify="space-between">
          <Title order={2}>إدارة العطور</Title>
          <Button leftSection={<IconPlus size={18} />} onClick={handleCreate}>
            إضافة عطر
          </Button>
        </Group>

        {/* Filters */}
        <Paper p="md" radius="md" withBorder>
          <Group>
            <TextInput
              placeholder="البحث عن عطر..."
              leftSection={<IconSearch size={16} />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              style={{ flex: 1, maxWidth: 300 }}
            />
            <Button variant="light" onClick={handleSearch}>
              بحث
            </Button>
            <Select
              placeholder="جميع التصنيفات"
              data={[
                { value: '', label: 'جميع التصنيفات' },
                ...categories.map((c) => ({ value: c.id, label: c.name })),
              ]}
              value={categoryFilter}
              onChange={(value) => {
                setCategoryFilter(value || null);
                setCurrentPage(1);
              }}
              clearable
              style={{ minWidth: 180 }}
            />
          </Group>
        </Paper>

        {/* Table */}
        {loading ? (
          <LoadingState message="جاري تحميل العطور..." />
        ) : !perfumes || perfumes.data.length === 0 ? (
          <EmptyState
            title="لا توجد عطور"
            message="لم يتم العثور على عطور. قم بإضافة عطر جديد."
          />
        ) : (
          <>
            <Paper radius="md" withBorder style={{ overflow: 'hidden' }}>
              <Table striped highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>الصورة</Table.Th>
                    <Table.Th>العنوان</Table.Th>
                    <Table.Th>التصنيف</Table.Th>
                    <Table.Th>السعر</Table.Th>
                    <Table.Th>الخصم</Table.Th>
                    <Table.Th>المبيعات</Table.Th>
                    <Table.Th>الحالة</Table.Th>
                    <Table.Th>الإجراءات</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {perfumes.data.map((perfume) => (
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
                        <Text fw={500} lineClamp={1}>
                          {perfume.title}
                        </Text>
                      </Table.Td>
                      <Table.Td>{getCategoryName(perfume.categoryId)}</Table.Td>
                      <Table.Td>{perfume.price} د.ع</Table.Td>
                      <Table.Td>
                        {perfume.discount ? (
                          <Badge color="red" variant="light">
                            -{perfume.discount} دينار
                          </Badge>
                        ) : (
                          <Text c="dimmed" size="sm">
                            -
                          </Text>
                        )}
                      </Table.Td>
                      <Table.Td>
                        <Badge variant="light" color="blue">
                          {perfume.salesCount}
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        <Tooltip
                          label={
                            perfume.isFeatured
                              ? 'إزالة من المميزة'
                              : 'إضافة للمميزة'
                          }
                        >
                          <ActionIcon
                            variant={perfume.isFeatured ? 'filled' : 'light'}
                            color={perfume.isFeatured ? 'yellow' : 'gray'}
                            onClick={() => handleToggleFeatured(perfume)}
                          >
                            {perfume.isFeatured ? (
                              <IconStar size={16} />
                            ) : (
                              <IconStarOff size={16} />
                            )}
                          </ActionIcon>
                        </Tooltip>
                      </Table.Td>
                      <Table.Td>
                        <Menu position="bottom-end" withArrow>
                          <Menu.Target>
                            <ActionIcon variant="subtle">
                              <IconDotsVertical size={16} />
                            </ActionIcon>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Item
                              leftSection={<IconPencil size={16} />}
                              onClick={() => handleEdit(perfume)}
                            >
                              تعديل
                            </Menu.Item>
                            <Menu.Item
                              leftSection={<IconTrash size={16} />}
                              color="red"
                              onClick={() => handleDelete(perfume)}
                            >
                              حذف
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Paper>

            <Pagination
              currentPage={currentPage}
              totalPages={perfumes.totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </Stack>

      {/* Form Modal */}
      <PerfumeFormModal
        opened={formOpened}
        onClose={closeForm}
        perfume={selectedPerfume}
        categories={categories}
        onSuccess={handleFormSuccess}
      />

      {/* Delete Confirm Modal */}
      <DeleteConfirmModal
        opened={deleteOpened}
        onClose={closeDelete}
        onConfirm={confirmDelete}
        title="حذف العطر"
        message={`هل أنت متأكد من حذف "${perfumeToDelete?.title}"؟ لا يمكن التراجع عن هذا الإجراء.`}
      />
    </>
  );
}
