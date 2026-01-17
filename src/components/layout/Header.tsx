'use client';

import {
  Container,
  Group,
  Title,
  Burger,
  Drawer,
  Stack,
  NavLink,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconHome, IconCategory, IconSparkles } from '@tabler/icons-react';
import classes from './Header.module.css';

const navLinks = [
  { href: '/', label: 'الرئيسية', icon: IconHome },
  { href: '/categories', label: 'التصنيفات', icon: IconCategory },
  { href: '/featured', label: 'العطور المميزة', icon: IconSparkles },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <Box component="header" className={classes.header}>
      <Container size="xl">
        <Group justify="space-between" h="100%">
          <Link href="/" className={classes.logo}>
            <Title order={3}>عطور فاخرة</Title>
          </Link>

          {/* Desktop Navigation */}
          <Group gap="md" visibleFrom="sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${classes.navLink} ${
                  pathname === link.href ? classes.navLinkActive : ''
                }`}
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
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        title="القائمة"
        padding="md"
      >
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
