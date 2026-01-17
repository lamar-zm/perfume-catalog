import type {
  Perfume,
  Category,
  Brand,
  PaginatedResult,
  PaginationParams,
  PerfumeFilters,
  SortOptions,
  ApiResponse,
  AuthResponse,
  Admin,
} from '@perfume-catalog/shared';

// Get base URL for API calls (works in both server and client)
function getBaseUrl(): string {
  // Client-side
  if (typeof window !== 'undefined') {
    return '';
  }
  // Server-side - use localhost
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
}

// Generic fetch helper
async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      cache: 'no-store', // Disable caching for API routes
    });
    return response.json();
  } catch (error) {
    console.error(`API Error fetching ${url}:`, error);
    return { success: false, error: 'Network error' };
  }
}

// ============================================
// Perfume API Client
// ============================================
export const perfumeApi = {
  async getAll(
    params: PaginationParams & PerfumeFilters & { search?: string },
  ): Promise<ApiResponse<PaginatedResult<Perfume>>> {
    const searchParams = new URLSearchParams({
      page: params.page.toString(),
      pageSize: params.pageSize.toString(),
    });

    if (params.categoryId) searchParams.set('categoryId', params.categoryId);
    if (params.brandId) searchParams.set('brandId', params.brandId);
    if (params.isFeatured !== undefined) searchParams.set('isFeatured', params.isFeatured.toString());
    if (params.hasDiscount) searchParams.set('hasDiscount', 'true');
    if (params.search) searchParams.set('search', params.search);

    return fetchApi<PaginatedResult<Perfume>>(`/perfumes?${searchParams}`);
  },

  async getById(id: string): Promise<ApiResponse<Perfume>> {
    return fetchApi<Perfume>(`/perfumes/${id}`);
  },

  async getMostSold(limit: number = 8): Promise<ApiResponse<Perfume[]>> {
    return fetchApi<Perfume[]>(`/perfumes?endpoint=most-sold&limit=${limit}`);
  },

  async getFeatured(limit: number = 8): Promise<ApiResponse<Perfume[]>> {
    return fetchApi<Perfume[]>(`/perfumes?endpoint=featured&limit=${limit}`);
  },

  async getDiscounted(limit?: number): Promise<ApiResponse<Perfume[]>> {
    const url = limit ? `/perfumes?endpoint=discounted&limit=${limit}` : '/perfumes?endpoint=discounted';
    return fetchApi<Perfume[]>(url);
  },

  async getRelated(perfumeId: string, categoryId: string, limit: number = 4): Promise<ApiResponse<Perfume[]>> {
    return fetchApi<Perfume[]>(`/perfumes/${perfumeId}?related=true&categoryId=${categoryId}&limit=${limit}`);
  },

  async create(data: Partial<Perfume>): Promise<ApiResponse<Perfume>> {
    return fetchApi<Perfume>('/perfumes', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async update(id: string, data: Partial<Perfume>): Promise<ApiResponse<Perfume>> {
    return fetchApi<Perfume>(`/perfumes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async delete(id: string): Promise<ApiResponse<{ id: string }>> {
    return fetchApi<{ id: string }>(`/perfumes/${id}`, { method: 'DELETE' });
  },

  async toggleFeatured(id: string): Promise<ApiResponse<Perfume>> {
    return fetchApi<Perfume>(`/perfumes/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ action: 'toggleFeatured' }),
    });
  },

  async updateDiscount(id: string, discount: number): Promise<ApiResponse<Perfume>> {
    return fetchApi<Perfume>(`/perfumes/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ action: 'updateDiscount', discount }),
    });
  },
};

// ============================================
// Category API Client
// ============================================
export const categoryApi = {
  async getAll(): Promise<ApiResponse<Category[]>> {
    return fetchApi<Category[]>('/categories');
  },

  async getPaginated(params: PaginationParams): Promise<ApiResponse<PaginatedResult<Category>>> {
    return fetchApi<PaginatedResult<Category>>(
      `/categories?paginated=true&page=${params.page}&pageSize=${params.pageSize}`
    );
  },

  async getById(id: string): Promise<ApiResponse<Category>> {
    return fetchApi<Category>(`/categories/${id}`);
  },

  async getBySlug(slug: string): Promise<ApiResponse<Category>> {
    return fetchApi<Category>(`/categories/${slug}`);
  },

  async getWithPerfumes(
    idOrSlug: string,
    params: PaginationParams
  ): Promise<ApiResponse<{ category: Category; perfumes: PaginatedResult<Perfume> }>> {
    return fetchApi<{ category: Category; perfumes: PaginatedResult<Perfume> }>(
      `/categories/${idOrSlug}?perfumes=true&page=${params.page}&pageSize=${params.pageSize}`
    );
  },

  async create(data: Partial<Category>): Promise<ApiResponse<Category>> {
    return fetchApi<Category>('/categories', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async update(id: string, data: Partial<Category>): Promise<ApiResponse<Category>> {
    return fetchApi<Category>(`/categories/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async delete(id: string): Promise<ApiResponse<{ id: string }>> {
    return fetchApi<{ id: string }>(`/categories/${id}`, { method: 'DELETE' });
  },
};

// ============================================
// Brand API Client
// ============================================
export const brandApi = {
  async getAll(): Promise<ApiResponse<Brand[]>> {
    return fetchApi<Brand[]>('/brands');
  },

  async getPaginated(params: PaginationParams): Promise<ApiResponse<PaginatedResult<Brand>>> {
    return fetchApi<PaginatedResult<Brand>>(
      `/brands?paginated=true&page=${params.page}&pageSize=${params.pageSize}`
    );
  },

  async getById(id: string): Promise<ApiResponse<Brand>> {
    return fetchApi<Brand>(`/brands/${id}`);
  },

  async getBySlug(slug: string): Promise<ApiResponse<Brand>> {
    return fetchApi<Brand>(`/brands/${slug}`);
  },

  async getWithPerfumes(
    idOrSlug: string,
    params: PaginationParams
  ): Promise<ApiResponse<{ brand: Brand; perfumes: PaginatedResult<Perfume> }>> {
    return fetchApi<{ brand: Brand; perfumes: PaginatedResult<Perfume> }>(
      `/brands/${idOrSlug}?perfumes=true&page=${params.page}&pageSize=${params.pageSize}`
    );
  },

  async create(data: Partial<Brand>): Promise<ApiResponse<Brand>> {
    return fetchApi<Brand>('/brands', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async update(id: string, data: Partial<Brand>): Promise<ApiResponse<Brand>> {
    return fetchApi<Brand>(`/brands/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async delete(id: string): Promise<ApiResponse<{ id: string }>> {
    return fetchApi<{ id: string }>(`/brands/${id}`, { method: 'DELETE' });
  },
};

// ============================================
// Auth API Client
// ============================================
export const authApi = {
  async signIn(email: string, password: string): Promise<ApiResponse<AuthResponse>> {
    return fetchApi<AuthResponse>('/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  async getCurrentUser(): Promise<ApiResponse<Admin>> {
    return fetchApi<Admin>('/auth');
  },

  async signOut(): Promise<ApiResponse<void>> {
    return fetchApi<void>('/auth', { method: 'DELETE' });
  },
};

// ============================================
// Discount API Client
// ============================================
export const discountApi = {
  async getAll(limit?: number): Promise<ApiResponse<Perfume[]>> {
    const url = limit ? `/discounts?limit=${limit}` : '/discounts';
    return fetchApi<Perfume[]>(url);
  },

  async apply(perfumeId: string, discount: number): Promise<ApiResponse<Perfume>> {
    return fetchApi<Perfume>('/discounts', {
      method: 'POST',
      body: JSON.stringify({ perfumeId, discount }),
    });
  },

  async remove(perfumeId: string): Promise<ApiResponse<Perfume>> {
    return fetchApi<Perfume>('/discounts', {
      method: 'DELETE',
      body: JSON.stringify({ perfumeId }),
    });
  },
};

// ============================================
// Image Helper
// ============================================
export const imageHelper = {
  getPlaceholder(width: number = 400, height: number = 400): string {
    return `https://placehold.co/${width}x${height}/e9d5ff/6b21a8?text=عطر`;
  },
};

// ============================================
// Upload API Client
// ============================================
export const uploadApi = {
  async upload(file: File): Promise<ApiResponse<{ url: string; filename: string }>> {
    const baseUrl = getBaseUrl();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${baseUrl}/api/upload`, {
        method: 'POST',
        body: formData,
      });
      return response.json();
    } catch (error) {
      console.error('Upload error:', error);
      return { success: false, error: 'فشل رفع الملف' };
    }
  },

  async delete(filename: string): Promise<ApiResponse<{ filename: string }>> {
    const baseUrl = getBaseUrl();
    try {
      const response = await fetch(`${baseUrl}/api/upload`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename }),
      });
      return response.json();
    } catch (error) {
      console.error('Delete error:', error);
      return { success: false, error: 'فشل حذف الملف' };
    }
  },

  async uploadMultiple(files: File[]): Promise<ApiResponse<{ urls: string[] }>> {
    const results: string[] = [];
    const errors: string[] = [];

    for (const file of files) {
      const result = await this.upload(file);
      if (result.success && result.data) {
        results.push(result.data.url);
      } else {
        errors.push(result.error || 'Upload failed');
      }
    }

    if (errors.length > 0 && results.length === 0) {
      return { success: false, error: errors.join(', ') };
    }

    return { success: true, data: { urls: results } };
  },
};
