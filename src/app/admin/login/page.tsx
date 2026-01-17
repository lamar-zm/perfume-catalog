'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Paper,
  Title,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Center,
  Box,
  Text,
  Alert,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAlertCircle, IconLogin } from '@tabler/icons-react';
import { authService } from '@/services';

interface LoginForm {
  email: string;
  password: string;
}

export default function AdminLoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<LoginForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : 'البريد الإلكتروني غير صحيح',
      password: (value) =>
        value.length >= 6 ? null : 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
    },
  });

  const handleSubmit = async (values: LoginForm) => {
    setLoading(true);
    setError(null);

    try {
      await authService.signIn(values.email, values.password);
      router.replace('/admin');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'حدث خطأ أثناء تسجيل الدخول'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center style={{ minHeight: '100vh' }}>
      <Box w="100%" maw={420} mx="auto" p="md">
        <Paper radius="lg" p="xl" withBorder>
          <Stack gap="lg">
            <Box ta="center">
              <Title order={2} c="brand">
                لوحة التحكم
              </Title>
              <Text c="dimmed" size="sm" mt="xs">
                تسجيل دخول المدير
              </Text>
            </Box>

            {error && (
              <Alert
                icon={<IconAlertCircle size={16} />}
                color="red"
                variant="light"
              >
                {error}
              </Alert>
            )}

            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
                <TextInput
                  label="البريد الإلكتروني"
                  placeholder="admin@example.com"
                  type="email"
                  {...form.getInputProps('email')}
                />

                <PasswordInput
                  label="كلمة المرور"
                  placeholder="أدخل كلمة المرور"
                  {...form.getInputProps('password')}
                />

                <Button
                  type="submit"
                  fullWidth
                  loading={loading}
                  leftSection={<IconLogin size={18} />}
                >
                  تسجيل الدخول
                </Button>
              </Stack>
            </form>

            <Text size="xs" c="dimmed" ta="center">
              بيانات الدخول التجريبية:
              <br />
              البريد: admin@perfume-catalog.com
              <br />
              كلمة المرور: admin123
            </Text>
          </Stack>
        </Paper>
      </Box>
    </Center>
  );
}
