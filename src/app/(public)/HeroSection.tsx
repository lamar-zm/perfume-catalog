'use client';

import { Box, Container, Stack, Title, Text, Group, Button } from '@mantine/core';
import { IconSparkles } from '@tabler/icons-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <Box
      py={60}
      style={{
        background: 'linear-gradient(135deg, #fdf4f5 0%, #f4e4e6 50%, #fefbf3 100%)',
        borderRadius: 'var(--mantine-radius-xl)',
        marginTop: '-1rem',
      }}
    >
      <Container size="md">
        <Stack align="center" gap="lg" ta="center">
          <Title 
            order={1} 
            size="3rem"
            style={{ 
              color: '#7d3440',
              fontWeight: 800,
            }}
          >
            عطور فاخرة
          </Title>
          <Text size="xl" c="dimmed" maw={600} lh={1.8}>
            اكتشف مجموعتنا الحصرية من أفخم العطور العربية والعالمية.
            جودة استثنائية وروائح تأسر الحواس وتدوم طويلاً.
          </Text>
          <Group mt="md" gap="md">
            <Button
              component={Link}
              href="/categories"
              size="lg"
              radius="xl"
              variant="filled"
              style={{
                background: 'linear-gradient(135deg, #b8525f 0%, #9a404c 100%)',
              }}
            >
              تصفح التصنيفات
            </Button>
            <Button
              component={Link}
              href="/featured"
              size="lg"
              radius="xl"
              variant="outline"
              color="dark"
              leftSection={<IconSparkles size={18} />}
            >
              العطور المميزة
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
