'use client';

import {
  Container,
  Group,
  Burger,
  Drawer,
  Stack,
  NavLink,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IconHome, IconCategory, IconSparkles, IconDiscount, IconBuildingStore } from '@tabler/icons-react';
import classes from './Header.module.css';

const navLinks = [
  { href: '/', label: 'الرئيسية', icon: IconHome },
  { href: '/categories', label: 'التصنيفات', icon: IconCategory },
  { href: '/brands', label: 'الماركات', icon: IconBuildingStore },
  { href: '/most-sold', label: 'الأكثر مبيعاً', icon: IconSparkles },
  { href: '/discounts', label: 'العروض و التخفيضات', icon: IconDiscount },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();

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
        </Stack>
      </Drawer>
    </Box>
  );
}
