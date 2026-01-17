'use client';

import { Container, Text, Group, Stack, Anchor, Divider, Box } from '@mantine/core';
import Link from 'next/link';
import { IconBrandInstagram, IconBrandTwitter, IconBrandWhatsapp } from '@tabler/icons-react';
import classes from './Footer.module.css';

const footerLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/categories', label: 'التصنيفات' },
  { href: '/featured', label: 'العطور المميزة' },
];

export function Footer() {
  return (
    <Box component="footer" className={classes.footer}>
      <Container size="xl">
        <Stack gap="lg">
          <Group justify="space-between" align="flex-start" wrap="wrap">
            {/* Brand */}
            <Box>
              <Text fw={700} size="xl" c="brand">
                عطور فاخرة
              </Text>
              <Text size="sm" c="dimmed" mt="xs" maw={300}>
                متجر متخصص في أفخم أنواع العطور العربية والعالمية
              </Text>
            </Box>

            {/* Links */}
            <Stack gap="xs">
              <Text fw={600}>روابط سريعة</Text>
              {footerLinks.map((link) => (
                <Anchor
                  key={link.href}
                  component={Link}
                  href={link.href}
                  c="dimmed"
                  size="sm"
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>

            {/* Contact */}
            <Stack gap="xs">
              <Text fw={600}>تواصل معنا</Text>
              <Group gap="md">
                <Anchor href="#" c="dimmed">
                  <IconBrandInstagram size={24} />
                </Anchor>
                <Anchor href="#" c="dimmed">
                  <IconBrandTwitter size={24} />
                </Anchor>
                <Anchor href="#" c="dimmed">
                  <IconBrandWhatsapp size={24} />
                </Anchor>
              </Group>
            </Stack>
          </Group>

          <Divider />

          <Text size="xs" c="dimmed" ta="center">
            © {new Date().getFullYear()} عطور فاخرة. جميع الحقوق محفوظة.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
