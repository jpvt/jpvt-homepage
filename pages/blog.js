import {
  Container,
  Heading,
  Box,
  Text,
  Link,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NextLink from 'next/link'
import { getBlogPostsByYear } from '../lib/blog'
import { formatDate } from '../lib/date-utils'

// Blog item component
const BlogItem = ({ post, index }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const mutedColor = useColorModeValue('gray.500', 'gray.400')
  const linkColor = useColorModeValue('grassTeal', 'green.400')

  return (
    <Section delay={0.1 * index}>
      <Box
        py={6}
        borderBottom="1px"
        borderColor={borderColor}
        _last={{ borderBottom: 'none' }}
      >
        <VStack align="flex-start" spacing={3}>
          {/* Date */}
          <Text fontSize="sm" color={mutedColor} fontWeight="medium">
            {formatDate(post.date)}
          </Text>

          {/* Title */}
          <Heading
            as="h3"
            fontSize="lg"
            lineHeight="1.4"
            color={headingColor}
            fontWeight="semibold"
          >
            <Link
              as={NextLink}
              href={`/blog/${post.slug}`}
              color={linkColor}
              _hover={{ textDecoration: 'underline' }}
            >
              {post.title}
            </Link>
          </Heading>

          {/* Description */}
          <Text fontSize="md" color={textColor} lineHeight="1.5">
            {post.description}
          </Text>
        </VStack>
      </Box>
    </Section>
  )
}

// Year section component
const YearSection = ({ year, posts }) => {
  const titleColor = useColorModeValue('gray.800', 'white')

  return (
    <Section delay={0.1}>
      <Box mb={8}>
        <Heading
          as="h2"
          fontSize={{ base: 'xl', md: '2xl' }}
          mb={6}
          fontWeight="normal"
          letterSpacing="wide"
          textTransform="uppercase"
          color={titleColor}
          borderBottom="2px solid"
          borderColor={useColorModeValue('green.400', 'green.600')}
          pb={2}
        >
          {year}
        </Heading>

        <Box>
          {posts.map((post, index) => (
            <BlogItem key={post.slug} post={post} index={index} />
          ))}
        </Box>
      </Box>
    </Section>
  )
}

// Main Blog page component
const Blog = ({ groupedPosts }) => {
  const titleColor = useColorModeValue('gray.800', 'white')

  return (
    <Layout title="Blog">
      <Container maxW="container.lg" py={12}>
        {/* Page Title */}
        <Section delay={0.1}>
          <Heading
            as="h1"
            fontSize={{ base: 24, md: 32 }}
            mb={12}
            fontWeight="normal"
            letterSpacing="wide"
            textTransform="uppercase"
            color={titleColor}
          >
            Blog
          </Heading>
        </Section>

        {/* Blog Posts by Year */}
        <Box maxW="800px" mx="auto">
          {groupedPosts.map(([year, posts]) => (
            <YearSection key={year} year={year} posts={posts} />
          ))}
        </Box>
      </Container>
    </Layout>
  )
}

// Get static props for blog page
export async function getStaticProps() {
  const groupedPosts = getBlogPostsByYear()
  
  return {
    props: {
      groupedPosts
    }
  }
}

export default Blog
