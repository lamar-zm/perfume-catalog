 'use client';

import { Container, Text, Group, Stack, Anchor, Divider, Box } from '@mantine/core';
import Link from 'next/link';
import { IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp } from '@tabler/icons-react';
import classes from './Footer.module.css';

const footerLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/categories', label: 'التصنيفات' },
  { href: '/most-sold', label: 'الأكثر مبيعاً' },
];

export function Footer() {
  return (
    <Box component="footer" className={classes.footer}>
      <Container size="xl">
        <Stack gap="lg">
          <Group justify="space-between" align="flex-start" wrap="wrap">
            {/* Brand */}
            <Box>
              <Text fw={700} size="xl" style={{ color: 'inherit' }}>
                عطور فاخرة
              </Text>
              <Text size="sm" mt="xs" maw={300} style={{ color: 'inherit' }}>
                متجر متخصص في أفخم أنواع العطور العربية والعالمية
              </Text>
            </Box>

            {/* Links */}
            <Stack gap="xs">
              <Text fw={600}>روابط سريعة</Text>
              {footerLinks.map((link) => (
                <Anchor key={link.href} component={Link} href={link.href} size="sm" style={{ color: 'inherit' }}>
                  {link.label}
                </Anchor>
              ))}
            </Stack>

            {/* Contact */}
            <Stack gap="xs">
              <Text fw={600}>تواصل معنا</Text>
              <Group gap="md">
                <Anchor href="https://www.instagram.com/roshoosh.iq?igsh=MTdkOTdkajdvOWFwYg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  <IconBrandInstagram size={24} />
                </Anchor>
                <Anchor href="https://www.tiktok.com/@roshoosh.iq" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  <IconBrandTiktok size={24} />
                </Anchor>
                <Anchor href="https://api.whatsapp.com/send?phone=07801454148" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  <IconBrandWhatsapp size={24} />
                </Anchor>
              </Group>
            </Stack>
          </Group>

          <Divider />

          <Text size="xs" ta="center" style={{ color: 'inherit' }}>
            © {new Date().getFullYear()} عطور فاخرة. جميع الحقوق محفوظة.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
