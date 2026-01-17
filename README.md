# Perfume Catalog Platform

A modern perfume catalog platform built with Next.js (App Router) and Mantine UI. Features a public website for browsing perfumes and an admin dashboard for content management.

## 🌟 Features

### Public Website
- **Home Page**: Most sold perfumes, categories, and featured perfumes
- **Categories**: Browse perfumes by category with pagination
- **Perfume Details**: Full product details with related products
- **SEO Optimized**: Arabic metadata, Open Graph tags, dynamic metadata

### Admin Dashboard
- **Dashboard**: Overview with stats, most sold, and discounted perfumes
- **Perfume Management**: Full CRUD operations with image upload
- **Category Management**: Create, edit, delete categories
- **Featured Management**: Toggle featured status for perfumes
- **Discount Management**: Add, edit, remove discounts

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: Mantine v7
- **Language**: TypeScript
- **Styling**: CSS Modules + Mantine styles
- **Icons**: Tabler Icons

## 📁 Project Structure

```
src/
├── app/
│   ├── (public)/           # Public website routes
│   │   ├── page.tsx        # Home page
│   │   ├── categories/     # Categories list
│   │   ├── category/[slug] # Category details
│   │   ├── perfume/[id]    # Perfume details
│   │   └── featured/       # Featured perfumes
│   ├── admin/              # Admin dashboard routes
│   │   ├── page.tsx        # Dashboard home
│   │   ├── login/          # Admin login
│   │   ├── perfumes/       # Perfume CRUD
│   │   ├── categories/     # Category CRUD
│   │   ├── featured/       # Featured management
│   │   └── discounts/      # Discount management
│   └── layout.tsx          # Root layout
├── components/
│   ├── perfume/            # Perfume components
│   ├── category/           # Category components
│   ├── layout/             # Header, Footer
│   └── ui/                 # Reusable UI components
├── data/
│   ├── perfumes.ts         # Static perfume data
│   └── categories.ts       # Static category data
├── services/
│   ├── perfumeService.ts   # Perfume data operations
│   ├── categoryService.ts  # Category data operations
│   ├── authService.ts      # Authentication
│   └── imageService.ts     # Image upload/management
├── types/
│   └── index.ts            # TypeScript types
└── theme/
    └── index.ts            # Mantine theme config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) for the public website
5. Open [http://localhost:3000/admin](http://localhost:3000/admin) for the admin dashboard

### Admin Login Credentials (Development)
- **Email**: admin@perfume-catalog.com
- **Password**: admin123

## 🔄 Firebase Migration Guide

The project is designed for easy migration to Firebase. Here's what needs to be updated:

### 1. Install Firebase SDK
```bash
npm install firebase firebase-admin
```

### 2. Create Firebase Config
Create `src/lib/firebase.ts`:
```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
```

### 3. Update Services

Each service file has TODO comments indicating where to add Firebase code:

#### Firestore (perfumeService.ts, categoryService.ts)
```typescript
// Replace static data imports with Firestore queries
import { collection, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
```

#### Firebase Auth (authService.ts)
```typescript
// Replace mock auth with Firebase Auth
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
```

#### Firebase Storage (imageService.ts)
```typescript
// Replace mock upload with Firebase Storage
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '@/lib/firebase';
```

## 🎨 Customization

### Theme
Edit `src/theme/index.ts` to customize:
- Colors (brand colors)
- Typography
- Component defaults
- Radius, spacing, etc.

### Adding New Categories
Edit `src/data/categories.ts` to add/modify categories.

### Adding New Perfumes
Edit `src/data/perfumes.ts` to add/modify perfumes.

## 📱 RTL Support

The entire application is built with RTL (Right-to-Left) support for Arabic language:
- HTML `dir="rtl"` and `lang="ar"`
- Mantine's DirectionProvider
- RTL-compatible CSS

## 🔒 Security Notes

- Admin routes are protected by authentication
- Currently using mock auth (replace with Firebase Auth for production)
- Implement proper security rules in Firebase Firestore
- Set up Firebase Storage security rules

## 📄 License

MIT
