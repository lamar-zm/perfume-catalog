'use client';

import { Pagination as MantinePagination, Group } from '@mantine/core';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <Group justify="center" mt="xl">
      <MantinePagination
        total={totalPages}
        value={currentPage}
        onChange={onPageChange}
        withEdges
        siblings={1}
        boundaries={1}
      />
    </Group>
  );
}
