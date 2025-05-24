import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin, IoDocumentText } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Computer Science and Mathematics student at Dartmouth College!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gent Maksutaj
          </Heading>
          <p>Software Engineer (Full Stack Development, Machine Learning)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/genti-profile.jpeg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Gent is a full stack developer with a passion for building web applications and machine learning models. He is a student at Dartmouth College, where he is pursuing a degree in Computer Science and Mathematics.
          On his free time he enjoys playing basketball, working out and watching the UFC or NBA. He is currently working as a SDE intern at <Link href="https://www.remitly.com" color="purple" target="_blank">Remitly</Link>.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/documents/gent_maksutaj_resume.pdf"
            target="_blank"
            leftIcon={<IoDocumentText />}
            colorScheme="teal"
          >
            Resume
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Born in Tirana, Albania 
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Started my Computer Science and Mathematics degree at Colby College
        </BioSection>
        <BioSection>
          <BioYear> 2024</BioYear>
          Worked as a Computer Science Research Assistant under Dr. Tahiya Chowdhury, doing research on Artificial Intelligence and Machine Learning
        </BioSection>
        <BioSection>
          <BioYear> 2025</BioYear>
          Working as a Software Development Engineering Intern at <Link href="https://www.remitly.com" color="purple" target="_blank">Remitly</Link>
        </BioSection>
        <BioSection>
          <BioYear> 2025</BioYear>
          Started studying Computer Engineering at Dartmouth College
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/gentmaks" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @gentmaks
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/gentmaks" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @gentmaks
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
