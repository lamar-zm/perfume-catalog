module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/apps/web/src/theme/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "theme",
    ()=>theme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$create$2d$theme$2f$create$2d$theme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/core/MantineProvider/create-theme/create-theme.mjs [app-ssr] (ecmascript)");
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
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$create$2d$theme$2f$create$2d$theme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTheme"])({
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4b7f7a0d._.js.map