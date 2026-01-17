import { Box, Container } from '@mantine/core';
import { Header, Footer } from '@/components';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box className="main-layout">
      <Header />
      <Box component="main" className="main-content">
        <Container size="xl">{children}</Container>
      </Box>
      <Footer />
    </Box>
  );
}
