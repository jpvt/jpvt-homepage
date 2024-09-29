import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  useColorModeValue,
  Flex,
  VStack,
  HStack, // Import HStack for horizontal layout
  IconButton, // Use IconButton to display just the icons
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import Image from 'next/image'

// Custom styles to hide scrollbars
const hideScrollbarStyles = {
  /* For Chrome, Safari, and Opera */
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  /* For IE, Edge, and Firefox */
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
}

const Home = () => (
  <Layout>
    <Container maxW="100%" height="80vh" display="flex">
      {/* Flex container to split content into two sides with independent scrolling */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        width="100%"
        height="100%"
        overflow="hidden" // Ensure content is hidden to enable scroll only within each section
      >
        {/* Left Side */}
        <Box
          flex="1"
          p={4}
          overflowY="auto" // Enable vertical scrolling
          maxHeight="100%"
          borderRight="1px solid"
          borderColor={useColorModeValue('green.200', 'green.700')} // Adds a divider between left and right
          sx={hideScrollbarStyles} // Apply the custom styles to hide scrollbar
        >
          {/* Left Side Alignment */}
          <VStack alignItems="center" spacing={1}>
            {/* Profile Picture */}
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              width="200px"
              height="200px"
              display="inline-block"
              borderRadius="16px"
              overflow="hidden"
              mb={4}
            >
              <Image
                src="/images/joao.jpg"
                alt="Profile image"
                width="2000"
                height="2000"
              />
            </Box>
            {/* Title and Pronouns */}
            <Heading as="h2" variant="page-title" textAlign="center">
              João Teixeira
            </Heading>
            <p style={{ textAlign: 'center' }}>he/him, they/them</p>
            <p style={{ textAlign: 'center' }}>Software Engineer @ Microsoft</p>

            {/* Links Section */}
            <Section delay={0.1}>
              {/* HStack for displaying icons side by side */}
              <HStack spacing={1} mt={2}>
                <Link href="https://github.com/jpvt" target="_blank">
                  <IconButton
                    aria-label="Github"
                    icon={<IoLogoGithub />}
                    variant="ghost"
                    colorScheme="#2d7e55"
                    fontSize="2xl" // Increase font size for larger icon
                  />
                </Link>
                <Link href="https://twitter.com/jpvteixeira" target="_blank">
                  <IconButton
                    aria-label="Twitter"
                    icon={<IoLogoTwitter />}
                    variant="ghost"
                    colorScheme="#2d7e55"
                    fontSize="2xl" // Increase font size for larger icon
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/jpvt/" target="_blank">
                  <IconButton
                    aria-label="LinkedIn"
                    icon={<IoLogoLinkedin />}
                    variant="ghost"
                    colorScheme="#2d7e55"
                    fontSize="2xl" // Increase font size for larger icon
                  />
                </Link>
                <Link href="mailto:jpvteixeira99@gmail.com" target="_blank">
                  <IconButton
                    aria-label="Email"
                    icon={<IoMail />}
                    variant="ghost"
                    colorScheme="#2d7e55"
                    fontSize="2xl" // Increase font size for larger icon
                  />
                </Link>
              </HStack>
            </Section>
          </VStack>
        </Box>

        {/* Right Side */}
        <Box
          flex="2"
          p={4}
          overflowY="auto" // Enable vertical scrolling
          maxHeight="100%"
        >
          {/* News Section */}
          <Section delay={0.1}>
            <Box
              borderRadius="lg"
              mb={3}
              p={3}
              mt={0}
              textAlign="start"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
            >
              <Heading as="h3" variant="section-title">
                Selected News
              </Heading>
              <BioSection>
                <BioYear>Jan 2024</BioYear>
                Started as Software Engineer at Microsoft, working with Machine Learning at AKS.
              </BioSection>
              <BioSection>
                <BioYear>Mar 2023</BioYear>
                I'm thrilled to announce that this summer I'll be joining{' '}
                <Link as={NextLink} href="https://sgi.mit.edu/sgi-2023" passHref scroll={false}>
                  MIT's Summer Geometry Initiative
                </Link>{' '}
                as a Fellow!
              </BioSection>    
              <BioSection>
                <BioYear>Oct 2021</BioYear>
                First person in my home university to intern at Amazon.
              </BioSection>
            </Box>
          </Section>

          {/* About Me Section */}
          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              About Me
            </Heading>
            <Paragraph>
              Hi! I'm a Software Engineer at Microsoft, using cool math and AI to improve Azure Kubernetes Service (AKS).
              I also do research in ML and Geometry Processing, continuing the projects I started during the{' '}
              <Link href="https://sgi.mit.edu/sgi-2023" target="_blank">MIT Summer Geometry Initiative</Link>.
            </Paragraph>
          </Section>

          {/* I Love Section */}
          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              I ♥
            </Heading>
            <Paragraph>
              Outside of work, I love
              Art, Music, Tabletop RPGs, Soccer, and Indie Games!
            </Paragraph>
          </Section>
        </Box>
      </Flex>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
