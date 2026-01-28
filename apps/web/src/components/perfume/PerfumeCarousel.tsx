'use client';

import { useState, useRef } from 'react';
import { Box, Image, ActionIcon, Group } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface PerfumeCarouselProps {
  images: string[];
  coverImage?: string;
  height?: number;
}

export default function PerfumeCarousel({ images, coverImage, height = 500 }: PerfumeCarouselProps) {
  const ordered = coverImage ? [coverImage, ...images.filter((i) => i !== coverImage)] : images;
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i - 1 + ordered.length) % ordered.length);
  const next = () => setIndex((i) => (i + 1) % ordered.length);

  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 30) {
      if (dx < 0) next(); else prev();
    }
    startX.current = null;
  };

  if (!ordered || ordered.length === 0) {
    return null;
  }

  return (
    <Box pos="relative">
      <Box onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <Image src={ordered[index]} alt={`Image ${index + 1}`} height={height} fit="cover" />
      </Box>

      {ordered.length > 1 && (
        <>
          <ActionIcon pos="absolute" top={"50%"} left={8} style={{ transform: 'translateY(-50%)' }} onClick={prev}>
            <IconChevronLeft />
          </ActionIcon>
          <ActionIcon pos="absolute" top={"50%"} right={8} style={{ transform: 'translateY(-50%)' }} onClick={next}>
            <IconChevronRight />
          </ActionIcon>

          <Group justify="center" mt="xs">
            {ordered.map((_, i) => (
              <Box key={i} style={{ width: 8, height: 8, borderRadius: 999, background: i === index ? 'var(--mantine-color-brand-6)' : '#ddd' }} />
            ))}
          </Group>
        </>
      )}
    </Box>
  );
}
