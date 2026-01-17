export { default as db, initializeDatabase } from './db';
export { categoryService } from './services/categoryService';
export { brandService } from './services/brandService';
export { perfumeService } from './services/perfumeService';
export { authService } from './services/authService';

// Re-export types for convenience
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
  AuthResponse,
  LoginCredentials,
} from '@perfume-catalog/shared';
