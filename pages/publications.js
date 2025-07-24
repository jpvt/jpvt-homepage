import {
  Container,
  Heading,
  Box,
  Text,
  Link,
  Image,
  HStack,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  keyframes
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const publicationsData = [
  {
    title:
      'Comparative Evaluation of Ray-Tracing and Monte Carlo Virtual Clinical Trials Pipelines for Lesion Detection in Digital Breast Tomosynthesis',
    authors: [
      'Chloe J. Choi',
      'Bruno Barufaldi',
      'João P. V. Teixeira',
      'Raymond J. Acciavatti',
      'Andrew D. A. Maidment'
    ],
    conference: ' Proceedings Virtual Imaging Trials in Medicine Page: 116-121',
    year: 2024,
    image: '/images/publications/vitm.png',
    tldr: 'Cross-validating ray-tracing and Monte Carlo simulators for lesion detectability in breast tomosynthesis VCTs.',
    links: { DOI: 'https://doi.org/10.48550/arXiv.2405.05359' }
  },
  {
    title:
      'Representation of complex mammary parenchyma texture in tomosynthesis using simplex noise simulations',
    authors: [
      'Bruno Barufaldi',
      'Chloe J. Choi',
      'João P. V. Teixeira',
      'Magnus Dustler',
      'Raphael B. Englander',
      'Thais G. do Rego',
      'Yuri Malheiros',
      'Telmo Filho',
      'Belayat Hossain',
      'Juhun Lee',
      'Andrew D. A. Maidment'
    ],
    conference:
      'SPIE Medical Imaging, 2024, San Diego, California, United States',
    year: 2024,
    image: '/images/publications/spie2024.png',
    tldr: 'Simulating realistic breast tissue textures in DBT using a Simplex-based noise model stratified by density classes.',
    links: { DOI: 'https://doi.org/10.1117/12.3006839' }
  },
  {
    title:
      'Multiclass Segmentation of Breast Tissue and Suspicious Findings: A Simulation-Based Study for the Development of Self-Steering Tomosynthesis',
    authors: [
      'Bruno Barufaldi',
      'Yann Nobrega',
      'Giulia Carvalhal',
      'João P. V. Teixeira',
      'Thais G. do Rego',
      'Yuri Malheiros',
      'Telmo Filho',
      'Raymond J. Acciavatti',
      'Andrew D. A. Maidment'
    ],
    conference: 'Tomography 9, no. 3: 1120-1132',
    year: 2023,
    image: '/images/publications/tomography_j.png',
    tldr: 'Self-steering tomosynthesis by using a U-Net and Dirichlet calibration to detect high-risk areas from a single low-dose breast projection.',
    links: { DOI: 'https://doi.org/10.3390/tomography9030092' }
  },
  {
    title:
      'Interactive breast lesion designer for virtual trials based on Perlin noise',
    authors: [
      'Magnus Dustler',
      'Hanna Tomic',
      'Anna Bjerken',
      'Anders Tingberg',
      'Pontus Timberg',
      'Sophia Zackrisson',
      'Arthur Chaves Costa',
      'João P. V. Teixeira',
      'Bruno Barufaldi',
      'Predrag R. Bakic'
    ],
    conference:
      'Live Demonstrations Workshop - SPIE Medical Imaging, 2023, San Diego, California, United States',
    year: 2023,
    image: '/images/publications/live_demo.png',
    tldr: 'Tool for creating realistic breast lesions in phantoms for virtual trials.',
    award: '🏆 Best Live Demo',
    links: {}
  },
  {
    title:
      'Spatial dependency of lesion detectability in digital breast tomosynthesis',
    authors: [
      'Chloe J. Choi',
      'Bruno Barufaldi',
      'João P. V. Teixeira',
      'Raymond J. Acciavatti',
      'Andrew D. A. Maidment'
    ],
    conference: '16th International Workshop on Breast Imaging (IWBI)',
    year: 2022,
    image: '/images/publications/choi_iwbi.png',
    tldr: 'Using virtual clinical trials to show that a T-shaped source motion in tomosynthesis improves lesion detectability and reduces spatial anisotropies compared to conventional geometry.',
    links: { DOI: 'https://doi.org/10.1117/12.2626272' }
  },
  {
    title:
      'Multiclass segmentation of suspicious findings in simulated breast tomosynthesis images using a U-Net',
    authors: [
      'Yann Nobrega',
      'Giulia Carvalhal',
      'João P. V. Teixeira',
      'Barbara Camargo',
      'Thais G. do Rego',
      'Yuri Malheiros',
      'Telmo Filho',
      'Trevor Vent',
      'Raymond J. Acciavatti',
      'Andrew D. A. Maidment',
      'Bruno Barufaldi'
    ],
    conference: '16th International Workshop on Breast Imaging (IWBI)',
    year: 2022,
    image: '/images/publications/nobrega_carvalhal_iwbi.png',
    tldr: 'Using virtual phantoms and a U-Net model to show that a single NGT projection can reliably identify suspicious, cancer-prone regions for guiding adaptive tomosynthesis scans.',
    award: '🏆 Top Scorer',
    links: { DOI: 'https://doi.org/10.1117/12.2626225' }
  },
  {
    title:
      'Novel Perlin-based phantoms using 3D models of compressed breast shapes and fractal noise',
    authors: [
      'João P. V. Teixeira',
      'Telmo Filho',
      'Thais G. do Rego',
      'Yuri Malheiros',
      'Magnus Dustler',
      'Predrag R. Bakic',
      'Trevor Vent',
      'Raymond J. Acciavatti',
      'Srilalan Krishnamoorthy',
      'Suleman Surti',
      'Andrew D. A. Maidment',
      'Bruno Barufaldi'
    ],
    conference:
      'SPIE Medical Imaging, 2022, San Diego, California, United States',
    year: 2022,
    image: '/images/publications/teixeira_spie.png',
    tldr: 'Using Perlin-based phantoms to show how custom x-ray source motions can improve breast volume estimation and optimize DBT prototype acquisition geometry.',
    links: { DOI: 'https://doi.org/10.1117/12.2612565' }
  },
  {
    title: 'Iris-CV: Classifying Iris Flowers Is Not as Easy as You Thought',
    authors: [
      'Itamar Filho',
      'João P. V. Teixeira',
      'João W. L. Lins',
      'Felipe Sousa',
      'Ana Sousa',
      'Manuel F. Junior',
      'Thaís Ramos',
      'Cecília Silva',
      'Thais G. do Rego',
      'Yuri Malheiros',
      'Telmo Filho'
    ],
    conference: 'BRACIS',
    year: 2021,
    image: '/images/publications/rocha_bracis.png',
    tldr: 'Toy dataset of Iris flowers images for testing computer vision models.',
    links: { DOI: 'https://doi.org/10.1007/978-3-030-91699-2_18' }
  },
  {
    title:
      'An Approach for Automatic Description of Characters for Blind People',
    authors: [
      'Itamar Filho',
      'Felipe Sousa',
      'João W. L. Lins',
      'João P. V. Teixeira',
      'Tiago Maritan'
    ],
    conference:
      'WebMedia: Proceedings of the Brazilian Symposium on Multimedia and the Web',
    year: 2021,
    image: '/images/publications/rocha_webmedia.png',
    tldr: 'Combining face and expression detection with deep learning and audio synthesis to automatically generate character-based descriptions for blind and visually impaired users.',
    links: { DOI: 'https://doi.org/10.1145/3470482.3479617' }
  }
]

// Keyframes for the shine animation
const shine = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

// Award Badge component with animations
const AwardBadge = ({ award }) => {
  // Exact Tailwind colors to match reference template
  const bgGradient = 'linear(to-r, #fffbeb, #fff1f2)' // from-amber-50 to-rose-50
  const textColor = '#b45309' // text-amber-700
  const borderColor = 'rgba(254, 243, 199, 0.5)' // border-amber-100/50

  return (
    <Box
      display="inline-block"
      px={2}
      py={0.5}
      bgGradient={bgGradient}
      borderRadius="md"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="md"
      position="relative"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: 'rotate(1deg)',
        boxShadow: 'md'
      }}
      _groupHover={{
        '& .shine-overlay': {
          animation: `${shine} 1s ease-in-out`
        }
      }}
      ml={2}
    >
      {/* Shine overlay effect */}
      <Box
        className="shine-overlay"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-r, transparent, whiteAlpha.600, transparent)"
        transform="translateX(-100%)"
      />

      <Text
        fontSize="xs"
        fontWeight="medium"
        color={textColor}
        position="relative"
        zIndex={1}
      >
        {award}
      </Text>
    </Box>
  )
}

