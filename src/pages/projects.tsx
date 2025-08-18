import { Container, Text, Heading } from '@radix-ui/themes';
import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Oleksandr Starnikov</title>
        <meta name="description" content="Oleksandr Starnikov's Projects" />
      </Head>
      <Container size="3" style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <Heading size="8" weight="bold" mb="4">
          Projects
        </Heading>
        <Text size="4">Coming soon...</Text>
      </Container>
    </>
  );
}
