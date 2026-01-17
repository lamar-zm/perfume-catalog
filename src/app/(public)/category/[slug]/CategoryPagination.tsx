'use client';

import { useRouter } from 'next/navigation';
import { Pagination } from '@/components';

interface CategoryPaginationProps {
  currentPage: number;
  totalPages: number;
  slug: string;
}

export function CategoryPagination({
  currentPage,
  totalPages,
  slug,
}: CategoryPaginationProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/category/${slug}?page=${page}`);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}
