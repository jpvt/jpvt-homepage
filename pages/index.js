import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  useColorModeValue,
  Grid,
  GridItem,
  VStack,
  HStack,
  IconButton
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5'
import Image from 'next/image'

// Custom styles for hyperlinks
const linkStyles = {
  position: 'relative',
  color: 'inherit',
  textDecoration: 'underline',
  borderBottom: '1px solid green.400',
  backgroundImage: 'linear-gradient(to right, transparent 50%, green.400 50%)',
  backgroundSize: '210%',
  backgroundPosition: '0%',
  transition: 'background-position 0.5s ease-in-out',
  _hover: {
    backgroundPosition: '-95%'
  }
}

const Home = ({ randomProfilePic }) => {
  const profilePic = randomProfilePic || '/images/profile/joao.jpg'

  return (
    <Layout>
      <Container
        maxW={{ base: '100%', lg: '1200px', xl: '1400px' }}
        minHeight="100vh"
        p={{ base: 4, md: 6, lg: 8 }}
        py={{ base: 8, md: 12, lg: 24 }}
      >
        {/* Grid Layout */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }}
          gap={{ base: 8, md: 6 }}
          width="100%"
        >
          {/* Left Side */}
          <GridItem
            colSpan={{ base: 12, md: 4 }}
            position={{ base: 'static', md: 'sticky' }}
            top={{ base: 'auto', md: '2rem' }}
            justifySelf="start"
            alignSelf="start"
          >
            <VStack spacing={6} alignItems="center">
              {/* Profile Picture */}
              <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                width={{ base: '180px', md: '220px', lg: '260px' }}
                height={{ base: '180px', md: '220px', lg: '260px' }}
                borderRadius="16px"
                overflow="hidden"
              >
                <Image
                  src={profilePic}
                  alt="Profile image"
                  width="2000"
                  height="2000"
                />
              </Box>

              {/* Name and Title */}
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                textAlign="center"
              >
                João Teixeira
              </Heading>
              <Paragraph
                textAlign="center"
                fontSize="lg"
                color={useColorModeValue('gray.700', 'gray.300')}
              >
                Software Engineer @ Microsoft
              </Paragraph>

              {/* Social Media Links */}
              <HStack spacing={4} mt={2}>
                <Link href="https://github.com/jpvt" target="_blank">
                  <IconButton
                    aria-label="Github"
                    icon={<IoLogoGithub />}
                    fontSize="2xl"
                  />
                </Link>
                <Link href="https://twitter.com/jpvteixeira" target="_blank">
                  <IconButton
                    aria-label="Twitter"
                    icon={<IoLogoTwitter />}
                    fontSize="2xl"
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/jpvt/" target="_blank">
                  <IconButton
                    aria-label="LinkedIn"
                    icon={<IoLogoLinkedin />}
                    fontSize="2xl"
                  />
                </Link>
                <Link href="mailto:jpvteixeira99@gmail.com" target="_blank">
                  <IconButton
                    aria-label="Email"
                    icon={<IoMail />}
                    fontSize="2xl"
                  />
                </Link>
              </HStack>

              {/* News Section */}
              <Section delay={0.1}>
                <Box
                  borderRadius="lg"
                  p={4}
                  borderWidth="2px"
                  borderColor={useColorModeValue('green.400', 'green.600')}
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  width="100%"
                >
                  <Heading
                    as="h3"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    mb={3}
                    borderBottom="2px solid"
                    borderColor={useColorModeValue('green.400', 'green.600')}
                  >
                    Selected News
                  </Heading>
                  <BioSection>
                    <BioYear>Jan 2024</BioYear>
                    Started as Software Engineer at Microsoft, working with
                    Machine Learning at AKS.
                  </BioSection>
                  <BioSection>
                    <BioYear>Mar 2023</BioYear>
                    I’m thrilled to announce that this summer I’ll be joining{' '}
                    <Link
                      as={NextLink}
                      href="https://sgi.mit.edu/sgi-2023"
                      target="_blank"
                      sx={linkStyles}
                    >
                      MIT’s Summer Geometry Initiative
                    </Link>{' '}
                    as a Fellow!
                  </BioSection>
                  <BioSection>
                    <BioYear>Aug 2022</BioYear>
                    Honored to become an Estudar Foundation Tech Fellow, class
                    of 2022.
                  </BioSection>
                  <BioSection>
                    <BioYear>Oct 2021</BioYear>
                    First person in my home university to intern at Amazon.
                  </BioSection>
                </Box>
              </Section>
            </VStack>
          </GridItem>

          {/* Right Side */}
          <GridItem colSpan={{ base: 12, md: 7 }} colStart={{ base: 1, md: 6 }}>
            <Section delay={0.1}>
              <Heading
                as="h3"
                mb={6}
                fontSize={{ base: 'xl', lg: '2xl' }}
                borderBottom="2px solid"
                borderColor={useColorModeValue('green.400', 'green.600')}
              >
                About Me
              </Heading>
              <Paragraph>
                Hi! I’m <strong>João Teixeira</strong> (
                <small>Jo-ahn-uhm Tay-shay-ra</small>).
                <br />
                <br />
                I’m a <strong>Software Engineer at Microsoft</strong>, where I
                design and build
                <strong> automated, data-driven systems</strong> for
                <strong> Azure Kubernetes Service (AKS) Infrastructure</strong>.
                My work focuses on leveraging historical data and predictive
                analytics to optimize
                <strong> capacity management</strong> and resource allocation at
                scale.
                <br />
                <br />
                I’m passionate about <strong>
                  Geometry Processing
                </strong> and <strong>Machine Learning</strong>, particularly
                shape representation and analysis. I was a{' '}
                <Link
                  href="https://sgi.mit.edu/sgi-2023"
                  target="_blank"
                  sx={linkStyles}
                >
                  <strong>MIT Summer Geometry Initiative Fellow (2023)</strong>
                </Link>
                , where I kick-started several projects showcased here.
                <br />
                <br />
                Previously, I worked on <strong>Computer Graphics</strong> and
                <strong> Medical Imaging</strong> as part of the{' '}
                <strong>ARIA Lab</strong> in collaboration with the{' '}
                <strong>
                  X-ray Physics Lab at the University of Pennsylvania
                </strong>
                . I’m also a proud recipient of the{' '}
                <strong>Estudar Foundation Tech Fellowship</strong>.
                <br />
                <br />
                Feel free to connect—let’s talk about{' '}
                <strong>geometry, machine learning, and engineering!</strong>
              </Paragraph>
            </Section>
            {/* Trivia Section */}
            <Section delay={0.2}>
              <Heading
                as="h3"
                mb={6}
                mt={8}
                fontSize={{ base: 'xl', lg: '2xl' }}
                borderBottom="2px solid"
                borderColor={useColorModeValue('green.400', 'green.600')}
              >
                Trivia
              </Heading>
              <Paragraph>
                Outside of work, I try to enjoy a few hobbies. Here are some fun
                facts about them:
                <br />
                <br />
                🎮 I’m a huge fan of CRPG video games, my favorite one is
                Baldur's Gate 3
                <br />
                <br />
                🍳 I recently got into cooking and I'm trying to learn as many
                healthy recipes as possible
                <br />
                <br />
                🧙‍♂️ I enjoy playing Dungeons & Dragons and often serve as the
                Dungeon Master for my group
                <br />
                <br />
                ✈️ I love traveling and one of my dreams is to visit all
                continents before my 30s!
              </Paragraph>
            </Section>
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Home

export async function getServerSideProps() {
  const fs = require('fs')
  const path = require('path')

  try {
    const profileDir = path.join(process.cwd(), 'public', 'images', 'profile')
    const files = fs.readdirSync(profileDir)

    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase()
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)
    })

    if (imageFiles.length > 0) {
      const randomFile =
        imageFiles[Math.floor(Math.random() * imageFiles.length)]
      const randomProfilePic = `/images/profile/${randomFile}`

      return {
        props: {
          randomProfilePic
        }
      }
    }
  } catch (error) {
    console.error('Error loading profile images:', error)
  }

  return {
    props: {
      randomProfilePic: '/images/profile/joao.jpg'
    }
  }
}
