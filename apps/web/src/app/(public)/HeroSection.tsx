'use client';

import { Box, Container, Stack, Title, Text, Group, Button } from '@mantine/core';
import { IconSparkles, IconCategory } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <Box
      py={{ base: 40, sm: 60, md: 80 }}
      style={{
        background: 'linear-gradient(135deg, #fdf4f5 0%, #f4e4e6 50%, #fefbf3 100%)',
        borderRadius: 'var(--mantine-radius-xl)',
        marginTop: '-1rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <Box
        style={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(184, 82, 95, 0.1)',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'rgba(184, 82, 95, 0.08)',
        }}
      />

      <Container size="md" style={{ position: 'relative', zIndex: 1 }}>
        <Stack align="center" gap="lg" ta="center">
          {/* Logo */}
          <Box
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(125, 52, 64, 0.2)',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/logo.png"
              alt="رشوش"
              width={100}
              height={100}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Box>

          {/* Title */}
          <Title
            order={1}
            size="3.5rem"
            style={{
              color: '#7d3440',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            رشوش
          </Title>

          {/* Description */}
          <Text
            size="xl"
            c="dimmed"
            maw={600}
            lh={1.8}
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
          >
            اكتشف مجموعتنا الحصرية من أفخم العطور العربية والعالمية.
            جودة استثنائية وروائح تأسر الحواس وتدوم طويلاً.
          </Text>

          {/* CTA Buttons */}
          <Group mt="md" gap="md">
            <Button
              component={Link}
              href="/categories"
              size="lg"
              radius="xl"
              variant="filled"
              leftSection={<IconCategory size={18} />}
              style={{
                background: 'linear-gradient(135deg, #b8525f 0%, #9a404c 100%)',
                boxShadow: '0 4px 14px rgba(184, 82, 95, 0.4)',
              }}
            >
              تصفح التصنيفات
            </Button>
            <Button
              component={Link}
              href="/most-sold"
              size="lg"
              radius="xl"
              variant="outline"
              color="dark"
              leftSection={<IconSparkles size={18} />}
              style={{
                borderColor: '#7d3440',
                color: '#7d3440',
              }}
            >
              الأكثر مبيعاً
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
