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
"[project]/apps/web/src/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authApi",
    ()=>authApi,
    "brandApi",
    ()=>brandApi,
    "categoryApi",
    ()=>categoryApi,
    "discountApi",
    ()=>discountApi,
    "imageHelper",
    ()=>imageHelper,
    "perfumeApi",
    ()=>perfumeApi,
    "uploadApi",
    ()=>uploadApi
]);
// Get base URL for API calls (works in both server and client)
function getBaseUrl() {
    // Client-side
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Server-side - use localhost
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
}
// Generic fetch helper
async function fetchApi(endpoint, options) {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/api${endpoint}`;
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers
            },
            cache: 'no-store'
        });
        return response.json();
    } catch (error) {
        console.error(`API Error fetching ${url}:`, error);
        return {
            success: false,
            error: 'Network error'
        };
    }
}
const perfumeApi = {
    async getAll (params) {
        const searchParams = new URLSearchParams({
            page: params.page.toString(),
            pageSize: params.pageSize.toString()
        });
        if (params.categoryId) searchParams.set('categoryId', params.categoryId);
        if (params.brandId) searchParams.set('brandId', params.brandId);
        if (params.hasDiscount) searchParams.set('hasDiscount', 'true');
        if (params.search) searchParams.set('search', params.search);
        return fetchApi(`/perfumes?${searchParams}`);
    },
    async getById (id) {
        return fetchApi(`/perfumes/${id}`);
    },
    async getMostSold (limit = 8) {
        return fetchApi(`/perfumes?endpoint=most-sold&limit=${limit}`);
    },
    async getDiscounted (limit) {
        const url = limit ? `/perfumes?endpoint=discounted&limit=${limit}` : '/perfumes?endpoint=discounted';
        return fetchApi(url);
    },
    async getRelated (perfumeId, categoryId, limit = 4) {
        return fetchApi(`/perfumes/${perfumeId}?related=true&categoryId=${categoryId}&limit=${limit}`);
    },
    async create (data) {
        return fetchApi('/perfumes', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    async update (id, data) {
        return fetchApi(`/perfumes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },
    async delete (id) {
        return fetchApi(`/perfumes/${id}`, {
            method: 'DELETE'
        });
    },
    async updateDiscount (id, discount) {
        return fetchApi(`/perfumes/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                action: 'updateDiscount',
                discount
            })
        });
    }
};
const categoryApi = {
    async getAll () {
        return fetchApi('/categories');
    },
    async getPaginated (params) {
        return fetchApi(`/categories?paginated=true&page=${params.page}&pageSize=${params.pageSize}`);
    },
    async getById (id) {
        return fetchApi(`/categories/${id}`);
    },
    async getBySlug (slug) {
        return fetchApi(`/categories/${slug}`);
    },
    async getWithPerfumes (idOrSlug, params) {
        return fetchApi(`/categories/${idOrSlug}?perfumes=true&page=${params.page}&pageSize=${params.pageSize}`);
    },
    async create (data) {
        return fetchApi('/categories', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    async update (id, data) {
        return fetchApi(`/categories/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },
    async delete (id) {
        return fetchApi(`/categories/${id}`, {
            method: 'DELETE'
        });
    }
};
const brandApi = {
    async getAll () {
        return fetchApi('/brands');
    },
    async getPaginated (params) {
        return fetchApi(`/brands?paginated=true&page=${params.page}&pageSize=${params.pageSize}`);
    },
    async getById (id) {
        return fetchApi(`/brands/${id}`);
    },
    async getBySlug (slug) {
        return fetchApi(`/brands/${slug}`);
    },
    async getWithPerfumes (idOrSlug, params) {
        return fetchApi(`/brands/${idOrSlug}?perfumes=true&page=${params.page}&pageSize=${params.pageSize}`);
    },
    async create (data) {
        return fetchApi('/brands', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    async update (id, data) {
        return fetchApi(`/brands/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },
    async delete (id) {
        return fetchApi(`/brands/${id}`, {
            method: 'DELETE'
        });
    }
};
const authApi = {
    async signIn (email, password) {
        return fetchApi('/auth', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        });
    },
    async getCurrentUser () {
        return fetchApi('/auth');
    },
    async signOut () {
        return fetchApi('/auth', {
            method: 'DELETE'
        });
    }
};
const discountApi = {
    async getAll (limit) {
        const url = limit ? `/discounts?limit=${limit}` : '/discounts';
        return fetchApi(url);
    },
    async apply (perfumeId, discount) {
        return fetchApi('/discounts', {
            method: 'POST',
            body: JSON.stringify({
                perfumeId,
                discount
            })
        });
    },
    async remove (perfumeId) {
        return fetchApi('/discounts', {
            method: 'DELETE',
            body: JSON.stringify({
                perfumeId
            })
        });
    }
};
const imageHelper = {
    getPlaceholder (width = 400, height = 400) {
        return `https://placehold.co/${width}x${height}/e9d5ff/6b21a8?text=عطر`;
    }
};
const uploadApi = {
    async upload (file) {
        const baseUrl = getBaseUrl();
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await fetch(`${baseUrl}/api/upload`, {
                method: 'POST',
                body: formData
            });
            return response.json();
        } catch (error) {
            console.error('Upload error:', error);
            return {
                success: false,
                error: 'فشل رفع الملف'
            };
        }
    },
    async delete (filename) {
        const baseUrl = getBaseUrl();
        try {
            const response = await fetch(`${baseUrl}/api/upload`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    filename
                })
            });
            return response.json();
        } catch (error) {
            console.error('Delete error:', error);
            return {
                success: false,
                error: 'فشل حذف الملف'
            };
        }
    },
    async uploadMultiple (files) {
        const results = [];
        const errors = [];
        for (const file of files){
            const result = await this.upload(file);
            if (result.success && result.data) {
                results.push(result.data.url);
            } else {
                errors.push(result.error || 'Upload failed');
            }
        }
        if (errors.length > 0 && results.length === 0) {
            return {
                success: false,
                error: errors.join(', ')
            };
        }
        return {
            success: true,
            data: {
                urls: results
            }
        };
    }
};
}),
"[project]/apps/web/src/services/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Re-export API client functions
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api.ts [app-rsc] (ecmascript)");
;
;
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
"[project]/apps/web/src/app/(public)/categories/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoriesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/services/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$category$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/category/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/index.ts [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: 'التصنيفات',
    description: 'تصفح جميع تصنيفات العطور - عطور رجالية، عطور نسائية، عطور عربية، عطور فرنسية، ومجموعات الهدايا',
    openGraph: {
        title: 'التصنيفات | عطور فاخرة',
        description: 'تصفح جميع تصنيفات العطور - عطور رجالية، عطور نسائية، عطور عربية، عطور فرنسية، ومجموعات الهدايا'
    }
};
async function CategoriesPage() {
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryApi"].getAll();
    const categories = res.success ? res.data : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stack"], {
        gap: "xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                title: "التصنيفات",
                subtitle: "تصفح عطورنا حسب الفئة"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(public)/categories/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$category$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CategoryGrid"], {
                categories: categories,
                emptyMessage: "لا توجد تصنيفات متاحة حالياً"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(public)/categories/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(public)/categories/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/app/(public)/categories/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/(public)/categories/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__468eb9c7._.js.map