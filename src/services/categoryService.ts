import { categories } from '@/data/categories';
import { Category } from '@/types';

// ============================================
// Category Service - Data Abstraction Layer
// Replace implementation with Firebase later
// ============================================

export const categoryService = {
  /**
   * Get all categories
   */
  async getAll(): Promise<Category[]> {
    // TODO: Replace with Firebase Firestore query
    // const snapshot = await getDocs(collection(db, 'categories'));
    // return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    return Promise.resolve([...categories]);
  },

  /**
   * Get category by ID
   */
  async getById(id: string): Promise<Category | null> {
    // TODO: Replace with Firebase Firestore query
    // const doc = await getDoc(doc(db, 'categories', id));
    // return doc.exists() ? { id: doc.id, ...doc.data() } : null;
    
    const category = categories.find((c) => c.id === id);
    return Promise.resolve(category || null);
  },

  /**
   * Get category by slug
   */
  async getBySlug(slug: string): Promise<Category | null> {
    // TODO: Replace with Firebase Firestore query with where clause
    
    const category = categories.find((c) => c.slug === slug);
    return Promise.resolve(category || null);
  },

  /**
   * Create a new category (Admin only)
   */
  async create(data: Omit<Category, 'id'>): Promise<Category> {
    // TODO: Replace with Firebase Firestore add
    // const docRef = await addDoc(collection(db, 'categories'), data);
    // return { id: docRef.id, ...data };
    
    const newCategory: Category = {
      ...data,
      id: `cat-${Date.now()}`,
    };
    categories.push(newCategory);
    return Promise.resolve(newCategory);
  },

  /**
   * Update a category (Admin only)
   */
  async update(id: string, data: Partial<Category>): Promise<Category | null> {
    // TODO: Replace with Firebase Firestore update
    // await updateDoc(doc(db, 'categories', id), data);
    
    const index = categories.findIndex((c) => c.id === id);
    if (index === -1) return Promise.resolve(null);
    
    categories[index] = { ...categories[index], ...data };
    return Promise.resolve(categories[index]);
  },

  /**
   * Delete a category (Admin only)
   */
  async delete(id: string): Promise<boolean> {
    // TODO: Replace with Firebase Firestore delete
    // await deleteDoc(doc(db, 'categories', id));
    
    const index = categories.findIndex((c) => c.id === id);
    if (index === -1) return Promise.resolve(false);
    
    categories.splice(index, 1);
    return Promise.resolve(true);
  },
};
