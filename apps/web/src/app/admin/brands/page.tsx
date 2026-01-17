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
import { brandApi, imageHelper } from '@/services';
import { Brand } from '@/types';
import { LoadingState, EmptyState } from '@/components';
import { BrandFormModal } from './BrandFormModal';
import { DeleteConfirmModal } from '../perfumes/DeleteConfirmModal';

export default function AdminBrandsPage() {
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [brandToDelete, setBrandToDelete] = useState<Brand | null>(null);

  const [formOpened, { open: openForm, close: closeForm }] = useDisclosure(false);
  const [deleteOpened, { open: openDelete, close: closeDelete }] = useDisclosure(false);

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    setLoading(true);
    try {
      const res = await brandApi.getAll();
      if (res.success && res.data) {
        setBrands(res.data);
      }
    } catch (error) {
      console.error('Error loading brands:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setSelectedBrand(null);
    openForm();
  };

  const handleEdit = (brand: Brand) => {
    setSelectedBrand(brand);
    openForm();
  };

  const handleDelete = (brand: Brand) => {
    setBrandToDelete(brand);
    openDelete();
  };

  const confirmDelete = async () => {
    if (!brandToDelete) return;

    try {
      const res = await brandApi.delete(brandToDelete.id);
      if (res.success) {
        notifications.show({
          title: 'تم الحذف',
          message: 'تم حذف الماركة بنجاح',
          color: 'green',
        });
        loadBrands();
      } else {
        throw new Error(res.error);
      }
    } catch (error) {
      notifications.show({
        title: 'خطأ',
        message: 'حدث خطأ أثناء حذف الماركة',
        color: 'red',
      });
    } finally {
      closeDelete();
      setBrandToDelete(null);
    }
  };

  const handleFormSuccess = () => {
    closeForm();
    loadBrands();
    notifications.show({
      title: 'تم الحفظ',
      message: selectedBrand ? 'تم تحديث الماركة بنجاح' : 'تم إضافة الماركة بنجاح',
      color: 'green',
    });
  };

  return (
    <>
      <Stack gap="lg">
        <Group justify="space-between">
          <Title order={2}>إدارة الماركات</Title>
          <Button leftSection={<IconPlus size={18} />} onClick={handleCreate}>
            إضافة ماركة
          </Button>
        </Group>

        {loading ? (
          <LoadingState message="جاري تحميل الماركات..." />
        ) : brands.length === 0 ? (
          <EmptyState
            title="لا توجد ماركات"
            message="لم يتم العثور على ماركات. قم بإضافة ماركة جديدة."
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
                {brands.map((brand) => (
                  <Table.Tr key={brand.id}>
                    <Table.Td>
                      <Image
                        src={brand.image || imageHelper.getPlaceholder(50, 50)}
                        alt={brand.name}
                        width={50}
                        height={50}
                        radius="sm"
                        fallbackSrc={imageHelper.getPlaceholder(50, 50)}
                      />
                    </Table.Td>
                    <Table.Td>
                      <Text fw={500}>{brand.name}</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dimmed" dir="ltr">
                        /{brand.slug}
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" lineClamp={1}>
                        {brand.description || '-'}
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
                            onClick={() => handleEdit(brand)}
                          >
                            تعديل
                          </Menu.Item>
                          <Menu.Item
                            leftSection={<IconTrash size={16} />}
                            color="red"
                            onClick={() => handleDelete(brand)}
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
      <BrandFormModal
        opened={formOpened}
        onClose={closeForm}
        brand={selectedBrand}
        onSuccess={handleFormSuccess}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        opened={deleteOpened}
        onClose={closeDelete}
        onConfirm={confirmDelete}
        title="حذف الماركة"
        message={`هل أنت متأكد من حذف الماركة "${brandToDelete?.name}"؟ لن يتم حذف العطور المرتبطة بها.`}
      />
    </>
  );
}
