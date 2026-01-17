'use client';

import { useRouter } from 'next/navigation';
import { Pagination } from '@/components';

interface BrandPaginationProps {
  currentPage: number;
  totalPages: number;
  slug: string;
}

export function BrandPagination({
  currentPage,
  totalPages,
  slug,
}: BrandPaginationProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/brand/${slug}?page=${page}`);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}
