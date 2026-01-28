'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  AppShell,
  NavLink,
  Box,
  Title,
  Group,
  Burger,
  Loader,
  Center,
  Text,
  Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconHome,
  IconBottle,
  IconCategory,
  IconLogout,
  IconSparkles,
  IconDiscount,
  IconBuildingStore,
} from '@tabler/icons-react';
import Link from 'next/link';
import { authApi } from '@/services';
import { Admin } from '@/types';

const navLinks = [
  { href: '/admin', label: 'لوحة التحكم', icon: IconHome },
  { href: '/admin/perfumes', label: 'العطور', icon: IconBottle },
  { href: '/admin/categories', label: 'التصنيفات', icon: IconCategory },
  { href: '/admin/brands', label: 'الماركات', icon: IconBuildingStore },
  { href: '/admin/discounts', label: 'التخفيضات', icon: IconDiscount },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const [user, setUser] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await authApi.getCurrentUser();
      if ((!res.success || !res.data) && pathname !== '/admin/login') {
        router.replace('/admin/login');
      } else if (res.success && res.data) {
        setUser(res.data);
      }
      setLoading(false);
    };
    checkAuth();
  }, [pathname, router]);

  const handleLogout = async () => {
    await authApi.signOut();
    router.replace('/admin/login');
  };

  // Show loading state
  if (loading) {
    return (
      <Center style={{ minHeight: '100vh' }}>
        <Loader size="lg" />
      </Center>
    );
  }

  // Login page doesn't need the admin shell
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // If not logged in and not on login page, show nothing (redirect will happen)
  if (!user) {
    return null;
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title order={4} c="brand">
              لوحة التحكم
            </Title>
          </Group>
          <Group>
            <Text size="sm" c="dimmed">
              {user.displayName || user.email}
            </Text>
            <Button
              variant="subtle"
              color="red"
              size="xs"
              leftSection={<IconLogout size={16} />}
              onClick={handleLogout}
            >
              تسجيل الخروج
            </Button>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Box>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              component={Link}
              href={link.href}
              label={link.label}
              leftSection={<link.icon size={18} />}
              active={pathname === link.href}
              mb="xs"
            />
          ))}
        </Box>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
