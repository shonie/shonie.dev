import Head from 'next/head';
import { Card, Box, Text, Grid } from '@radix-ui/themes';
import Image from 'next/image';
import { appConfig } from '@/app-config';
import { BookMeetingButton } from '@/components/BookMeetingButton';
import * as Icons from '@radix-ui/react-icons';
import { CloudIcon, DatabaseIcon } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';

const badges = [
  {
    name: 'Cloud architecture & infrastructure scaling',
    icon: Icons.AngleIcon,
  },
  {
    name: 'Team leadership & mentoring',
    icon: Icons.PersonIcon,
  },
  {
    name: 'Full-stack application development',
    icon: Icons.LaptopIcon,
  },
  {
    name: 'AI-powered solutions',
    icon: Icons.MagicWandIcon,
  },
  {
    name: 'Data engineering & visualization',
    icon: Icons.ArchiveIcon,
  },
  {
    name: 'Automation & system integration',
    icon: Icons.Share1Icon,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{appConfig.siteName}</title>
        <meta
          name="description"
          content="I'm a full-stack developer and cloud architect with 9+ years of experience. I specialize in building scalable, efficient solutions that scale, anywhere."
        />
      </Head>
      <Container className="flex-col snap-y snap-mandatory h-screen m-0 overflow-y-scroll scroll-smooth [scroll-snap-type:y_mandatory] ">
        <Section>
          <Grid
            columns={{
              initial: '1',
              sm: 'repeat(4, 1fr)',
            }}
            rows={{
              initial: '1',
              sm: 'repeat(8, 64px)',
            }}
            style={{
              columnGap: '24px',
              rowGap: '0px',
            }}
            align="center"
            width="auto"
            p={{
              initial: '25% 16px 25% 16px',
              md: '25% 0% 25% 0%',
            }}
            mb="4"
          >
            {/* <Box
              asChild
              style={{
                justifySelf: 'start',
                alignSelf: 'start',
                gridColumn: '1 / span 2',
              }}
              gridArea="heading"
              gridColumn={{ initial: 'span 1', sm: '1 / span 2' }}
              gridRow={{ initial: 'span 1', sm: '1 / span 1' }}
            >
              <SectionHeading className="text-left mb-0">
                Oleksandr (Shonie) Starnikov
              </SectionHeading>
            </Box> */}

            <Box
              asChild
              gridArea="text"
              gridColumn={{ initial: 'span 1', sm: '2 / span 2' }}
              gridRow={{ initial: 'span 1', sm: '1 / span 2' }}
              style={{
                alignSelf: 'start',
              }}
            >
              <Text
                size={{
                  initial: '5',
                  md: '5',
                }}
                mb="7"
                as="p"
                className="text-left"
              >
                Crafting software end-to-end since 2016. Having a variety of
                successful products in my portfolio, now, working contractually
                for clients across the globe. Building infinitely scalable
                cloud-native applications that deliver real value to real users.
                If interested, let's have a chat to discuss your project
              </Text>
            </Box>

            {badges.map((badge, index) => (
              <Box
                gridArea="badge"
                gridRow={{
                  initial: 'span 1',
                  sm: `${Math.ceil((index + 9) / 2)} / span 1`,
                }}
                gridColumn={{
                  initial: 'span 1',
                  sm: `${(index % 2) + 2} / span 1`,
                }}
                key={`badge-${badge.name}-${index}`}
              >
                <Badge>
                  <badge.icon className="w-4 h-4 mr-2" />
                  {badge.name}
                </Badge>
              </Box>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionHeading>Core technologies & expertise</SectionHeading>
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appConfig.profile.skills.map((skill, index) => {
                const colors = [
                  'text-primary',
                  'text-secondary',
                  'text-accent',
                  'text-primary',
                  'text-secondary',
                  'text-accent',
                ];
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 dark:hover:border-primary/40 bg-white dark:bg-slate-800 hover:scale-105"
                  >
                    <Box className="p-6 text-center">
                      <Icons.CheckIcon
                        className={`w-12 h-12 mx-auto mb-4 ${colors[index]} transition-colors duration-300`}
                      />
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                        {skill.years} years
                      </p>
                    </Box>
                  </Card>
                );
              })}
            </div> */}
        </Section>

        {/* Experience Section */}
        <Section>
          <div className="container mx-auto max-w-4xl">
            <SectionHeading>What I bring to your project</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/20 dark:hover:border-secondary/40 bg-white dark:bg-slate-800 hover:scale-105">
                <Box className="p-6">
                  <CloudIcon className="w-10 h-10 text-secondary mb-4 transition-colors duration-300" />
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
                    Cloud Architecture
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
                    Design and implement hugely scalable cloud-native
                    applications using AWS services.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {appConfig.profile.certifications.map((cert, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-secondary text-secondary hover:bg-secondary/10 dark:hover:bg-secondary/20 transition-colors duration-300"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </Box>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20 dark:hover:border-accent/40 bg-white dark:bg-slate-800 hover:scale-105">
                <Box className="p-6">
                  <DatabaseIcon className="w-10 h-10 text-accent mb-4 transition-colors duration-300" />
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
                    Database Management
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
                    Expert in managing, deploying, and migrating enterprise
                    databases and building ETL pipelines.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {appConfig.profile.databases.map((db, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-accent text-accent hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors duration-300"
                      >
                        {db}
                      </Badge>
                    ))}
                  </div>
                </Box>
              </Card>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section>
          <div className="container mx-auto text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-6">
              Ready to build something amazing?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              {
                "Let's discuss your project and how I can help you build scalable, efficient solutions."
              }
            </p>
            <BookMeetingButton />
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
          <div className="container mx-auto text-center">
            <h4 className="text-xl font-semibold mb-2">{appConfig.siteName}</h4>
            <p className="text-slate-400 dark:text-slate-500 transition-colors duration-300">
              Full Stack Development • Cloud Architecture • Database Solutions
            </p>
          </div>
        </footer>
      </Container>
    </>
  );
}
