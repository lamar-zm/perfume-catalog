// Re-export all types from shared package
export type {
  Perfume,
  Category,
  Brand,
  Admin,
  PaginatedResult,
  PaginationParams,
  PerfumeFilters,
  SortOptions,
  ApiResponse,
  PerfumeFormData,
  CategoryFormData,
  BrandFormData,
  LoginCredentials,
  AuthResponse,
} from '@perfume-catalog/shared';

// Additional local types for the web app
export interface AdminUser {
  id: string;
  email: string;
  displayName: string;
  role: 'admin' | 'superadmin';
}
