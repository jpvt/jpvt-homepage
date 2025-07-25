import {
  Container,
  Heading,
  Box,
  Text,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import NextLink from 'next/link'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getAllBlogPostSlugs, getBlogPostWithContent } from '../../lib/blog'
import { formatDate } from '../../lib/date-utils'


// Individual blog post page
const BlogPost = ({ post }) => {
  const titleColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const mutedColor = useColorModeValue('gray.500', 'gray.400')
  const linkColor = useColorModeValue('grassTeal', 'green.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const codeBlockBg = useColorModeValue('gray.100', 'gray.800')
  const tableHeaderBg = useColorModeValue('gray.50', 'gray.700')

  if (!post) {
    return (
      <Layout title="Blog Post Not Found">
        <Container maxW="container.lg" py={12}>
          <Section delay={0.1}>
            <Heading as="h1" fontSize="2xl" mb={6}>
              Blog Post Not Found
            </Heading>
            <Text mb={4}>The blog post you're looking for doesn't exist.</Text>
            <Link as={NextLink} href="/blog" color={linkColor}>
              ← Back to Blog
            </Link>
          </Section>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout title={post.title}>
      <Container maxW="container.md" py={12}>
        {/* Back to Blog Link */}
        <Section delay={0.1}>
          <Link
            as={NextLink}
            href="/blog"
            color={linkColor}
            display="inline-flex"
            alignItems="center"
            mb={8}
            _hover={{ textDecoration: 'underline' }}
          >
            <ChevronLeftIcon mr={1} />
            Back to Blog
          </Link>
        </Section>

        {/* Post Header */}
        <Section delay={0.2}>
          <Box mb={8}>
            <Text fontSize="sm" color={mutedColor} fontWeight="medium" mb={2}>
              {formatDate(post.date)}
            </Text>

            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '3xl' }}
              lineHeight="1.2"
              color={titleColor}
              mb={6}
            >
              {post.title}
            </Heading>
          </Box>
        </Section>

        {/* Post Content */}
        <Section delay={0.3}>
          <Box
            color={textColor}
            lineHeight="1.7"
            fontSize="md"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            sx={{
              'h1, h2, h3, h4, h5, h6': {
                color: titleColor,
                marginTop: '2rem',
                marginBottom: '1rem',
                fontWeight: 'semibold'
              },
              'h1': {
                fontSize: '2xl',
                borderBottom: '2px solid',
                borderColor: borderColor,
                paddingBottom: '0.5rem'
              },
              'h2': {
                fontSize: 'xl',
                borderBottom: '1px solid',
                borderColor: borderColor,
                paddingBottom: '0.25rem'
              },
              'h3': {
                fontSize: 'lg'
              },
              'p': {
                marginBottom: '1.5rem'
              },
              'ul, ol': {
                marginBottom: '1.5rem',
                paddingLeft: '1.5rem'
              },
              'li': {
                marginBottom: '0.5rem'
              },
              'blockquote': {
                borderLeft: '4px solid',
                borderColor: linkColor,
                paddingLeft: '1rem',
                marginLeft: '0',
                marginRight: '0',
                marginBottom: '1.5rem',
                fontStyle: 'italic',
                color: mutedColor
              },
              'code': {
                backgroundColor: codeBlockBg,
                padding: '0.125rem 0.25rem',
                borderRadius: '0.25rem',
                fontSize: '0.875em',
                fontFamily: 'monospace'
              },
              'pre': {
                backgroundColor: codeBlockBg,
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                overflowX: 'auto'
              },
              'pre code': {
                backgroundColor: 'transparent',
                padding: '0'
              },
              'table': {
                width: '100%',
                borderCollapse: 'collapse',
                marginBottom: '1.5rem'
              },
              'th, td': {
                border: '1px solid',
                borderColor: borderColor,
                padding: '0.5rem',
                textAlign: 'left'
              },
              'th': {
                backgroundColor: tableHeaderBg,
                fontWeight: 'semibold'
              },
              'a': {
                color: linkColor,
                textDecoration: 'underline'
              },
              'img': {
                maxWidth: '100%',
                height: 'auto',
                marginBottom: '1.5rem',
                borderRadius: '0.5rem'
              }
            }}
          />
        </Section>

        {/* Back to Blog Link (bottom) */}
        <Section delay={0.4}>
          <Box mt={12} pt={8} borderTop="1px solid" borderColor={borderColor}>
            <Link
              as={NextLink}
              href="/blog"
              color={linkColor}
              display="inline-flex"
              alignItems="center"
              _hover={{ textDecoration: 'underline' }}
            >
              <ChevronLeftIcon mr={1} />
              Back to Blog
            </Link>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

// Get static paths for all blog posts
export async function getStaticPaths() {
  const slugs = getAllBlogPostSlugs()
  const paths = slugs.map(slug => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: false // Set to true if you want to generate pages on-demand
  }
}

// Get static props for individual blog post
export async function getStaticProps({ params }) {
  const post = await getBlogPostWithContent(params.slug)

  return {
    props: {
      post: post || null
    }
  }
}

export default BlogPost
