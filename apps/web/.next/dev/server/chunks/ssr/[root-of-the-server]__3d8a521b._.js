module.exports = [
"[project]/apps/web/src/app/favicon.ico.mjs { IMAGE => \"[project]/apps/web/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/favicon.ico.mjs { IMAGE => \"[project]/apps/web/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/apps/web/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/src/app/(public)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/(public)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/src/app/(public)/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/(public)/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/src/data/perfumes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "perfumes",
    ()=>perfumes
]);
const perfumes = [
    {
        id: 'perf-1',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80',
        title: 'عطر الفارس الذهبي',
        description: 'عطر رجالي فاخر بمكونات شرقية مميزة، يمتزج فيه العود مع المسك والعنبر ليمنحك إطلالة ملكية. يدوم لأكثر من ١٢ ساعة.',
        price: 350,
        discount: 50,
        categoryId: 'cat-1',
        salesCount: 156,
        isFeatured: true,
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2025-01-15T00:00:00Z'
    },
    {
        id: 'perf-2',
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=80',
        title: 'عطر الأميرة',
        description: 'عطر نسائي ساحر بنفحات الورد والياسمين، مع قاعدة من خشب الصندل والفانيلا. مثالي للمناسبات الخاصة.',
        price: 420,
        categoryId: 'cat-2',
        salesCount: 203,
        isFeatured: true,
        createdAt: '2025-01-02T00:00:00Z',
        updatedAt: '2025-01-14T00:00:00Z'
    },
    {
        id: 'perf-3',
        image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80',
        title: 'عطر ليالي الشرق',
        description: 'عطر عربي أصيل يجمع بين العود الكمبودي والمسك الأبيض والزعفران. رائحة تأسر القلوب وتدوم طويلاً.',
        price: 580,
        discount: 80,
        categoryId: 'cat-4',
        salesCount: 312,
        isFeatured: true,
        createdAt: '2025-01-03T00:00:00Z',
        updatedAt: '2025-01-13T00:00:00Z'
    },
    {
        id: 'perf-4',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80',
        title: 'عطر الليل الباريسي',
        description: 'عطر فرنسي راقي بنفحات الليمون والبرغموت مع قلب من زهرة الأيريس وقاعدة من خشب الأرز.',
        price: 650,
        categoryId: 'cat-5',
        salesCount: 89,
        isFeatured: false,
        createdAt: '2025-01-04T00:00:00Z',
        updatedAt: '2025-01-12T00:00:00Z'
    },
    {
        id: 'perf-5',
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80',
        title: 'عطر النسيم',
        description: 'عطر منعش للجنسين بمكونات بحرية ونفحات من الحمضيات. مثالي للاستخدام اليومي في جميع الفصول.',
        price: 280,
        discount: 30,
        categoryId: 'cat-3',
        salesCount: 178,
        isFeatured: false,
        createdAt: '2025-01-05T00:00:00Z',
        updatedAt: '2025-01-11T00:00:00Z'
    },
    {
        id: 'perf-6',
        image: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?w=600&q=80',
        title: 'مجموعة العطور الملكية',
        description: 'مجموعة هدايا فاخرة تحتوي على ثلاث عطور مميزة بأحجام مختلفة، مع علبة هدايا أنيقة.',
        price: 890,
        discount: 140,
        categoryId: 'cat-6',
        salesCount: 67,
        isFeatured: true,
        createdAt: '2025-01-06T00:00:00Z',
        updatedAt: '2025-01-10T00:00:00Z'
    },
    {
        id: 'perf-7',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80',
        title: 'عطر القمر الفضي',
        description: 'عطر رجالي عصري بمزيج من الفلفل الأسود والكارداموم مع قاعدة من الباتشولي والجلد.',
        price: 395,
        categoryId: 'cat-1',
        salesCount: 234,
        isFeatured: false,
        createdAt: '2025-01-07T00:00:00Z',
        updatedAt: '2025-01-09T00:00:00Z'
    },
    {
        id: 'perf-8',
        image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&q=80',
        title: 'عطر زهرة الليلك',
        description: 'عطر نسائي رومانسي بنفحات الليلك والفاوانيا، مع لمسة من المسك الأبيض للثبات الطويل.',
        price: 340,
        categoryId: 'cat-2',
        salesCount: 145,
        isFeatured: false,
        createdAt: '2025-01-08T00:00:00Z',
        updatedAt: '2025-01-08T00:00:00Z'
    },
    {
        id: 'perf-9',
        image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80',
        title: 'عطر العود الملكي',
        description: 'عطر عربي فاخر من أجود أنواع العود الهندي، ممزوج بالعنبر والمسك. تركيبة حصرية لعشاق العود الأصيل.',
        price: 1200,
        discount: 200,
        categoryId: 'cat-4',
        salesCount: 98,
        isFeatured: true,
        createdAt: '2025-01-09T00:00:00Z',
        updatedAt: '2025-01-09T00:00:00Z'
    },
    {
        id: 'perf-10',
        image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80',
        title: 'عطر الربيع الفرنسي',
        description: 'عطر منعش من باريس بنفحات زهور الربيع والفواكه الطازجة. خفيف ومثالي للنهار.',
        price: 480,
        categoryId: 'cat-5',
        salesCount: 112,
        isFeatured: false,
        createdAt: '2025-01-10T00:00:00Z',
        updatedAt: '2025-01-10T00:00:00Z'
    },
    {
        id: 'perf-11',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        title: 'عطر الغروب',
        description: 'عطر للجنسين بمكونات دافئة من الفانيلا والتونكا، مع نفحات من البرتقال والتوابل الشرقية.',
        price: 320,
        categoryId: 'cat-3',
        salesCount: 167,
        isFeatured: false,
        createdAt: '2025-01-11T00:00:00Z',
        updatedAt: '2025-01-11T00:00:00Z'
    },
    {
        id: 'perf-12',
        image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80',
        title: 'مجموعة العروس',
        description: 'مجموعة هدايا خاصة للعروس تحتوي على عطر وكريم جسم وبخور، بتصميم فاخر.',
        price: 750,
        categoryId: 'cat-6',
        salesCount: 45,
        isFeatured: false,
        createdAt: '2025-01-12T00:00:00Z',
        updatedAt: '2025-01-12T00:00:00Z'
    }
];
}),
"[project]/apps/web/src/services/perfumeService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "perfumeService",
    ()=>perfumeService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/data/perfumes.ts [app-rsc] (ecmascript)");
