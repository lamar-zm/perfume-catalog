'use client';

import {
  Container,
  Group,
  Burger,
  Drawer,
  Stack,
  NavLink,
  Box,
  Menu,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IconHome, IconCategory, IconSparkles } from '@tabler/icons-react';
import classes from './Header.module.css';
import { useEffect, useState } from 'react';
import { brandApi } from '@/services';
import type { Brand } from '@perfume-catalog/shared';

const navLinks = [
  { href: '/', label: 'الرئيسية', icon: IconHome },
  { href: '/categories', label: 'التصنيفات', icon: IconCategory },
  { href: '/most-sold', label: 'الأكثر مبيعاً', icon: IconSparkles },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    let mounted = true;
    const fetchBrands = async () => {
      try {
        const res = await brandApi.getAll();
        if (mounted && res.success && res.data) setBrands(res.data);
      } catch (e) {
      }
    };
    fetchBrands();
    return () => { mounted = false; };
  }, []);

  return (
    <Box component="header" className={classes.header} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Container size="xl">
        <Group justify="space-between" h="100%">
          <Link href="/" className={classes.logo}>
<Image
  src="/logo.png"
  alt="عطور فاخرة"
  width={100}
  height={100}
  priority
/>
          </Link>

          {/* Desktop Navigation */}
          <Group gap="md" visibleFrom="sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${classes.navLink} ${pathname === link.href ? classes.navLinkActive : ''}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Brands menu */}
            <Menu withinPortal>
              <Menu.Target>
                <a className={classes.navLink}>البراندات</a>
              </Menu.Target>
              <Menu.Dropdown>
                {brands.length === 0 ? (
                  <Menu.Item disabled>تحميل...</Menu.Item>
                ) : (
                  brands.slice(0, 10).map((b) => (
                    <Menu.Item key={b.id} component={Link} href={`/brand/${b.slug}`}>
                      {b.name}
                    </Menu.Item>
                  ))
                )}
                {brands.length > 10 && (
                  <Menu.Item component={Link} href="/brands">المزيد...</Menu.Item>
                )}
              </Menu.Dropdown>
            </Menu>
          </Group>

          {/* Mobile Menu Button */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
        </Group>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer opened={opened} onClose={close} position="right" size="xs" title="القائمة" padding="md">
        <Stack gap="xs">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              component={Link}
              href={link.href}
              label={link.label}
              leftSection={<link.icon size={18} />}
              active={pathname === link.href}
              onClick={close}
            />
          ))}

          <NavLink label=" البراندات" />
          {brands.map((b) => (
            <NavLink key={b.id} component={Link} href={`/brand/${b.slug}`} label={b.name} onClick={close} />
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}
