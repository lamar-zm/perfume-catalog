'use client';

import { useState, useEffect } from 'react';
import {
  Modal,
  TextInput,
  Textarea,
  Button,
  Stack,
  Group,
  Image,
  Box,
  Text,
  LoadingOverlay,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Category, CategoryFormData } from '@/types';
import { categoryApi, imageHelper, uploadApi } from '@/services';

interface CategoryFormModalProps {
  opened: boolean;
  onClose: () => void;
  category: Category | null;
  onSuccess: () => void;
}

export function CategoryFormModal({
  opened,
  onClose,
  category,
  onSuccess,
}: CategoryFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<CategoryFormData>({
    initialValues: {
      name: '',
      description: '',
      image: '',
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? 'الاسم يجب أن يكون 2 أحرف على الأقل' : null,
    },
  });

  // Reset form when modal opens/closes or category changes
  useEffect(() => {
    if (opened) {
      if (category) {
        form.setValues({
          name: category.name,
          description: category.description || '',
          image: category.image,
        });
        setImagePreview(category.image);
      } else {
        form.reset();
        setImagePreview(null);
      }
    }
  }, [opened, category]);

  const handleImageDrop = async (files: FileWithPath[]) => {
    if (files.length > 0) {
      const file = files[0];
      setUploading(true);
      try {
        const result = await uploadApi.upload(file);
        if (result.success && result.data) {
          form.setFieldValue('image', result.data.url);
          setImagePreview(result.data.url);
        } else {
          console.error('Upload failed:', result.error);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleRemoveImage = async () => {
    const currentImage = form.values.image;
    if (currentImage && currentImage.startsWith('/uploads/')) {
      try {
        await uploadApi.delete(currentImage);
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
    setImagePreview(null);
    form.setFieldValue('image', '');
  };

  const handleSubmit = async (values: CategoryFormData) => {
    setLoading(true);
    try {
      const categoryData = {
        name: values.name,
        description: values.description || undefined,
        image: values.image || '',
      };

      let res;
      if (category) {
        res = await categoryApi.update(category.id, categoryData);
      } else {
        res = await categoryApi.create(categoryData);
      }

      if (res.success) {
        onSuccess();
      } else {
        console.error('Error saving category:', res.error);
      }
    } catch (error) {
      console.error('Error saving category:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={category ? 'تعديل التصنيف' : 'إضافة تصنيف جديد'}
      size="lg"
    >
      <Box pos="relative">
        <LoadingOverlay visible={uploading} zIndex={1000} overlayProps={{ blur: 2 }} />
        
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="md">
            {/* Image Upload */}
            <Box>
              <Text size="sm" fw={500} mb="xs">
                صورة التصنيف
              </Text>
              {imagePreview ? (
                <Box pos="relative">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    height={150}
                    radius="md"
                    fallbackSrc={imageHelper.getPlaceholder(400, 150)}
                  />
                  <Button
                    variant="filled"
                    color="red"
                    size="xs"
                    pos="absolute"
                    top={10}
                    right={10}
                    onClick={handleRemoveImage}
                  >
                    <IconX size={16} />
                  </Button>
                </Box>
              ) : (
                <Dropzone
                  onDrop={handleImageDrop}
                  accept={IMAGE_MIME_TYPE}
                  maxSize={5 * 1024 ** 2}
                  multiple={false}
                  loading={uploading}
                >
                  <Group
                    justify="center"
                    gap="xl"
                    mih={120}
                    style={{ pointerEvents: 'none' }}
                  >
                    <Dropzone.Accept>
                      <IconUpload size={40} stroke={1.5} />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                      <IconX size={40} stroke={1.5} />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                      <IconPhoto size={40} stroke={1.5} />
                    </Dropzone.Idle>
                    <div>
                      <Text size="md" inline>
                        اسحب الصورة هنا أو اضغط للاختيار
                      </Text>
                      <Text size="sm" c="dimmed" inline mt={7}>
                        الحد الأقصى للحجم 5MB
                      </Text>
                    </div>
                  </Group>
                </Dropzone>
              )}
            </Box>

            <TextInput
              label="اسم التصنيف"
              placeholder="أدخل اسم التصنيف"
              required
              {...form.getInputProps('name')}
            />

            <Textarea
              label="الوصف"
              placeholder="أدخل وصف التصنيف (اختياري)"
              minRows={2}
              {...form.getInputProps('description')}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="light" onClick={onClose}>
                إلغاء
              </Button>
              <Button type="submit" loading={loading}>
                {category ? 'تحديث' : 'إضافة'}
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
