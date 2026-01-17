(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/theme/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "theme",
    ()=>theme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$create$2d$theme$2f$create$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/core/MantineProvider/create-theme/create-theme.mjs [app-client] (ecmascript)");
'use client';
;
// Elegant dark rose gold theme for luxury perfume brand
const brandColor = [
    '#fdf4f5',
    '#f4e4e6',
    '#e8c4c9',
    '#dba1a9',
    '#d1848f',
    '#c96b77',
    '#b8525f',
    '#9a404c',
    '#7d3440',
    '#612833'
];
const goldAccent = [
    '#fefbf3',
    '#faf3e0',
    '#f3e4ba',
    '#ebd391',
    '#e4c36d',
    '#d4a84a',
    '#c4943a',
    '#a67c2e',
    '#876424',
    '#6b4f1c'
];
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$create$2d$theme$2f$create$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTheme"])({
    // Brand colors
    colors: {
        brand: brandColor,
        gold: goldAccent
    },
    primaryColor: 'brand',
    // Typography
    fontFamily: 'Tajawal, Arial, sans-serif',
    headings: {
        fontFamily: 'Tajawal, Arial, sans-serif',
        fontWeight: '700'
    },
    // Default radius
    defaultRadius: 'md',
    // Component defaults
    components: {
        Button: {
            defaultProps: {
                radius: 'md'
            }
        },
        Card: {
            defaultProps: {
                radius: 'lg',
                shadow: 'sm'
            }
        },
        TextInput: {
            defaultProps: {
                radius: 'md'
            }
        },
        Textarea: {
            defaultProps: {
                radius: 'md'
            }
        },
        Select: {
            defaultProps: {
                radius: 'md'
            }
        },
        NumberInput: {
            defaultProps: {
                radius: 'md'
            }
        }
    },
    // Other settings
    respectReducedMotion: true,
    cursorType: 'pointer'
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) {
        return '';
    }
    //TURBOPACK unreachable
    ;
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
        if (params.isFeatured !== undefined) searchParams.set('isFeatured', params.isFeatured.toString());
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
    async getFeatured (limit = 8) {
        return fetchApi(`/perfumes?endpoint=featured&limit=${limit}`);
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
    async toggleFeatured (id) {
        return fetchApi(`/perfumes/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                action: 'toggleFeatured'
            })
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/contexts/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // Check if user is already logged in
            checkAuth();
        }
    }["AuthProvider.useEffect"], []);
    const checkAuth = async ()=>{
        try {
            const currentUser = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].getCurrentUser();
            setUser(currentUser);
        } catch  {
            setUser(null);
        } finally{
            setLoading(false);
        }
    };
    const signIn = async (email, password)=>{
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].signIn(email, password);
        if (result.user) {
            setUser(result.user);
        }
    };
    const signOut = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].signOut();
        setUser(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            signIn,
            signOut,
            isAuthenticated: !!user
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/contexts/AuthContext.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "NiO5z6JIqzX62LS5UWDgIqbZYyY=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_9a6ff943._.js.map