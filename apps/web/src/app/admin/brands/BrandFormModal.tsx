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
import { Brand } from '@/types';
import { brandApi, imageHelper, uploadApi } from '@/services';

interface BrandFormData {
  name: string;
  slug: string;
  description: string;
  image: string;
}

interface BrandFormModalProps {
  opened: boolean;
  onClose: () => void;
  brand: Brand | null;
  onSuccess: () => void;
}

// Helper function to generate slug from text
function generateSlug(text: string): string {
  // Common Arabic brand name translations
  const arabicToEnglish: Record<string, string> = {
    'شانيل': 'chanel',
    'ديور': 'dior',
    'قوتشي': 'gucci',
    'برادا': 'prada',
    'فيرساتشي': 'versace',
    'أرماني': 'armani',
    'جيفنشي': 'givenchy',
    'بولغاري': 'bvlgari',
    'هيرميس': 'hermes',
    'توم فورد': 'tom-ford',
    'كريستيان ديور': 'christian-dior',
    'ايف سان لوران': 'yves-saint-laurent',
    'كارولينا هيريرا': 'carolina-herrera',
    'جورجيو أرماني': 'giorgio-armani',
    'دولتشي آند غابانا': 'dolce-gabbana',
    'كالفن كلاين': 'calvin-klein',
    'هوغو بوس': 'hugo-boss',
    'عجمل': 'ajmal',
    'العربية للعود': 'arabian-oud',
    'رسايس': 'rasasi',
    'سويس أريبيان': 'swiss-arabian',
    'لطافة': 'lattafa',
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

export function BrandFormModal({
  opened,
  onClose,
  brand,
  onSuccess,
}: BrandFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<BrandFormData>({
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

  // Reset form when modal opens/closes or brand changes
  useEffect(() => {
    if (opened) {
      if (brand) {
        form.setValues({
          name: brand.name,
          slug: brand.slug,
          description: brand.description || '',
          image: brand.image || '',
        });
        setImagePreview(brand.image || null);
      } else {
        form.reset();
        setImagePreview(null);
      }
    }
  }, [opened, brand]);

  // Auto-generate slug when name changes (only for new brands)
  const handleNameChange = (value: string) => {
    form.setFieldValue('name', value);
    if (!brand) {
      form.setFieldValue('slug', generateSlug(value));
    }
  };

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
      // Delete the uploaded image
      try {
        await uploadApi.delete(currentImage);
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
    setImagePreview(null);
    form.setFieldValue('image', '');
  };

  const handleSubmit = async (values: BrandFormData) => {
    setLoading(true);
    try {
      const brandData = {
        name: values.name,
        slug: values.slug,
        description: values.description || undefined,
        image: values.image || '',
      };

      let res;
      if (brand) {
        res = await brandApi.update(brand.id, brandData);
      } else {
        res = await brandApi.create(brandData);
      }

      if (res.success) {
        onSuccess();
      } else {
        console.error('Error saving brand:', res.error);
      }
    } catch (error) {
      console.error('Error saving brand:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={brand ? 'تعديل الماركة' : 'إضافة ماركة جديدة'}
      size="lg"
    >
      <Box pos="relative">
        <LoadingOverlay visible={uploading} zIndex={1000} overlayProps={{ blur: 2 }} />
        
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="md">
            {/* Image Upload */}
            <Box>
              <Text size="sm" fw={500} mb="xs">
                صورة الماركة
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
                  maxSize={10 * 1024 ** 2}
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
                        الحد الأقصى للحجم 10MB
                      </Text>
                    </div>
                  </Group>
                </Dropzone>
              )}
            </Box>

            <TextInput
              label="اسم الماركة"
              placeholder="أدخل اسم الماركة"
              required
              value={form.values.name}
              onChange={(e) => handleNameChange(e.target.value)}
              error={form.errors.name}
            />

            <TextInput
              label="الرابط (Slug)"
              placeholder="brand-slug"
              description="يستخدم في الروابط - سيتم إنشاؤه تلقائياً"
              required
              dir="ltr"
              {...form.getInputProps('slug')}
            />

            <Textarea
              label="الوصف"
              placeholder="أدخل وصف الماركة (اختياري)"
              minRows={2}
              {...form.getInputProps('description')}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="light" onClick={onClose}>
                إلغاء
              </Button>
              <Button type="submit" loading={loading}>
                {brand ? 'تحديث' : 'إضافة'}
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
