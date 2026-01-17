'use client';

import { Center, Loader as MantineLoader, Stack, Text } from '@mantine/core';

interface LoadingStateProps {
  message?: string;
  fullScreen?: boolean;
}

export function LoadingState({
  message = 'جاري التحميل...',
  fullScreen = false,
}: LoadingStateProps) {
  const content = (
    <Stack align="center" gap="md">
      <MantineLoader size="lg" color="brand" />
      <Text c="dimmed">{message}</Text>
    </Stack>
  );

  if (fullScreen) {
    return (
      <Center style={{ minHeight: '60vh' }}>
        {content}
      </Center>
    );
  }

  return (
    <Center py="xl">
      {content}
    </Center>
  );
}
