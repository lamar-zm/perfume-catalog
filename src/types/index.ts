// ============================================
// Core Types for Perfume Catalog Platform
// ============================================

export interface Perfume {
  id: string;
  image: string;
  title: string; // Arabic
  description: string; // Arabic
  price: number;
  discount?: number; // Fixed amount discount (optional)
  categoryId: string;
  salesCount: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string; // Arabic
  slug: string;
  image: string;
  description?: string; // Arabic
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PerfumeFilters {
  categoryId?: string;
  isFeatured?: boolean;
  hasDiscount?: boolean;
  search?: string;
}

export interface SortOptions {
  field: keyof Perfume;
  direction: 'asc' | 'desc';
}

// Admin User Type (for future Firebase Auth integration)
export interface AdminUser {
  id: string;
  email: string;
  displayName: string;
  role: 'admin' | 'superadmin';
}

// Form Types for Admin
export interface PerfumeFormData {
  title: string;
  description: string;
  price: number;
  discount?: number;
  categoryId: string;
  isFeatured: boolean;
  image: string | File;
}

export interface CategoryFormData {
  name: string;
  slug: string;
  image: string | File;
  description?: string;
}

// API Response Types (for future Firebase integration)
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
