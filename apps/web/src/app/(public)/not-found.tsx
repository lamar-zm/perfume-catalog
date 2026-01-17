'use client';

import { Title, Text, Button, Stack, Center } from '@mantine/core';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Center style={{ minHeight: '60vh' }}>
      <Stack align="center" gap="lg">
        <Title order={1} size="6rem" c="brand.2">
          404
        </Title>
        <Title order={2}>الصفحة غير موجودة</Title>
        <Text c="dimmed" ta="center" maw={400}>
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
        </Text>
        <Button component={Link} href="/" size="lg" radius="xl">
          العودة للرئيسية
        </Button>
      </Stack>
    </Center>
  );
}
