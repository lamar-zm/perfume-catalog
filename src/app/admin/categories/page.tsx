'use client';

import { useEffect, useState } from 'react';
import {
  Stack,
  Title,
  Group,
  Button,
  Table,
  ActionIcon,
  Image,
  Menu,
  Paper,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import {
  IconPlus,
  IconPencil,
  IconTrash,
  IconDotsVertical,
} from '@tabler/icons-react';
import { categoryService, imageService } from '@/services';
import { Category } from '@/types';
import { LoadingState, EmptyState } from '@/components';
import { CategoryFormModal } from './CategoryFormModal';
import { DeleteConfirmModal } from '../perfumes/DeleteConfirmModal';

export default function AdminCategoriesPage() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(null);

  const [formOpened, { open: openForm, close: closeForm }] = useDisclosure(false);
  const [deleteOpened, { open: openDelete, close: closeDelete }] = useDisclosure(false);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setLoading(true);
    try {
      const data = await categoryService.getAll();
      setCategories(data);
    } catch (error) {
      console.error('Error loading categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setSelectedCategory(null);
    openForm();
  };

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    openForm();
  };

  const handleDelete = (category: Category) => {
    setCategoryToDelete(category);
    openDelete();
  };

  const confirmDelete = async () => {
    if (!categoryToDelete) return;

    try {
      await categoryService.delete(categoryToDelete.id);
      notifications.show({
        title: 'تم الحذف',
        message: 'تم حذف التصنيف بنجاح',
        color: 'green',
      });
      loadCategories();
    } catch (error) {
      notifications.show({
        title: 'خطأ',
        message: 'حدث خطأ أثناء حذف التصنيف',
        color: 'red',
      });
    } finally {
      closeDelete();
      setCategoryToDelete(null);
    }
  };

  const handleFormSuccess = () => {
    closeForm();
    loadCategories();
    notifications.show({
      title: 'تم الحفظ',
      message: selectedCategory ? 'تم تحديث التصنيف بنجاح' : 'تم إضافة التصنيف بنجاح',
      color: 'green',
    });
  };

  return (
    <>
      <Stack gap="lg">
        <Group justify="space-between">
          <Title order={2}>إدارة التصنيفات</Title>
          <Button leftSection={<IconPlus size={18} />} onClick={handleCreate}>
            إضافة تصنيف
          </Button>
        </Group>

        {loading ? (
          <LoadingState message="جاري تحميل التصنيفات..." />
        ) : categories.length === 0 ? (
          <EmptyState
            title="لا توجد تصنيفات"
            message="لم يتم العثور على تصنيفات. قم بإضافة تصنيف جديد."
          />
        ) : (
          <Paper radius="md" withBorder style={{ overflow: 'hidden' }}>
            <Table striped highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>الصورة</Table.Th>
                  <Table.Th>الاسم</Table.Th>
                  <Table.Th>الرابط</Table.Th>
                  <Table.Th>الوصف</Table.Th>
                  <Table.Th>الإجراءات</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {categories.map((category) => (
                  <Table.Tr key={category.id}>
                    <Table.Td>
                      <Image
                        src={category.image || imageService.getPlaceholder(50, 50)}
                        alt={category.name}
                        width={50}
                        height={50}
                        radius="sm"
                        fallbackSrc={imageService.getPlaceholder(50, 50)}
                      />
                    </Table.Td>
                    <Table.Td>
                      <Text fw={500}>{category.name}</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dimmed" dir="ltr">
                        /{category.slug}
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" lineClamp={1}>
                        {category.description || '-'}
                      </Text>
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
                            onClick={() => handleEdit(category)}
                          >
                            تعديل
                          </Menu.Item>
                          <Menu.Item
                            leftSection={<IconTrash size={16} />}
                            color="red"
                            onClick={() => handleDelete(category)}
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
        )}
      </Stack>

      {/* Form Modal */}
      <CategoryFormModal
        opened={formOpened}
        onClose={closeForm}
        category={selectedCategory}
        onSuccess={handleFormSuccess}
      />

      {/* Delete Confirm Modal */}
      <DeleteConfirmModal
        opened={deleteOpened}
        onClose={closeDelete}
        onConfirm={confirmDelete}
        title="حذف التصنيف"
        message={`هل أنت متأكد من حذف "${categoryToDelete?.name}"؟ سيتم حذف التصنيف ولكن العطور المرتبطة به ستبقى بدون تصنيف.`}
      />
    </>
  );
}
