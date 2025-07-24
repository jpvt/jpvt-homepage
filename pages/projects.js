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
  useDisclosure
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const projectsData = [
  {
    title: 'Exvivo surface mesh reconstruction from in-vivo FreeSurfer meshes',
    image: '/images/publications/closing.gif',
    description:
      'This project translated in-vivo MRI FreeSurfer meshes into ex-vivo meshes \
    using a surface-based approach to close the deep sulci of the brain. The project was part of the Summer Geometry Institute 2023.',
    git_link: 'https://github.com/SGI-2023/Invivo-Exvivo-2023',
    project_page:
      'https://summergeometry.org/sgi2023/exvivo-surface-mesh-reconstruction-from-in-vivo-freesurfer-meshes/',
    tags: ['Geometry Processing', 'Medical Imaging', 'Closing Surface']
  },
  {
    title: 'Sampling Surfaces from Point Clouds',
    image: '/images/publications/sampsurfs.png',
    description:
      'This project uses Gaussian and Neural Processes to predict \
    a distribution of possible surfaces of a given Point Cloud. The project was part of the \
    Summer Geometry Institute 2023.',
    git_link: 'https://github.com/SGI-2023/sampling-surfaces',
    project_page: 'https://github.com/SGI-2023/sampling-surfaces',
    tags: [
      'Geometry Processing',
      'Surface Reconstruction',
      'Gaussian Processes'
    ]
  },
  {
    title: 'The (in)accurate Gradients of Neural Representations',
    image: '/images/publications/INSR.png',
    description:
      'This project explored different methods to smooth the noisy gradients \
     of Implicit Neural Spatial Representations for Time-dependent PDEs. The project was part of the \
     Summer Geometry Institute 2023.',
    git_link: 'https://github.com/SGI-2023/INSR-hybrid',
    project_page:
      'https://summergeometry.org/sgi2023/hybrid-neural-and-grid-representations/',
    tags: ['Physics Simulation', 'Neural PDEs', 'Geometry']
  },
  {
    title: 'LASER Autonomous SLAM',
    image: '/images/publications/robotics_proj.png',
    description:
      'This project aims to develop an exploration and mapping system for a \
    custom differential drive robot designed by LASER-Robotics Lab. The system uses the SLAM Toolbox \
    for simultaneous localization and mapping (SLAM), Nav2 for navigation, and Explore Lite \
    for autonomous exploration.',
    git_link: 'https://github.com/jpvt/laser_autonomous_exploration',
    project_page: 'https://github.com/jpvt/laser_autonomous_exploration',
    tags: ['Robotics', 'SLAM', 'ROS2']
  },
  {
    title: '3D Noise Generator Dashboard',
    image: '/images/publications/noisegen_dashboard.png',
    description:
      'An interactive web-based dashboard for generating and visualizing \
    3D noise volumes using Streamlit. Customize noise parameters like noise type, volume size, \
    number of volumes, and more, then explore the generated volume slice by slice. \
    Export the volume as a TIFF file for further processing or analysis.',
    git_link: 'https://github.com/jpvt/NoiseVolumesDemo',
    project_page: 'https://github.com/jpvt/NoiseVolumesDemo',
    tags: ['Noise', 'Streamlit', 'Procedural Generation']
  },
  {
    title: 'GANdido Portinari',
    image: '/images/publications/retirantes.jpg',
    description:
      "In this project we trained a CycleGan to reproduce Candido's Portinari style \
    into photos of places and people.",
    git_link: 'https://github.com/ItamarRocha/GANdido-Portinari',
    project_page: 'https://github.com/ItamarRocha/GANdido-Portinari',
    tags: ['Gen AI', 'CycleGAN', 'Visual Arts']
  },
  {
    title: 'Denoising documents',
    image: '/images/publications/denoise.png',
    description:
      "In this project I've explored image processing methods that could fix the \
    text samples in documents images.",
    git_link:
      'https://github.com/jpvt/cv-test/blob/joaoteixeira/01-DocumentCleanup/DocumentCleanup.ipynb',
    project_page:
      'https://github.com/jpvt/cv-test/blob/joaoteixeira/01-DocumentCleanup/DocumentCleanup.ipynb',
    tags: ['Computer Vision', 'Autoencoder', 'Deep Learning']
  }
]

// ImageModal component for viewing full-size images (same as publications)
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

// Project item component with modal functionality (similar to PublicationItem)
const ProjectItem = ({ project, index }) => {
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
      >
        {/* Simple Horizontal Layout */}
        <HStack spacing={6} align="flex-start">
          {/* Small Thumbnail Image - Clickable */}
          <Box flexShrink={0}>
            <Image
              src={project.image}
              alt={project.title}
              width="160px"
              height="120px"
              objectFit="cover"
              borderRadius="md"
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.05)', cursor: 'pointer' }}
              onClick={onOpen}
            />
          </Box>

          {/* Project Text Content */}
          <Box flex="1" minW="0">
            {/* Project Title */}
            <Heading
              as="h3"
              fontSize="lg"
              mb={3}
              lineHeight="1.4"
              color={headingColor}
              fontWeight="semibold"
            >
              <Link
                href={project.project_page || '#'}
                isExternal
                _hover={{ textDecoration: 'underline' }}
              >
                {project.title}
              </Link>
            </Heading>

            {/* Description */}
            <Text fontSize="md" color={textColor} lineHeight="1.5" mb={3}>
              {project.description}
            </Text>

            {/* Action Links */}
            <HStack spacing={4} mb={2}>
              {project.git_link && (
                <Link
                  href={project.git_link}
                  isExternal
                  color={linkColor}
                  fontSize="sm"
                  fontWeight="medium"
                  textTransform="uppercase"
                  _hover={{ textDecoration: 'underline' }}
                >
                  💻 Code
                </Link>
              )}
              {project.project_page &&
                project.project_page !== project.git_link && (
                  <Link
                    href={project.project_page}
                    isExternal
                    color={linkColor}
                    fontSize="sm"
                    fontWeight="medium"
                    textTransform="uppercase"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    🔗 Project
                  </Link>
                )}
            </HStack>

            {/* Tags */}
            {project.tags && (
              <Text
                fontSize="sm"
                color={mutedColor}
                fontStyle="italic"
                lineHeight="1.4"
              >
                {project.tags.join(' • ')}
              </Text>
            )}
          </Box>
        </HStack>

        {/* Image Modal */}
        <ImageModal
          isOpen={isOpen}
          onClose={onClose}
          imageUrl={project.image}
          alt={project.title}
        />
      </Box>
    </Section>
  )
}

// Function to generate project components
const generateProjectItems = data => {
  return data.map((project, index) => (
    <ProjectItem key={index} project={project} index={index} />
  ))
}

// Projects Page Component
const Projects = () => {
  const titleColor = useColorModeValue('gray.800', 'white')

  return (
    <Layout title="Projects">
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
            Projects
          </Heading>
        </Section>

        {/* Render Projects - Clean List */}
        <Box maxW="800px" mx="auto">
          {generateProjectItems(projectsData)}
        </Box>
      </Container>
    </Layout>
  )
}

export default Projects
export { getServerSideProps } from '../components/chakra'
