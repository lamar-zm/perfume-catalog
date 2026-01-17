// Re-export API client functions
export { 
  perfumeApi,
  categoryApi,
  brandApi,
  authApi,
  discountApi,
  imageHelper,
  uploadApi,
} from '@/lib/api';

// Also export with old service names for backward compatibility
export { 
  perfumeApi as perfumeService,
  categoryApi as categoryService,
  brandApi as brandService,
  authApi as authService,
  discountApi as discountService,
  imageHelper as imageService,
  uploadApi as uploadService,
} from '@/lib/api';
