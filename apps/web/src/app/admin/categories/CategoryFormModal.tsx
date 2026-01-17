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
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Category, CategoryFormData } from '@/types';
import { categoryApi, imageHelper } from '@/services';

interface CategoryFormModalProps {
  opened: boolean;
  onClose: () => void;
  category: Category | null;
  onSuccess: () => void;
}

// Helper function to generate slug from Arabic text
function generateSlug(text: string): string {
  const arabicToEnglish: Record<string, string> = {
    'عطور رجالية': 'mens-perfumes',
    'عطور نسائية': 'womens-perfumes',
    'عطور للجنسين': 'unisex-perfumes',
    'عطور عربية': 'arabic-perfumes',
    'عطور فرنسية': 'french-perfumes',
    'مجموعات هدايا': 'gift-sets',
  };

  // Check if we have a predefined translation
  if (arabicToEnglish[text]) {
    return arabicToEnglish[text];
  }

  // Otherwise, create a simple slug from the text
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\u0600-\u06FFa-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function CategoryFormModal({
  opened,
  onClose,
  category,
  onSuccess,
}: CategoryFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const form = useForm<CategoryFormData>({
    initialValues: {
      name: '',
      slug: '',
      description: '',
      image: '',
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? 'الاسم يجب أن يكون 2 أحرف على الأقل' : null,
      slug: (value) =>
        value.trim().length < 2 ? 'الرابط يجب أن يكون 2 أحرف على الأقل' : null,
    },
  });

  // Reset form when modal opens/closes or category changes
  useEffect(() => {
    if (opened) {
      if (category) {
        form.setValues({
          name: category.name,
          slug: category.slug,
          description: category.description || '',
          image: category.image,
        });
        setImagePreview(category.image);
      } else {
        form.reset();
        setImagePreview(null);
      }
      setImageFile(null);
    }
  }, [opened, category]);

  // Auto-generate slug when name changes (only for new categories)
  const handleNameChange = (value: string) => {
    form.setFieldValue('name', value);
    if (!category) {
      form.setFieldValue('slug', generateSlug(value));
    }
  };

  const handleImageDrop = (files: FileWithPath[]) => {
    if (files.length > 0) {
      const file = files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (values: CategoryFormData) => {
    setLoading(true);
    try {
      let imageUrl = typeof values.image === 'string' ? values.image : '';

      // For now, use existing image or placeholder
      if (imageFile) {
        imageUrl = URL.createObjectURL(imageFile);
      }

      const categoryData = {
        name: values.name,
        slug: values.slug,
        description: values.description || undefined,
        image: imageUrl,
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
                  onClick={() => {
                    setImagePreview(null);
                    setImageFile(null);
                    form.setFieldValue('image', '');
                  }}
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
            value={form.values.name}
            onChange={(e) => handleNameChange(e.target.value)}
            error={form.errors.name}
          />

          <TextInput
            label="الرابط (Slug)"
            placeholder="category-slug"
            description="يستخدم في الروابط - سيتم إنشاؤه تلقائياً"
            required
            dir="ltr"
            {...form.getInputProps('slug')}
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
    </Modal>
  );
}
