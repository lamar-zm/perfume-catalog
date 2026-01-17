'use client';

import { useState, useEffect } from 'react';
import {
  Modal,
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Switch,
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
import { Perfume, Category, PerfumeFormData } from '@/types';
import { perfumeService, imageService } from '@/services';

interface PerfumeFormModalProps {
  opened: boolean;
  onClose: () => void;
  perfume: Perfume | null;
  categories: Category[];
  onSuccess: () => void;
}

export function PerfumeFormModal({
  opened,
  onClose,
  perfume,
  categories,
  onSuccess,
}: PerfumeFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const form = useForm<PerfumeFormData>({
    initialValues: {
      title: '',
      description: '',
      price: 0,
      discount: undefined,
      categoryId: '',
      isFeatured: false,
      image: '',
    },
    validate: {
      title: (value) =>
        value.trim().length < 3 ? 'العنوان يجب أن يكون 3 أحرف على الأقل' : null,
      description: (value) =>
        value.trim().length < 10 ? 'الوصف يجب أن يكون 10 أحرف على الأقل' : null,
      price: (value) => (value <= 0 ? 'السعر يجب أن يكون أكبر من 0' : null),
      categoryId: (value) => (!value ? 'يرجى اختيار التصنيف' : null),
    },
  });

  // Reset form when modal opens/closes or perfume changes
  useEffect(() => {
    if (opened) {
      if (perfume) {
        form.setValues({
          title: perfume.title,
          description: perfume.description,
          price: perfume.price,
          discount: perfume.discount,
          categoryId: perfume.categoryId,
          isFeatured: perfume.isFeatured,
          image: perfume.image,
        });
        setImagePreview(perfume.image);
      } else {
        form.reset();
        setImagePreview(null);
      }
      setImageFile(null);
    }
  }, [opened, perfume]);

  const handleImageDrop = (files: FileWithPath[]) => {
    if (files.length > 0) {
      const file = files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (values: PerfumeFormData) => {
    setLoading(true);
    try {
      let imageUrl = typeof values.image === 'string' ? values.image : '';

      // Upload image if new file selected
      if (imageFile) {
        const uploadResult = await imageService.upload(imageFile, 'perfumes');
        imageUrl = uploadResult.url;
      }

      const perfumeData = {
        title: values.title,
        description: values.description,
        price: values.price,
        discount: values.discount || undefined,
        categoryId: values.categoryId,
        isFeatured: values.isFeatured,
        image: imageUrl,
        salesCount: perfume?.salesCount || 0,
      };

      if (perfume) {
        await perfumeService.update(perfume.id, perfumeData);
      } else {
        await perfumeService.create(perfumeData);
      }

      onSuccess();
    } catch (error) {
      console.error('Error saving perfume:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={perfume ? 'تعديل العطر' : 'إضافة عطر جديد'}
      size="lg"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          {/* Image Upload */}
          <Box>
            <Text size="sm" fw={500} mb="xs">
              صورة العطر
            </Text>
            {imagePreview ? (
              <Box pos="relative">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  height={200}
                  radius="md"
                  fallbackSrc={imageService.getPlaceholder(400, 200)}
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
                  mih={150}
                  style={{ pointerEvents: 'none' }}
                >
                  <Dropzone.Accept>
                    <IconUpload size={50} stroke={1.5} />
                  </Dropzone.Accept>
                  <Dropzone.Reject>
                    <IconX size={50} stroke={1.5} />
                  </Dropzone.Reject>
                  <Dropzone.Idle>
                    <IconPhoto size={50} stroke={1.5} />
                  </Dropzone.Idle>
                  <div>
                    <Text size="lg" inline>
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
            label="عنوان العطر"
            placeholder="أدخل عنوان العطر"
            required
            {...form.getInputProps('title')}
          />

          <Textarea
            label="الوصف"
            placeholder="أدخل وصف العطر"
            minRows={3}
            required
            {...form.getInputProps('description')}
          />

          <Select
            label="التصنيف"
            placeholder="اختر التصنيف"
            data={categories.map((c) => ({ value: c.id, label: c.name }))}
            required
            {...form.getInputProps('categoryId')}
          />

          <Group grow>
            <NumberInput
              label="السعر (د.ع)"
              placeholder="0"
              min={0}
              required
              {...form.getInputProps('price')}
            />
            <NumberInput
              label="الخصم (د.ع)"
              placeholder="0"
              min={0}
              {...form.getInputProps('discount')}
            />
          </Group>

          <Switch
            label="عطر مميز"
            description="سيظهر في قسم العطور المميزة"
            {...form.getInputProps('isFeatured', { type: 'checkbox' })}
          />

          <Group justify="flex-end" mt="md">
            <Button variant="light" onClick={onClose}>
              إلغاء
            </Button>
            <Button type="submit" loading={loading}>
              {perfume ? 'تحديث' : 'إضافة'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