// ImageModal component for viewing full-size images
const ImageModal = ({ isOpen, onClose, imageUrl, alt }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
    <ModalOverlay bg="blackAlpha.800" />
    <ModalContent bg="transparent" boxShadow="none" maxW="90vw" maxH="90vh">
      <ModalCloseButton
        color="white"
        size="lg"
        top={4}
        right={4}
        _hover={{ bg: 'whiteAlpha.200' }}
      />
      <ModalBody p={0}>
        <Image
          src={imageUrl}
          alt={alt}
          maxW="100%"
          maxH="90vh"
          objectFit="contain"
          borderRadius="md"
        />
      </ModalBody>
    </ModalContent>
  </Modal>
)

// Publication item component with modal functionality
const PublicationItem = ({ publication, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.800', 'gray.300')
  const mutedColor = useColorModeValue('gray.700', 'gray.400')
  const linkColor = useColorModeValue('grassTeal', 'green.400')

  return (
    <Section delay={0.1 * index}>
      <Box
        py={6}
        borderBottom="1px"
        borderColor={borderColor}
        _last={{ borderBottom: 'none' }}
        role="group"
      >
        {/* Simple Horizontal Layout */}
        <HStack spacing={6} align="flex-start">
          {/* Small Thumbnail Image - Clickable */}
          <Box flexShrink={0}>
            <Image
              src={publication.image}
              alt={publication.title}
              width="160px"
              height="120px"
              objectFit="cover"
              borderRadius="md"
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.05)', cursor: 'pointer' }}
              onClick={onOpen}
            />
          </Box>

          {/* Publication Text Content */}
          <Box flex="1" minW="0">
            {/* Conference and Year with inline Award Badge */}
            <HStack spacing={0} mb={2} align="center">
              <Text fontSize="sm" color={mutedColor} fontWeight="medium">
                {publication.conference.split(',')[0]} {publication.year}
              </Text>
              {publication.award && <AwardBadge award={publication.award} />}
            </HStack>

            {/* Publication Title */}
            <Heading
              as="h3"
              fontSize="lg"
              mb={3}
              lineHeight="1.4"
              color={headingColor}
              fontWeight="semibold"
            >
              <Link
                href={publication.links.DOI || '#'}
                isExternal
                _hover={{ textDecoration: 'underline' }}
              >
                {publication.title}
              </Link>
            </Heading>

            {/* Authors */}
            <Text fontSize="md" color={textColor} lineHeight="1.5" mb={3}>
              {publication.authors.map((author, i) => (
                <span
                  key={i}
                  style={{
                    fontWeight:
                      author === 'João P. V. Teixeira' ? 'bold' : 'normal'
                  }}
                >
                  {author}
                  {i < publication.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </Text>

            {/* Action Links */}
            <HStack spacing={4} mb={2}>
              {publication.links.DOI && (
                <Link
                  href={publication.links.DOI}
                  isExternal
                  color={linkColor}
                  fontSize="sm"
                  fontWeight="medium"
                  textTransform="uppercase"
                  _hover={{ textDecoration: 'underline' }}
                >
                  📄 Paper
                </Link>
              )}
            </HStack>

            {/* Optional Description - using tldr */}
            <Text
              fontSize="sm"
              color={mutedColor}
              fontStyle="italic"
              lineHeight="1.4"
            >
              {publication.tldr}
            </Text>
          </Box>
        </HStack>

        {/* Image Modal */}
        <ImageModal
          isOpen={isOpen}
          onClose={onClose}
          imageUrl={publication.image}
          alt={publication.title}
        />
      </Box>
    </Section>
  )
}

// Function to generate publication components
const generatePublicationItems = data => {
  return data.map((publication, index) => (
    <PublicationItem key={index} publication={publication} index={index} />
  ))
}

// Publications Page Component
const Publications = () => {
  const titleColor = useColorModeValue('gray.800', 'white')

  return (
    <Layout title="Publications">
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
            Publications
          </Heading>
        </Section>

        {/* Render Publications - Clean List */}
        <Box maxW="800px" mx="auto">
          {generatePublicationItems(publicationsData)}
        </Box>
      </Container>
    </Layout>
  )
}

export default Publications
export { getServerSideProps } from '../components/chakra'