;
// ============================================
// Perfume Service - Data Abstraction Layer
// Replace implementation with Firebase later
// ============================================
// Helper function to paginate results
function paginate(data, { page, pageSize }) {
    const total = data.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
        data: data.slice(start, end),
        total,
        page,
        pageSize,
        totalPages
    };
}
// Helper function to filter perfumes
function applyFilters(data, filters) {
    let filtered = [
        ...data
    ];
    if (filters.categoryId) {
        filtered = filtered.filter((p)=>p.categoryId === filters.categoryId);
    }
    if (filters.isFeatured !== undefined) {
        filtered = filtered.filter((p)=>p.isFeatured === filters.isFeatured);
    }
    if (filters.hasDiscount) {
        filtered = filtered.filter((p)=>p.discount && p.discount > 0);
    }
    if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filtered = filtered.filter((p)=>p.title.toLowerCase().includes(searchLower) || p.description.toLowerCase().includes(searchLower));
    }
    return filtered;
}
// Helper function to sort perfumes
function applySort(data, sort) {
    if (!sort) return data;
    return [
        ...data
    ].sort((a, b)=>{
        const aVal = a[sort.field];
        const bVal = b[sort.field];
        if (typeof aVal === 'number' && typeof bVal === 'number') {
            return sort.direction === 'asc' ? aVal - bVal : bVal - aVal;
        }
        if (typeof aVal === 'string' && typeof bVal === 'string') {
            return sort.direction === 'asc' ? aVal.localeCompare(bVal, 'ar') : bVal.localeCompare(aVal, 'ar');
        }
        return 0;
    });
}
const perfumeService = {
    /**
   * Get paginated perfumes with optional filters and sorting
   */ async getAll (pagination, filters, sort) {
        // TODO: Replace with Firebase Firestore query
        // Build Firestore query with where, orderBy, limit, startAfter
        let data = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"]
        ];
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
   */ async getById (id) {
        // TODO: Replace with Firebase Firestore getDoc
        const perfume = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"].find((p)=>p.id === id);
        return Promise.resolve(perfume || null);
    },
    /**
   * Get most sold perfumes (sorted by salesCount)
   */ async getMostSold (limit = 8) {
        // TODO: Replace with Firebase Firestore query
        // orderBy('salesCount', 'desc').limit(limit)
        const sorted = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"]
        ].sort((a, b)=>b.salesCount - a.salesCount);
        return Promise.resolve(sorted.slice(0, limit));
    },
    /**
   * Get featured perfumes
   */ async getFeatured (limit = 8) {
        // TODO: Replace with Firebase Firestore query
        // where('isFeatured', '==', true).limit(limit)
        const featured = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"].filter((p)=>p.isFeatured);
        return Promise.resolve(featured.slice(0, limit));
    },
    /**
   * Get perfumes with active discounts
   */ async getDiscounted (limit) {
        // TODO: Replace with Firebase Firestore query
        // where('discount', '>', 0)
        const discounted = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"].filter((p)=>p.discount && p.discount > 0);
        return Promise.resolve(limit ? discounted.slice(0, limit) : discounted);
    },
    /**
   * Get perfumes by category
   */ async getByCategory (categoryId, pagination) {
        // TODO: Replace with Firebase Firestore query
        // where('categoryId', '==', categoryId)
        const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"].filter((p)=>p.categoryId === categoryId);
        return Promise.resolve(paginate(filtered, pagination));
    },
    /**
   * Get related perfumes (same category, excluding current)
   */ async getRelated (perfumeId, categoryId, limit = 4) {
        // TODO: Replace with Firebase Firestore query
        const related = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"].filter((p)=>p.categoryId === categoryId && p.id !== perfumeId).slice(0, limit);
        return Promise.resolve(related);
    },
    /**
   * Create a new perfume (Admin only)
   */ async create (data) {
        // TODO: Replace with Firebase Firestore add
        // const docRef = await addDoc(collection(db, 'perfumes'), {
        //   ...data,
        //   createdAt: serverTimestamp(),
        //   updatedAt: serverTimestamp(),
        // });
        const now = new Date().toISOString();
        const newPerfume = {
            ...data,
            id: `perf-${Date.now()}`,
            createdAt: now,
            updatedAt: now
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"].push(newPerfume);
        return Promise.resolve(newPerfume);
    },
    /**
   * Update a perfume (Admin only)
   */ async update (id, data) {
        // TODO: Replace with Firebase Firestore update
        // await updateDoc(doc(db, 'perfumes', id), {
        //   ...data,
        //   updatedAt: serverTimestamp(),
        // });
        const index = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"].findIndex((p)=>p.id === id);
        if (index === -1) return Promise.resolve(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"][index] = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"][index],
            ...data,
            updatedAt: new Date().toISOString()
        };
        return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"][index]);
    },
    /**
   * Toggle featured status (Admin only)
   */ async toggleFeatured (id) {
        const perfume = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"].find((p)=>p.id === id);
        if (!perfume) return Promise.resolve(null);
        return this.update(id, {
            isFeatured: !perfume.isFeatured
        });
    },
    /**
   * Delete a perfume (Admin only)
   */ async delete (id) {
        // TODO: Replace with Firebase Firestore delete
        // Also delete associated image from Firebase Storage
        const index = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"].findIndex((p)=>p.id === id);
        if (index === -1) return Promise.resolve(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"].splice(index, 1);
        return Promise.resolve(true);
    },
    /**
   * Search perfumes
   */ async search (query, pagination) {
        // TODO: Consider using Firebase Extensions for full-text search
        // or Algolia integration
        const filtered = applyFilters(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$perfumes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumes"], {
            search: query
        });
        return Promise.resolve(paginate(filtered, pagination));
    }
};
}),
"[project]/apps/web/src/data/categories.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories
]);
const categories = [
    {
        id: 'cat-1',
        name: 'عطور رجالية',
        slug: 'mens-perfumes',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80',
        description: 'مجموعة فاخرة من العطور الرجالية المميزة'
    },
    {
        id: 'cat-2',
        name: 'عطور نسائية',
        slug: 'womens-perfumes',
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&q=80',
        description: 'عطور نسائية فاخرة لإطلالة مميزة'
    },
    {
        id: 'cat-3',
        name: 'عطور للجنسين',
        slug: 'unisex-perfumes',
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80',
        description: 'عطور مميزة تناسب الجميع'
    },
    {
        id: 'cat-4',
        name: 'عطور عربية',
        slug: 'arabic-perfumes',
        image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80',
        description: 'عطور عربية أصيلة بأجود المكونات'
    },
    {
        id: 'cat-5',
        name: 'عطور فرنسية',
        slug: 'french-perfumes',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        description: 'عطور فرنسية راقية من أشهر الماركات'
    },
    {
        id: 'cat-6',
        name: 'مجموعات هدايا',
        slug: 'gift-sets',
        image: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?w=800&q=80',
        description: 'مجموعات هدايا فاخرة لجميع المناسبات'
    }
];
}),
"[project]/apps/web/src/services/categoryService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryService",
    ()=>categoryService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/data/categories.ts [app-rsc] (ecmascript)");
