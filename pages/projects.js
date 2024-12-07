import { Container, Heading, SimpleGrid, Box, Text, Link, Image, Divider, Stack, HStack, Badge, useColorModeValue } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';

const projectsData = [
  {
    title: "Exvivo surface mesh reconstruction from in-vivo FreeSurfer meshes",
    image: "/images/publications/closing.gif",
    description: "This project translated in-vivo MRI FreeSurfer meshes into ex-vivo meshes \
    using a surface-based approach to close the deep sulci of the brain. The project was part of the Summer Geometry Institute 2023.",
    git_link: "https://github.com/SGI-2023/Invivo-Exvivo-2023",
    project_page: "https://summergeometry.org/sgi2023/exvivo-surface-mesh-reconstruction-from-in-vivo-freesurfer-meshes/",
    tags : ["Geometry Processing", "Medical Imaging", "Closing Surface"],
  },
  {
    title: "Sampling Surfaces from Point Clouds",
    image: "/images/publications/sampsurfs.png",
    description: "This project uses Gaussian and Neural Processes to predict \
    a distribution of possible surfaces of a given Point Cloud. The project was part of the \
    Summer Geometry Institute 2023.",
    git_link: "https://github.com/SGI-2023/sampling-surfaces",
    project_page: "https://github.com/SGI-2023/sampling-surfaces",
    tags : ["Geometry Processing", "Surface Reconstruction", "Gaussian Processes"],
  },
  {
    title: "The (in)accurate Gradients of Neural Representations",
    image: "/images/publications/INSR.png",
    description: "This project explored different methods to smooth the noisy gradients \
     of Implicit Neural Spatial Representations for Time-dependent PDEs. The project was part of the \
     Summer Geometry Institute 2023.",
    git_link: "https://github.com/SGI-2023/INSR-hybrid",
    project_page: "https://summergeometry.org/sgi2023/hybrid-neural-and-grid-representations/",
    tags : ["Physics Simulation", "Neural PDEs", "Geometry"],
  },
  {
    title: "LASER Autonomous SLAM",
    image: "/images/publications/robotics_proj.png",
    description: "This project aims to develop an exploration and mapping system for a \
    custom differential drive robot designed by LASER-Robotics Lab. The system uses the SLAM Toolbox \
    for simultaneous localization and mapping (SLAM), Nav2 for navigation, and Explore Lite \
    for autonomous exploration.",
    git_link: "https://github.com/jpvt/laser_autonomous_exploration",
    project_page: "https://github.com/jpvt/laser_autonomous_exploration",
    tags : ["Robotics", "SLAM", "ROS2"],
  },
  {
    title: "3D Noise Generator Dashboard",
    image: "/images/publications/noisegen_dashboard.png",
    description: "An interactive web-based dashboard for generating and visualizing \
    3D noise volumes using Streamlit. Customize noise parameters like noise type, volume size, \
    number of volumes, and more, then explore the generated volume slice by slice. \
    Export the volume as a TIFF file for further processing or analysis.",
    git_link: "https://github.com/jpvt/NoiseVolumesDemo",
    project_page: "https://github.com/jpvt/NoiseVolumesDemo",
    tags : ["Noise", "Streamlit", "Procedural Generation"],
  },
  {
    title: "GANdido Portinari",
    image: "/images/publications/retirantes.jpg",
    description: "In this project we trained a CycleGan to reproduce Candido's Portinari style \
    into photos of places and people.",
    git_link: "https://github.com/ItamarRocha/GANdido-Portinari",
    project_page: "https://github.com/ItamarRocha/GANdido-Portinari",
    tags : ["Gen AI", "CycleGAN", "Visual Arts"],
  },
  {
    title: "Denoising documents",
    image: "/images/publications/denoise.png",
    description: "In this project I've explored image processing methods that could fix the \
    text samples in documents images.",
    git_link: "https://github.com/jpvt/cv-test/blob/joaoteixeira/01-DocumentCleanup/DocumentCleanup.ipynb",
    project_page: "https://github.com/jpvt/cv-test/blob/joaoteixeira/01-DocumentCleanup/DocumentCleanup.ipynb",
    tags : ["Computer Vision", "Autoencoder", "Deep Learning"],
  },
];

// Function to generate project components
const generateProjectItems = (data) => {
  return data.map((project, index) => (
    <Section key={index} delay={0.1 * index}>
      <Box border="1px" borderRadius="lg" overflow="hidden" borderColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)'}} p={4}>
        <Stack direction={{ base: 'column', md: 'row' }} align="center" spacing={4}>
          {/* Project Image */}
          <Image
            src={project.image}
            alt={project.title}
            width={{ base: '100px', md: '150px' }}
            height={{ base: '100px', md: '150px' }}
            borderRadius="md"
            objectFit="cover"
            mr={4}
          />
          {/* Project Details */}
          <Box>
            <Heading as="h4" size="md" mb={2}>
              <Link href={project.project_page || "#"} isExternal>{project.title}</Link>
            </Heading>
            <Text fontSize="sm" color={useColorModeValue('green.600', 'gray.100')}>
              {project.description}
            </Text>
            {/* Optional Badges for tags or additional links */}
            {project.tags && (
              <HStack mt={2} spacing={2}>
                {Object.entries(project.tags).map(([idx, tag]) => (
                  (
                    <Badge key={tag} colorScheme="green">
                      {tag}
                    </Badge>
                  )
                ))}
              </HStack>
            )}
          </Box>
        </Stack>
      </Box>
    </Section>
  ));
};

// Projects Page Component
const Projects = () => (
  <Layout title="Projects">
    <Container maxW="container.lg" py={10}>
      {/* Page Title */}
      <Section delay={0.1}>
        <Heading as="h1" fontSize={36} textAlign="center" mb={8}>
        Projects
        </Heading>
      </Section>
      
      {/* Render Projects */}
      <SimpleGrid columns={[1, 1, 1]} spacing={8}>
        {generateProjectItems(projectsData)}
      </SimpleGrid>

      {/* Footer Divider */}
      <Divider my={10} />
    </Container>
  </Layout>
);

export default Projects;
export { getServerSideProps } from '../components/chakra';
