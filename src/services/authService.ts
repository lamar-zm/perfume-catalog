import { AdminUser } from '@/types';

// ============================================
// Auth Service - Firebase Auth Ready
// Replace implementation with Firebase later
// ============================================

// Mock admin user for development
const MOCK_ADMIN: AdminUser = {
  id: 'admin-1',
  email: 'admin@perfume-catalog.com',
  displayName: 'مدير النظام',
  role: 'superadmin',
};

// Mock credentials for development
const MOCK_CREDENTIALS = {
  email: 'admin@perfume-catalog.com',
  password: 'admin123',
};

// Simulated auth state
let currentUser: AdminUser | null = null;

export const authService = {
  /**
   * Sign in with email and password
   */
  async signIn(email: string, password: string): Promise<AdminUser> {
    // TODO: Replace with Firebase Auth
    // const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // const user = userCredential.user;
    // Check if user has admin role in Firestore
    // return { id: user.uid, email: user.email, ... };

    // Mock implementation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          email === MOCK_CREDENTIALS.email &&
          password === MOCK_CREDENTIALS.password
        ) {
          currentUser = MOCK_ADMIN;
          // Store in sessionStorage for persistence
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('adminUser', JSON.stringify(MOCK_ADMIN));
          }
          resolve(MOCK_ADMIN);
        } else {
          reject(new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة'));
        }
      }, 500);
    });
  },

  /**
   * Sign out
   */
  async signOut(): Promise<void> {
    // TODO: Replace with Firebase Auth
    // await signOut(auth);

    currentUser = null;
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('adminUser');
    }
    return Promise.resolve();
  },

  /**
   * Get current user
   */
  async getCurrentUser(): Promise<AdminUser | null> {
    // TODO: Replace with Firebase Auth state
    // return auth.currentUser ? { ... } : null;

    // Check sessionStorage first
    if (!currentUser && typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('adminUser');
      if (stored) {
        currentUser = JSON.parse(stored);
      }
    }
    return Promise.resolve(currentUser);
  },

  /**
   * Check if user is authenticated
   */
  async isAuthenticated(): Promise<boolean> {
    const user = await this.getCurrentUser();
    return user !== null;
  },

  /**
   * Subscribe to auth state changes
   */
  onAuthStateChange(callback: (user: AdminUser | null) => void): () => void {
    // TODO: Replace with Firebase Auth observer
    // return onAuthStateChanged(auth, (user) => {
    //   callback(user ? { ... } : null);
    // });

    // Mock implementation - call immediately with current user
    this.getCurrentUser().then(callback);

    // Return unsubscribe function
    return () => {};
  },
};