;
const categoryService = {
    /**
   * Get all categories
   */ async getAll () {
        // TODO: Replace with Firebase Firestore query
        // const snapshot = await getDocs(collection(db, 'categories'));
        // return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return Promise.resolve([
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"]
        ]);
    },
    /**
   * Get category by ID
   */ async getById (id) {
        // TODO: Replace with Firebase Firestore query
        // const doc = await getDoc(doc(db, 'categories', id));
        // return doc.exists() ? { id: doc.id, ...doc.data() } : null;
        const category = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].find((c)=>c.id === id);
        return Promise.resolve(category || null);
    },
    /**
   * Get category by slug
   */ async getBySlug (slug) {
        // TODO: Replace with Firebase Firestore query with where clause
        const category = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].find((c)=>c.slug === slug);
        return Promise.resolve(category || null);
    },
    /**
   * Create a new category (Admin only)
   */ async create (data) {
        // TODO: Replace with Firebase Firestore add
        // const docRef = await addDoc(collection(db, 'categories'), data);
        // return { id: docRef.id, ...data };
        const newCategory = {
            ...data,
            id: `cat-${Date.now()}`
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].push(newCategory);
        return Promise.resolve(newCategory);
    },
    /**
   * Update a category (Admin only)
   */ async update (id, data) {
        // TODO: Replace with Firebase Firestore update
        // await updateDoc(doc(db, 'categories', id), data);
        const index = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].findIndex((c)=>c.id === id);
        if (index === -1) return Promise.resolve(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"][index] = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"][index],
            ...data
        };
        return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"][index]);
    },
    /**
   * Delete a category (Admin only)
   */ async delete (id) {
        // TODO: Replace with Firebase Firestore delete
        // await deleteDoc(doc(db, 'categories', id));
        const index = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].findIndex((c)=>c.id === id);
        if (index === -1) return Promise.resolve(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].splice(index, 1);
        return Promise.resolve(true);
    }
};
}),
"[project]/apps/web/src/services/authService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
// ============================================
// Auth Service - Firebase Auth Ready
// Replace implementation with Firebase later
// ============================================
// Mock admin user for development
const MOCK_ADMIN = {
    id: 'admin-1',
    email: 'admin@perfume-catalog.com',
    displayName: 'مدير النظام',
    role: 'superadmin'
};
// Mock credentials for development
const MOCK_CREDENTIALS = {
    email: 'admin@perfume-catalog.com',
    password: 'admin123'
};
// Simulated auth state
let currentUser = null;
const authService = {
    /**
   * Sign in with email and password
   */ async signIn (email, password) {
        // TODO: Replace with Firebase Auth
        // const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // const user = userCredential.user;
        // Check if user has admin role in Firestore
        // return { id: user.uid, email: user.email, ... };
        // Mock implementation
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
                    currentUser = MOCK_ADMIN;
                    // Store in sessionStorage for persistence
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    resolve(MOCK_ADMIN);
                } else {
                    reject(new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة'));
                }
            }, 500);
        });
    },
    /**
   * Sign out
   */ async signOut () {
        // TODO: Replace with Firebase Auth
        // await signOut(auth);
        currentUser = null;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return Promise.resolve();
    },
    /**
   * Get current user
   */ async getCurrentUser () {
        // TODO: Replace with Firebase Auth state
        // return auth.currentUser ? { ... } : null;
        // Check sessionStorage first
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return Promise.resolve(currentUser);
    },
    /**
   * Check if user is authenticated
   */ async isAuthenticated () {
        const user = await this.getCurrentUser();
        return user !== null;
    },
    /**
   * Subscribe to auth state changes
   */ onAuthStateChange (callback) {
        // TODO: Replace with Firebase Auth observer
        // return onAuthStateChanged(auth, (user) => {
        //   callback(user ? { ... } : null);
        // });
        // Mock implementation - call immediately with current user
        this.getCurrentUser().then(callback);
        // Return unsubscribe function
        return ()=>{};
    }
};
}),
"[project]/apps/web/src/services/imageService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================
// Image Service - Firebase Storage Ready
// Replace implementation with Firebase later
// ============================================
__turbopack_context__.s([
    "imageService",
    ()=>imageService
]);
const imageService = {
    /**
   * Upload an image (mocked for now)
   */ async upload (file, folder) {
        // TODO: Replace with Firebase Storage upload
        // const storageRef = ref(storage, `${folder}/${Date.now()}_${file.name}`);
        // await uploadBytes(storageRef, file);
        // const url = await getDownloadURL(storageRef);
        // return { url, path: storageRef.fullPath };
        // Mock implementation - create object URL
        const mockUrl = URL.createObjectURL(file);
        const mockPath = `${folder}/${Date.now()}_${file.name}`;
        return Promise.resolve({
            url: mockUrl,
            path: mockPath
        });
    },
    /**
   * Delete an image
   */ async delete (path) {
        // TODO: Replace with Firebase Storage delete
        // const storageRef = ref(storage, path);
        // await deleteObject(storageRef);
        console.log(`Mock delete image: ${path}`);
        return Promise.resolve(true);
    },
    /**
   * Get image URL from path
   */ async getUrl (path) {
        // TODO: Replace with Firebase Storage getDownloadURL
        // const storageRef = ref(storage, path);
        // return await getDownloadURL(storageRef);
        // Return mock URL or placeholder
        return Promise.resolve(path.startsWith('/') ? path : `/images/${path}`);
    },
    /**
   * Generate placeholder image URL
   */ getPlaceholder (width = 400, height = 400) {
        return '/images/placeholder.svg';
    }
};
}),
"[project]/apps/web/src/services/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/perfumeService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$categoryService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/categoryService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$authService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/authService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$imageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/imageService.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/apps/web/src/components/perfume/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PerfumeCard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$perfume$2f$PerfumeCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PerfumeCard"],
    "PerfumeGrid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$perfume$2f$PerfumeGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PerfumeGrid"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$perfume$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/perfume/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$perfume$2f$PerfumeCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/perfume/PerfumeCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$perfume$2f$PerfumeGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/perfume/PerfumeGrid.tsx [app-rsc] (ecmascript)");
}),
"[project]/apps/web/src/components/ui/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EmptyState"],
    "HeroSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$HeroSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeroSection"],
    "LoadingState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$LoadingState$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoadingState"],
    "Pagination",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Pagination$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Pagination"],
    "SectionHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/SectionHeader.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Pagination$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/Pagination.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/EmptyState.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$LoadingState$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/LoadingState.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$HeroSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/HeroSection.tsx [app-rsc] (ecmascript)");
}),
"[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PerfumePage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Grid/Grid.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$GridCol$2f$GridCol$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Grid/GridCol/GridCol.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Image$2f$Image$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Image/Image.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Divider/Divider.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTag$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTag$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTag.mjs [app-rsc] (ecmascript) <export default as IconTag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCategory$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCategory$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCategory.mjs [app-rsc] (ecmascript) <export default as IconCategory>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrendingUp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTrendingUp.mjs [app-rsc] (ecmascript) <export default as IconTrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/services/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/perfumeService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$categoryService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/categoryService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$imageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/imageService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$perfume$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/perfume/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/index.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateStaticParams() {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumeService"].getAll({
        page: 1,
        pageSize: 100
    });
    return result.data.map((perfume)=>({
            id: perfume.id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const perfume = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumeService"].getById(id);
    if (!perfume) {
        return {
            title: 'العطر غير موجود'
        };
    }
    const hasDiscount = perfume.discount && perfume.discount > 0;
    const finalPrice = hasDiscount ? perfume.price - perfume.discount : perfume.price;
    return {
        title: perfume.title,
        description: perfume.description.substring(0, 160),
        openGraph: {
            title: `${perfume.title} | عطور فاخرة`,
            description: perfume.description.substring(0, 160),
            images: perfume.image ? [
                {
                    url: perfume.image
                }
            ] : undefined,
            type: 'website'
        },
        other: {
            'product:price:amount': finalPrice.toString(),
            'product:price:currency': 'IQD'
        }
    };
}
async function PerfumePage({ params }) {
    const { id } = await params;
    const perfume = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumeService"].getById(id);
    if (!perfume) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const [category, relatedPerfumes, categories] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$categoryService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryService"].getById(perfume.categoryId),
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumeService"].getRelated(perfume.id, perfume.categoryId, 4),
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$categoryService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryService"].getAll()
    ]);
    const hasDiscount = perfume.discount && perfume.discount > 0;
    const finalPrice = hasDiscount ? perfume.price - perfume.discount : perfume.price;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stack"], {
        gap: "xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Paper"], {
                p: "xl",
                radius: "lg",
                withBorder: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Grid"], {
                    gutter: "xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$GridCol$2f$GridCol$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GridCol"], {
                            span: {
                                base: 12,
                                md: 5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Box"], {
                                pos: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Image$2f$Image$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Image"], {
                                        src: perfume.image || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$imageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageService"].getPlaceholder(500, 500),
                                        alt: perfume.title,
                                        radius: "lg",
                                        fallbackSrc: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$imageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageService"].getPlaceholder(500, 500)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: "red",
                                        variant: "filled",
                                        size: "lg",
                                        pos: "absolute",
                                        top: 16,
                                        right: 16,
                                        children: [
                                            "خصم ",
                                            perfume.discount,
                                            " دينار"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this),
                                    perfume.isFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: "gold",
                                        variant: "filled",
                                        size: "lg",
                                        pos: "absolute",
                                        top: 16,
                                        left: 16,
                                        children: "مميز"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$GridCol$2f$GridCol$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GridCol"], {
                            span: {
                                base: 12,
                                md: 7
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stack"], {
                                gap: "md",
                                children: [
                                    category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "light",
                                        color: "brand",
                                        size: "lg",
                                        leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCategory$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCategory$3e$__["IconCategory"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 32
                                        }, void 0),
                                        children: category.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Title"], {
                                        order: 1,
                                        children: perfume.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Box"], {
                                        children: hasDiscount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Group"], {
                                            gap: "md",
                                            align: "baseline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                                    fw: 700,
                                                    size: "2rem",
                                                    c: "brand",
                                                    children: [
                                                        finalPrice,
                                                        " د.ع"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                                    td: "line-through",
                                                    c: "dimmed",
                                                    size: "xl",
                                                    children: [
                                                        perfume.price,
                                                        " د.ع"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                                    color: "red",
                                                    variant: "light",
                                                    children: [
                                                        "وفر ",
                                                        perfume.discount,
                                                        " دينار"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                            fw: 700,
                                            size: "2rem",
                                            c: "brand",
                                            children: [
                                                perfume.price,
                                                " د.ع"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Box"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                                fw: 600,
                                                mb: "xs",
                                                children: "الوصف"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                                c: "dimmed",
                                                style: {
                                                    lineHeight: 1.8
                                                },
                                                children: perfume.description
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Group"], {
                                        gap: "xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Group"], {
                                                gap: "xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrendingUp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrendingUp$3e$__["IconTrendingUp"], {
                                                        size: 20,
                                                        color: "var(--mantine-color-brand-6)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                                                span: true,
                                                                fw: 600,
                                                                children: perfume.salesCount
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 21
                                                            }, this),
                                                            ' ',
                                                            "مبيعة"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Group"], {
                                                gap: "xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTag$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTag$3e$__["IconTag"], {
                                                        size: 20,
                                                        color: "var(--mantine-color-brand-6)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        children: "متوفر في المخزون"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            relatedPerfumes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Box"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                        title: "عطور مشابهة",
                        subtitle: `المزيد من ${category?.name || 'هذا التصنيف'}`,
                        viewAllLink: category ? `/category/${category.slug}` : undefined
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$perfume$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PerfumeGrid"], {
                        perfumes: relatedPerfumes,
                        categories: categories,
                        columns: {
                            base: 1,
                            sm: 2,
                            md: 2,
                            lg: 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/(public)/perfume/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3d8a521b._.js.map