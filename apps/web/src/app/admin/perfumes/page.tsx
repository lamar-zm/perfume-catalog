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
} from '@tabler/icons-react';
import { perfumeApi, categoryApi, brandApi, imageHelper } from '@/services';
import { Perfume, Category, Brand, PaginatedResult } from '@/types';
import { Pagination, LoadingState, EmptyState } from '@/components';
import { PerfumeFormModal } from './PerfumeFormModal';
import { DeleteConfirmModal } from './DeleteConfirmModal';

const PAGE_SIZE = 10;

export default function AdminPerfumesPage() {
  const [loading, setLoading] = useState(true);
  const [perfumes, setPerfumes] = useState<PaginatedResult<Perfume> | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const [perfumeToDelete, setPerfumeToDelete] = useState<Perfume | null>(null);

  const [formOpened, { open: openForm, close: closeForm }] = useDisclosure(false);
  const [deleteOpened, { open: openDelete, close: closeDelete }] = useDisclosure(false);

  useEffect(() => {
    loadCategories();
    loadBrands();
  }, []);

  useEffect(() => {
    loadPerfumes();
  }, [currentPage, categoryFilter]);

  const loadCategories = async () => {
    const res = await categoryApi.getAll();
    if (res.success && res.data) {
      setCategories(res.data);
    }
  };

  const loadBrands = async () => {
    const res = await brandApi.getAll();
    if (res.success && res.data) {
      setBrands(res.data);
    }
  };

  const loadPerfumes = async () => {
    setLoading(true);
    try {
      const res = await perfumeApi.getAll({
        page: currentPage,
        pageSize: PAGE_SIZE,
        categoryId: categoryFilter || undefined,
      });
      if (res.success && res.data) {
        setPerfumes(res.data);
      }
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
      const res = await perfumeApi.getAll({
        page: 1,
        pageSize: PAGE_SIZE,
        search: searchQuery,
      });
      if (res.success && res.data) {
        setPerfumes(res.data);
        setCurrentPage(1);
      }
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
      const res = await perfumeApi.delete(perfumeToDelete.id);
      if (res.success) {
        notifications.show({
          title: 'تم الحذف',
          message: 'تم حذف العطر بنجاح',
          color: 'green',
        });
        loadPerfumes();
      } else {
        throw new Error(res.error);
      }
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

  // featured concept removed

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
                    <Table.Th>الحالة</Table.Th>
                    <Table.Th>الإجراءات</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {perfumes.data.map((perfume) => (
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
                        {perfume.outOfStock ? (
                          <Badge color="red" variant="filled">نفد من المخزون</Badge>
                        ) : (
                          <Badge color="green" variant="light">متوفر</Badge>
                        )}
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
        brands={brands}
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
