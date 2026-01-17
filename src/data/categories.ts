import { Category } from '@/types';

// ============================================
// Static Categories Data
// Replace this with Firebase Firestore later
// ============================================

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'عطور رجالية',
    slug: 'mens-perfumes',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80',
    description: 'مجموعة فاخرة من العطور الرجالية المميزة',
  },
  {
    id: 'cat-2',
    name: 'عطور نسائية',
    slug: 'womens-perfumes',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&q=80',
    description: 'عطور نسائية فاخرة لإطلالة مميزة',
  },
  {
    id: 'cat-3',
    name: 'عطور للجنسين',
    slug: 'unisex-perfumes',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80',
    description: 'عطور مميزة تناسب الجميع',
  },
  {
    id: 'cat-4',
    name: 'عطور عربية',
    slug: 'arabic-perfumes',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80',
    description: 'عطور عربية أصيلة بأجود المكونات',
  },
  {
    id: 'cat-5',
    name: 'عطور فرنسية',
    slug: 'french-perfumes',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
    description: 'عطور فرنسية راقية من أشهر الماركات',
  },
  {
    id: 'cat-6',
    name: 'مجموعات هدايا',
    slug: 'gift-sets',
    image: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?w=800&q=80',
    description: 'مجموعات هدايا فاخرة لجميع المناسبات',
  },
];
