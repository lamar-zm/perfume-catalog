'use client';

import { Title, Text, Box, Group } from '@mantine/core';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import classes from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  viewAllText?: string;
}

export function SectionHeader({
  title,
  subtitle,
  viewAllLink,
  viewAllText = 'عرض الكل',
}: SectionHeaderProps) {
  return (
    <Box className={classes.header} mb="lg">
      <Group justify="space-between" align="flex-end">
        <Box>
          <Title order={2} className={classes.title}>
            {title}
          </Title>
          {subtitle && (
            <Text c="dimmed" size="sm" mt={4}>
              {subtitle}
            </Text>
          )}
        </Box>
        {viewAllLink && (
          <Link href={viewAllLink} className={classes.viewAll}>
            <Group gap="xs">
              <Text size="sm">{viewAllText}</Text>
              <IconArrowLeft size={16} />
            </Group>
          </Link>
        )}
      </Group>
    </Box>
  );
}
