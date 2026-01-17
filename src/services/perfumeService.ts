import { perfumes } from '@/data/perfumes';
import {
  Perfume,
  PaginatedResult,
  PaginationParams,
  PerfumeFilters,
  SortOptions,
} from '@/types';

// ============================================
// Perfume Service - Data Abstraction Layer
// Replace implementation with Firebase later
// ============================================

// Helper function to paginate results
function paginate<T>(
  data: T[],
  { page, pageSize }: PaginationParams
): PaginatedResult<T> {
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    data: data.slice(start, end),
    total,
    page,
    pageSize,
    totalPages,
  };
}

// Helper function to filter perfumes
function applyFilters(data: Perfume[], filters: PerfumeFilters): Perfume[] {
  let filtered = [...data];

  if (filters.categoryId) {
    filtered = filtered.filter((p) => p.categoryId === filters.categoryId);
  }

  if (filters.isFeatured !== undefined) {
    filtered = filtered.filter((p) => p.isFeatured === filters.isFeatured);
  }

  if (filters.hasDiscount) {
    filtered = filtered.filter((p) => p.discount && p.discount > 0);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
}

// Helper function to sort perfumes
function applySort(data: Perfume[], sort?: SortOptions): Perfume[] {
  if (!sort) return data;

  return [...data].sort((a, b) => {
    const aVal = a[sort.field];
    const bVal = b[sort.field];

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sort.direction === 'asc' ? aVal - bVal : bVal - aVal;
    }

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sort.direction === 'asc'
        ? aVal.localeCompare(bVal, 'ar')
        : bVal.localeCompare(aVal, 'ar');
    }

    return 0;
  });
}

export const perfumeService = {
  /**
   * Get paginated perfumes with optional filters and sorting
   */
  async getAll(
    pagination: PaginationParams,
    filters?: PerfumeFilters,
    sort?: SortOptions
  ): Promise<PaginatedResult<Perfume>> {
    // TODO: Replace with Firebase Firestore query
    // Build Firestore query with where, orderBy, limit, startAfter
    
    let data = [...perfumes];

    if (filters) {
      data = applyFilters(data, filters);
    }

    if (sort) {
      data = applySort(data, sort);
    }

    return Promise.resolve(paginate(data, pagination));
  },

  /**
   * Get perfume by ID
   */
  async getById(id: string): Promise<Perfume | null> {
    // TODO: Replace with Firebase Firestore getDoc
    
    const perfume = perfumes.find((p) => p.id === id);
    return Promise.resolve(perfume || null);
  },

  /**
   * Get most sold perfumes (sorted by salesCount)
   */
  async getMostSold(limit: number = 8): Promise<Perfume[]> {
    // TODO: Replace with Firebase Firestore query
    // orderBy('salesCount', 'desc').limit(limit)
    
    const sorted = [...perfumes].sort((a, b) => b.salesCount - a.salesCount);
    return Promise.resolve(sorted.slice(0, limit));
  },

  /**
   * Get featured perfumes
   */
  async getFeatured(limit: number = 8): Promise<Perfume[]> {
    // TODO: Replace with Firebase Firestore query
    // where('isFeatured', '==', true).limit(limit)
    
    const featured = perfumes.filter((p) => p.isFeatured);
    return Promise.resolve(featured.slice(0, limit));
  },

  /**
   * Get perfumes with active discounts
   */
  async getDiscounted(limit?: number): Promise<Perfume[]> {
    // TODO: Replace with Firebase Firestore query
    // where('discount', '>', 0)
    
    const discounted = perfumes.filter((p) => p.discount && p.discount > 0);
    return Promise.resolve(limit ? discounted.slice(0, limit) : discounted);
  },

  /**
   * Get perfumes by category
   */
  async getByCategory(
    categoryId: string,
    pagination: PaginationParams
  ): Promise<PaginatedResult<Perfume>> {
    // TODO: Replace with Firebase Firestore query
    // where('categoryId', '==', categoryId)
    
    const filtered = perfumes.filter((p) => p.categoryId === categoryId);
    return Promise.resolve(paginate(filtered, pagination));
  },

  /**
   * Get related perfumes (same category, excluding current)
   */
  async getRelated(
    perfumeId: string,
    categoryId: string,
    limit: number = 4
  ): Promise<Perfume[]> {
    // TODO: Replace with Firebase Firestore query
    
    const related = perfumes
      .filter((p) => p.categoryId === categoryId && p.id !== perfumeId)
      .slice(0, limit);
    return Promise.resolve(related);
  },

  /**
   * Create a new perfume (Admin only)
   */
  async create(data: Omit<Perfume, 'id' | 'createdAt' | 'updatedAt'>): Promise<Perfume> {
    // TODO: Replace with Firebase Firestore add
    // const docRef = await addDoc(collection(db, 'perfumes'), {
    //   ...data,
    //   createdAt: serverTimestamp(),
    //   updatedAt: serverTimestamp(),
    // });
    
    const now = new Date().toISOString();
    const newPerfume: Perfume = {
      ...data,
      id: `perf-${Date.now()}`,
      createdAt: now,
      updatedAt: now,
    };
    perfumes.push(newPerfume);
    return Promise.resolve(newPerfume);
  },

  /**
   * Update a perfume (Admin only)
   */
  async update(id: string, data: Partial<Perfume>): Promise<Perfume | null> {
    // TODO: Replace with Firebase Firestore update
    // await updateDoc(doc(db, 'perfumes', id), {
    //   ...data,
    //   updatedAt: serverTimestamp(),
    // });
    
    const index = perfumes.findIndex((p) => p.id === id);
    if (index === -1) return Promise.resolve(null);

    perfumes[index] = {
      ...perfumes[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    return Promise.resolve(perfumes[index]);
  },

  /**
   * Toggle featured status (Admin only)
   */
  async toggleFeatured(id: string): Promise<Perfume | null> {
    const perfume = perfumes.find((p) => p.id === id);
    if (!perfume) return Promise.resolve(null);

    return this.update(id, { isFeatured: !perfume.isFeatured });
  },

  /**
   * Delete a perfume (Admin only)
   */
  async delete(id: string): Promise<boolean> {
    // TODO: Replace with Firebase Firestore delete
    // Also delete associated image from Firebase Storage
    
    const index = perfumes.findIndex((p) => p.id === id);
    if (index === -1) return Promise.resolve(false);

    perfumes.splice(index, 1);
    return Promise.resolve(true);
  },

  /**
   * Search perfumes
   */
  async search(
    query: string,
    pagination: PaginationParams
  ): Promise<PaginatedResult<Perfume>> {
    // TODO: Consider using Firebase Extensions for full-text search
    // or Algolia integration
    
    const filtered = applyFilters(perfumes, { search: query });
    return Promise.resolve(paginate(filtered, pagination));
  },
};
