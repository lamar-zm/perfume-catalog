import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import { ColorSchemeScript, MantineProvider, DirectionProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '@/theme';
import { AuthProvider } from '@/contexts';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/dates/styles.css';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: {
    default: 'عطور فاخرة - متجر العطور الأول',
    template: '%s | عطور فاخرة',
  },
  description: 'متجر متخصص في أفخم أنواع العطور العربية والعالمية. اكتشف مجموعتنا المميزة من العطور الرجالية والنسائية.',
  keywords: ['عطور', 'عطر', 'عود', 'مسك', 'عطور رجالية', 'عطور نسائية', 'عطور عربية', 'عطور فرنسية'],
  authors: [{ name: 'عطور فاخرة' }],
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://perfume-catalog.com',
    siteName: 'عطور فاخرة',
    title: 'عطور فاخرة - متجر العطور الأول',
    description: 'متجر متخصص في أفخم أنواع العطور العربية والعالمية',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عطور فاخرة - متجر العطور الأول',
    description: 'متجر متخصص في أفخم أنواع العطور العربية والعالمية',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={tajawal.variable} suppressHydrationWarning>
        <DirectionProvider>
          <MantineProvider theme={theme}>
            <Notifications position="top-center" />
            <AuthProvider>
              {children}
            </AuthProvider>
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
