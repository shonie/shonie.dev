import { Container, Text, Heading } from '@radix-ui/themes';
import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Oleksandr Starnikov</title>
        <meta name="description" content="Oleksandr Starnikov's Blog" />
      </Head>
      <Container size="3" style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <Heading size="8" weight="bold" mb="4">
          Blog
        </Heading>
        <Text size="4">Coming soon...</Text>
      </Container>
    </>
  );
}
