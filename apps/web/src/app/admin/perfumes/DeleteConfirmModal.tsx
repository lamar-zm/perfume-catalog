'use client';

import { Modal, Text, Group, Button, Stack } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';

interface DeleteConfirmModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export function DeleteConfirmModal({
  opened,
  onClose,
  onConfirm,
  title,
  message,
}: DeleteConfirmModalProps) {
  return (
    <Modal opened={opened} onClose={onClose} title={title} centered>
      <Stack gap="lg">
        <Group>
          <IconAlertTriangle size={24} color="var(--mantine-color-red-6)" />
          <Text>{message}</Text>
        </Group>
        <Group justify="flex-end">
          <Button variant="light" onClick={onClose}>
            إلغاء
          </Button>
          <Button color="red" onClick={onConfirm}>
            حذف
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
