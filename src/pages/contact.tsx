import { Container, Text, Heading } from '@radix-ui/themes';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Oleksandr Starnikov</title>
        <meta name="description" content="Contact Oleksandr Starnikov" />
      </Head>
      <Container size="3" style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <Heading size="8" weight="bold" mb="4">
          Contact
        </Heading>
        <Text size="4">Coming soon...</Text>
      </Container>
    </>
  );
}
