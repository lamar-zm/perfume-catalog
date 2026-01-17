'use client';

import { Box, Text, Stack, ThemeIcon } from '@mantine/core';
import { IconMoodEmpty } from '@tabler/icons-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

export function EmptyState({
  title = 'لا توجد بيانات',
  message = 'لم يتم العثور على أي عناصر',
  icon,
}: EmptyStateProps) {
  return (
    <Box py="xl" ta="center">
      <Stack align="center" gap="md">
        <ThemeIcon size={80} variant="light" color="gray" radius="xl">
          {icon || <IconMoodEmpty size={40} />}
        </ThemeIcon>
        <Text fw={600} size="lg" c="dimmed">
          {title}
        </Text>
        <Text size="sm" c="dimmed">
          {message}
        </Text>
      </Stack>
    </Box>
  );
}
