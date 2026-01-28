// ============================================
// Shared Types for Perfume Catalog Platform
// ============================================

export interface Perfume {
  id: string;
  title: string;
  description: string;
  price: number;
  gender?: 'men' | 'women' | 'unisex';
  discount: number;
  finalPrice: number;
  categoryId: string;
  brandId: string;
  images: string[];
  notes: string[]; // نوع العطر - e.g., ["oud", "wood", "vanilla"]
  coverImage?: string;
  outOfStock?: boolean;
  salesCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface Admin {
  id: string;
  email: string;
  displayName: string;
  role: 'admin' | 'superadmin';
  createdAt: string;
}

// ============================================
// API Types
// ============================================

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
  brandId?: string;
  hasDiscount?: boolean;
  search?: string;
}

export interface SortOptions {
  field: keyof Perfume;
  direction: 'asc' | 'desc';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// ============================================
// Form Types for Admin
// ============================================

export interface PerfumeFormData {
  title: string;
  description: string;
  gender?: 'men' | 'women' | 'unisex';
  price: number;
  discount?: number;
  categoryId: string;
  brandId: string;
  outOfStock?: boolean;
  coverImage?: string;
  images: string[];
  notes?: string[]; // نوع العطر - e.g., ["oud", "wood", "vanilla"]
}

export interface CategoryFormData {
  name: string;
  slug: string;
  description?: string;
  image: string;
}

export interface BrandFormData {
  name: string;
  slug: string;
  description?: string;
  image: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: Admin;
  token?: string;
  error?: string;
}
