'use client';

import { Stack, Box, Title, Text, Button, Group } from '@mantine/core';
import { IconSparkles } from '@tabler/icons-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <Box
      py="xl"
      style={{
        background: 'linear-gradient(135deg, #f5f0ff 0%, #e6dbff 100%)',
        borderRadius: 'var(--mantine-radius-lg)',
        padding: 'var(--mantine-spacing-xl)',
      }}
    >
      <Stack align="center" gap="md" ta="center">
        <Title order={1} size="2.5rem">
          عطور فاخرة
        </Title>
        <Text size="lg" c="dimmed" maw={600}>
          اكتشف مجموعتنا الحصرية من أفخم العطور العربية والعالمية.
          جودة استثنائية وروائح تدوم طويلاً.
        </Text>
        <Group mt="md">
          <Button
            component={Link}
            href="/categories"
            size="lg"
            radius="xl"
          >
            تصفح التصنيفات
          </Button>
          <Button
            component={Link}
            href="/featured"
            size="lg"
            radius="xl"
            variant="light"
            leftSection={<IconSparkles size={18} />}
          >
            العطور المميزة
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
