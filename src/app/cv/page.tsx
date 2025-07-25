import { Container, Text, Heading, Box, Link } from '@radix-ui/themes';

export default function Resume() {
  return (
    <Container size="3" style={{ maxWidth: '48rem', margin: '0 auto' }}>
      <Box p="6">
        <Box mb="6">
          <Heading size="8" weight="bold" mb="2">
            Oleksandr Starnikov
          </Heading>
          <Text size="4" mb="2">
            Technical Lead
          </Text>
          <Link
            href="https://www.linkedin.com/in/shonie/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2563eb' }}
          >
            linkedin.com/in/shonie
          </Link>
        </Box>

        <Box mb="6">
          <Heading size="5" weight="bold" mb="4">
            Experience
          </Heading>
          <Box mt="4">
            <Text weight="bold" size="3">
              Technical Lead — [Company Name]
            </Text>
            <Text size="2" style={{ color: '#374151' }} mb="2">
              [Location, Dates]
            </Text>
            <ul
              style={{
                listStyleType: 'disc',
                listStylePosition: 'inside',
                marginTop: '0.5rem',
              }}
            >
              <li>Led development of scalable solutions for [description].</li>
              <li>
                Managed a team of X engineers, focusing on clean architecture
                and DevOps excellence.
              </li>
              <li>
                Implemented CI/CD workflows using [tools], reducing deployment
                time by X%.
              </li>
            </ul>
          </Box>
          {/* Repeat for other roles */}
        </Box>

        <Box mb="6">
          <Heading size="5" weight="bold" mb="4">
            Skills
          </Heading>
          <ul
            style={{
              listStyleType: 'disc',
              listStylePosition: 'inside',
              marginTop: '0.5rem',
            }}
          >
            <li>JavaScript, TypeScript, Node.js</li>
            <li>React, Next.js, Radix UI</li>
            <li>AWS, Docker, CI/CD, Serverless</li>
            <li>PostgreSQL, Redis, Kafka</li>
          </ul>
        </Box>

        <Box mb="6">
          <Heading size="5" weight="bold" mb="4">
            Education
          </Heading>
          <Text>Bachelor of Computer Science — [University Name]</Text>
          <Text size="2" style={{ color: '#374151' }}>
            [Location, Year]
          </Text>
        </Box>

        <Box mt="10">
          <Text size="2" style={{ color: '#6b7280' }}>
            &copy; {new Date().getFullYear()} Oleksandr Starnikov
          </Text>
        </Box>
      </Box>
    </Container>
  );
}
