'use client';

import { useState, useEffect } from 'react';
import {
  Modal,
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Switch,
  Radio,
  Button,
  Stack,
  Group,
  Image,
  Box,
  Text,
  SimpleGrid,
  ActionIcon,
  TagsInput,
  LoadingOverlay,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX, IconTrash } from '@tabler/icons-react';
import type { Perfume, Category, Brand } from '@perfume-catalog/shared';
import { perfumeApi, uploadApi, imageHelper } from '@/services';

interface PerfumeFormData {
  title: string;
  description: string;
  gender?: 'men' | 'women' | 'unisex';
  price: number;
  discount?: number;
  categoryId: string;
  brandId: string;
  outOfStock?: boolean;
  coverImage?: string;
  images: string[];
  notes: string[];
}

interface PerfumeFormModalProps {
  opened: boolean;
  onClose: () => void;
  perfume: Perfume | null;
  categories: Category[];
  brands: Brand[];
  onSuccess: () => void;
}

export function PerfumeFormModal({
  opened,
  onClose,
  perfume,
  categories,
  brands,
  onSuccess,
}: PerfumeFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const form = useForm<PerfumeFormData>({
      initialValues: {
      title: '',
      description: '',
      gender: 'unisex',
      price: 0,
      discount: undefined,
      categoryId: '',
      brandId: '',
      outOfStock: false,
      coverImage: '',
      images: [],
      notes: [],
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
          discount: perfume.discount || undefined,
          categoryId: perfume.categoryId || '',
          brandId: perfume.brandId || '',
          gender: (perfume as any).gender || 'unisex',
          outOfStock: (perfume as any).outOfStock || false,
          coverImage: (perfume as any).coverImage || '',
          images: perfume.images || [],
          notes: perfume.notes || [],
        });
        setImageUrls(perfume.images || []);
      } else {
        form.reset();
        setImageUrls([]);
      }
    }
  }, [opened, perfume]);

  const handleImageDrop = async (files: FileWithPath[]) => {
    if (files.length === 0) return;

    // enforce max 10 images
    const remaining = Math.max(0, 10 - imageUrls.length);
    const toUpload = files.slice(0, remaining);
    if (toUpload.length === 0) return;

    setUploading(true);
    try {
      const uploadPromises = toUpload.map(async (file) => {
        const result = await uploadApi.upload(file);
        if (result.success && result.data) {
          return result.data.url;
        }
        return null;
      });

      const results = await Promise.all(uploadPromises);
      const successfulUrls = results.filter((url): url is string => url !== null);

      if (successfulUrls.length > 0) {
        setImageUrls((prev) => [...prev, ...successfulUrls]);
        form.setFieldValue('images', [...imageUrls, ...successfulUrls]);
      }
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setUploading(false);
    }
  };

  // Cover image upload
  const [coverImageUrl, setCoverImageUrl] = useState<string>('');
  const handleCoverDrop = async (files: FileWithPath[]) => {
    if (files.length === 0) return;
    const file = files[0];
    setUploading(true);
    try {
      const res = await uploadApi.upload(file);
      if (res.success && res.data) {
        setCoverImageUrl(res.data.url);
        form.setFieldValue('coverImage', res.data.url);
      }
    } catch (error) {
      console.error('Error uploading cover image:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = async (index: number) => {
    const urlToRemove = imageUrls[index];
    
    // Try to delete from server if it's an uploaded file
    if (urlToRemove.startsWith('/uploads/')) {
      const filename = urlToRemove.split('/').pop();
      if (filename) {
        await uploadApi.delete(filename);
      }
    }
    
    const newUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(newUrls);
    form.setFieldValue('images', newUrls);
  };

  const handleSubmit = async (values: PerfumeFormData) => {
    setLoading(true);
    try {
      const perfumeData = {
        title: values.title,
        description: values.description,
        price: values.price,
        discount: values.discount || 0,
        gender: values.gender || 'unisex',
        categoryId: values.categoryId,
        brandId: values.brandId,
        coverImage: values.coverImage || coverImageUrl || '',
        outOfStock: values.outOfStock || false,
        images: imageUrls,
        notes: values.notes,
        salesCount: perfume?.salesCount || 0,
      };

      let res;
      if (perfume) {
        res = await perfumeApi.update(perfume.id, perfumeData);
      } else {
        res = await perfumeApi.create(perfumeData);
      }

      if (res.success) {
        onSuccess();
        onClose();
      } else {
        console.error('Error saving perfume:', res.error);
      }
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
      size="xl"
    >
      <Box pos="relative">
        <LoadingOverlay visible={uploading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="md">
            {/* Image Upload */}
            <Box>
              <Text size="sm" fw={500} mb="xs">
                صور العطر (يمكنك اختيار عدة صور)
              </Text>
              
              {/* Image Previews */}
              {imageUrls.length > 0 && (
                <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="sm" mb="sm">
                  {imageUrls.map((url, index) => (
                    <Box key={index} pos="relative">
                      <Image
                        src={url}
                        alt={`Image ${index + 1}`}
                        height={100}
                        radius="md"
                        fallbackSrc={imageHelper.getPlaceholder(200, 100)}
                      />
                      <ActionIcon
                        variant="filled"
                        color="red"
                        size="sm"
                        pos="absolute"
                        top={5}
                        right={5}
                        onClick={() => handleRemoveImage(index)}
                      >
                        <IconTrash size={14} />
                      </ActionIcon>
                    </Box>
                  ))}
                </SimpleGrid>
              )}

              {/* Dropzone */}
              <Dropzone
                onDrop={handleImageDrop}
                accept={IMAGE_MIME_TYPE}
                maxSize={10 * 1024 ** 2}
                multiple
              >
                <Group
                  justify="center"
                  gap="xl"
                  mih={imageUrls.length > 0 ? 80 : 150}
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
                      اسحب الصور هنا أو اضغط للاختيار
                    </Text>
                    <Text size="sm" c="dimmed" inline mt={7}>
                      الحد الأقصى 10MB لكل صورة - يمكنك اختيار عدة صور
                    </Text>
                  </div>
                </Group>
              </Dropzone>
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

            <Group grow>
              <Select
                label="التصنيف"
                placeholder="اختر التصنيف"
                data={categories.map((c) => ({ value: c.id, label: c.name }))}
                required
                searchable
                {...form.getInputProps('categoryId')}
              />
              <Select
                label="الماركة"
                placeholder="اختر الماركة"
                data={brands.map((b) => ({ value: b.id, label: b.name }))}
                searchable
                clearable
                {...form.getInputProps('brandId')}
              />
            </Group>

            {/* Notes/Perfume Type */}
            <TagsInput
              label="نوع العطر (المكونات)"
              placeholder="أدخل المكونات واضغط Enter"
              description="مثال: عود، فانيلا، مسك، ورد"
              {...form.getInputProps('notes')}
            />

            <Radio.Group label="موجه إلى" {...form.getInputProps('gender')}> 
              <Group mt="xs">
                <Radio value="men" label="رجالي" />
                <Radio value="women" label="نسائي" />
                <Radio value="unisex" label="مناسب للجنسين" />
              </Group>
            </Radio.Group>

            {/* Cover Image Upload */}
            <Box>
              <Text size="sm" fw={500} mb="xs">
                صورة الغلاف (تظهر في القوائم والمعاينات)
              </Text>
              {coverImageUrl || form.values.coverImage ? (
                <Box mb="sm">
                  <Image
                    src={coverImageUrl || form.values.coverImage}
                    alt="Cover Image"
                    height={140}
                    radius="md"
                    fallbackSrc={imageHelper.getPlaceholder(300, 140)}
                  />
                </Box>
              ) : null}
              <Dropzone onDrop={handleCoverDrop} accept={IMAGE_MIME_TYPE} maxSize={5 * 1024 ** 2} multiple={false}>
                <Group justify="center" gap="xl" mih={80} style={{ pointerEvents: 'none' }}>
                  <Dropzone.Accept>
                    <IconUpload size={28} stroke={1.2} />
                  </Dropzone.Accept>
                  <Dropzone.Idle>
                    <Text size="sm">اسحب صورة الغلاف هنا أو اضغط للاختيار (قصوى 5MB)</Text>
                  </Dropzone.Idle>
                </Group>
              </Dropzone>
            </Box>

            {/* Out of Stock Toggle */}
            <Group>
              <Switch
                label="نفد من المخزون"
                {...form.getInputProps('outOfStock', { type: 'checkbox' })}
              />
            </Group>

            <Group grow>
              <NumberInput
                label="السعر (د.ع)"
                placeholder="0"
                min={0}
                thousandSeparator=","
                required
                {...form.getInputProps('price')}
              />
              <NumberInput
                label="الخصم (د.ع)"
                placeholder="0"
                min={0}
                thousandSeparator=","
                {...form.getInputProps('discount')}
              />
            </Group>

            {/* featured removed */}

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
      </Box>
    </Modal>
  );
}
