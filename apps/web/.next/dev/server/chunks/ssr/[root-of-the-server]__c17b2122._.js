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
"[project]/apps/web/src/data/brands.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================
// Static Brands Data
// Replace this with Firebase Firestore later
// ============================================
__turbopack_context__.s([
    "brands",
    ()=>brands
]);
const brands = [
    {
        id: 'brand-1',
        name: 'Chanel',
        nameAr: 'شانيل',
        logo: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&q=80',
        description: 'دار الأزياء الفرنسية الفاخرة'
    },
    {
        id: 'brand-2',
        name: 'Dior',
        nameAr: 'ديور',
        logo: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=200&q=80',
        description: 'علامة فرنسية للعطور الفاخرة'
    },
    {
        id: 'brand-3',
        name: 'Tom Ford',
        nameAr: 'توم فورد',
        logo: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&q=80',
        description: 'عطور أمريكية فاخرة'
    },
    {
        id: 'brand-4',
        name: 'Gucci',
        nameAr: 'غوتشي',
        logo: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=200&q=80',
        description: 'دار أزياء إيطالية عريقة'
    },
    {
        id: 'brand-5',
        name: 'Versace',
        nameAr: 'فرساتشي',
        logo: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=200&q=80',
        description: 'علامة إيطالية للأزياء والعطور'
    },
    {
        id: 'brand-6',
        name: 'Arabian Oud',
        nameAr: 'العربية للعود',
        logo: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=200&q=80',
        description: 'أكبر بيت للعطور العربية'
    }
];
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
"[project]/apps/web/src/components/category/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryCard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$category$2f$CategoryCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CategoryCard"],
    "CategoryGrid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$category$2f$CategoryGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CategoryGrid"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$category$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/category/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$category$2f$CategoryCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/category/CategoryCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$category$2f$CategoryGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/category/CategoryGrid.tsx [app-rsc] (ecmascript)");
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
"[project]/apps/web/src/components/brand/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandCard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$brand$2f$BrandCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrandCard"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$brand$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/brand/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$brand$2f$BrandCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/brand/BrandCard.tsx [app-rsc] (ecmascript)");
}),
"[project]/apps/web/src/app/(public)/HeroSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HeroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HeroSection() from the server but HeroSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/app/(public)/HeroSection.tsx <module evaluation>", "HeroSection");
}),
"[project]/apps/web/src/app/(public)/HeroSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HeroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HeroSection() from the server but HeroSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/app/(public)/HeroSection.tsx", "HeroSection");
}),
"[project]/apps/web/src/app/(public)/HeroSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$public$292f$HeroSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/(public)/HeroSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$public$292f$HeroSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(public)/HeroSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$public$292f$HeroSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/apps/web/src/app/(public)/FeaturedSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedSection",
    ()=>FeaturedSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FeaturedSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FeaturedSection() from the server but FeaturedSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/app/(public)/FeaturedSection.tsx <module evaluation>", "FeaturedSection");
}),
"[project]/apps/web/src/app/(public)/FeaturedSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedSection",
    ()=>FeaturedSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FeaturedSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FeaturedSection() from the server but FeaturedSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/app/(public)/FeaturedSection.tsx", "FeaturedSection");
}),
"[project]/apps/web/src/app/(public)/FeaturedSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$public$292f$FeaturedSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/(public)/FeaturedSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$public$292f$FeaturedSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(public)/FeaturedSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$public$292f$FeaturedSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/apps/web/src/app/(public)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SimpleGrid$2f$SimpleGrid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/SimpleGrid/SimpleGrid.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/services/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/perfumeService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$categoryService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/categoryService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$brands$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/data/brands.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$perfume$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/perfume/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$category$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/category/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$brand$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/brand/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$public$292f$HeroSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(public)/HeroSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$public$292f$FeaturedSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(public)/FeaturedSection.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function HomePage() {
    // Fetch data from service layer
    const [mostSold, featured, categories, allPerfumes] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumeService"].getMostSold(8),
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumeService"].getFeatured(4),
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$categoryService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryService"].getAll(),
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$perfumeService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["perfumeService"].getAll({
            page: 1,
            pageSize: 8
        })
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stack"], {
        gap: 60,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$public$292f$HeroSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Box"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                        title: "الأكثر مبيعاً",
                        subtitle: "العطور الأكثر طلباً من عملائنا المميزين",
                        viewAllLink: "/categories",
                        viewAllText: "عرض جميع العطور"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$perfume$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PerfumeGrid"], {
                        perfumes: mostSold,
                        categories: categories,
                        showCategory: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Box"], {
                py: 40,
                px: 20,
                style: {
                    background: 'linear-gradient(180deg, #fefbf3 0%, #fdf4f5 100%)',
                    borderRadius: 'var(--mantine-radius-xl)',
                    margin: '0 -1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                        title: "التصنيفات",
                        subtitle: "تصفح مجموعاتنا المتنوعة من العطور الفاخرة"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$category$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CategoryGrid"], {
                        categories: categories
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Box"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                        title: "الماركات العالمية",
                        subtitle: "أشهر دور العطور العالمية والعربية"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SimpleGrid$2f$SimpleGrid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SimpleGrid"], {
                        cols: {
                            base: 2,
                            sm: 3,
                            md: 4,
                            lg: 6
                        },
                        spacing: "lg",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$brands$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brands"].map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$brand$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrandCard"], {
                                brand: brand
                            }, brand.id, false, {
                                fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            featured.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$public$292f$FeaturedSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeaturedSection"], {
                perfumes: featured,
                categories: categories
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Box"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                        title: "أحدث المنتجات",
                        subtitle: "استكشف آخر الإضافات لمجموعتنا",
                        viewAllLink: "/categories",
                        viewAllText: "تصفح جميع العطور"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$perfume$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PerfumeGrid"], {
                        perfumes: allPerfumes.data,
                        categories: categories,
                        showCategory: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(public)/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(public)/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/app/(public)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/(public)/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c17b2122._.js.map