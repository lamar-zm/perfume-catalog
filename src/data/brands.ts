// ============================================
// Static Brands Data
// Replace this with Firebase Firestore later
// ============================================

export interface Brand {
  id: string;
  name: string;
  nameAr: string;
  logo: string;
  description?: string;
}

export const brands: Brand[] = [
  {
    id: 'brand-1',
    name: 'Chanel',
    nameAr: 'شانيل',
    logo: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&q=80',
    description: 'دار الأزياء الفرنسية الفاخرة',
  },
  {
    id: 'brand-2',
    name: 'Dior',
    nameAr: 'ديور',
    logo: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=200&q=80',
    description: 'علامة فرنسية للعطور الفاخرة',
  },
  {
    id: 'brand-3',
    name: 'Tom Ford',
    nameAr: 'توم فورد',
    logo: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&q=80',
    description: 'عطور أمريكية فاخرة',
  },
  {
    id: 'brand-4',
    name: 'Gucci',
    nameAr: 'غوتشي',
    logo: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=200&q=80',
    description: 'دار أزياء إيطالية عريقة',
  },
  {
    id: 'brand-5',
    name: 'Versace',
    nameAr: 'فرساتشي',
    logo: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=200&q=80',
    description: 'علامة إيطالية للأزياء والعطور',
  },
  {
    id: 'brand-6',
    name: 'Arabian Oud',
    nameAr: 'العربية للعود',
    logo: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=200&q=80',
    description: 'أكبر بيت للعطور العربية',
  },
];
