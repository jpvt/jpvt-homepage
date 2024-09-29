import { Container, Heading, SimpleGrid, Box, Text, Link, Image, Divider, Stack, HStack, Badge, useColorModeValue } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';

const publicationsData = [
  {
    title: "Multiclass Segmentation of Breast Tissue and Suspicious Findings: A Simulation-Based Study for the Development of Self-Steering Tomosynthesis",
    authors: ["Bruno Barufaldi", "Yann Nobrega", "Giulia Carvalhal", "João P. V. Teixeira", "Thais G. do Rego", "Yuri Malheiros", "Telmo Filho", "Raymond J. Acciavatti", "Andrew D. A. Maidment"],
    conference: "Tomography 9, no. 3: 1120-1132",
    year: 2023,
    image: "/images/publications/tomography_j.png",
    links: { DOI: "https://doi.org/10.3390/tomography9030092" }
  },
  {
    title: "Interactive breast lesion designer for virtual trials based on Perlin noise",
    authors: ["Magnus Dustler", "Hanna Tomic", "Anna Bjerken", "Anders Tingberg", "Pontus Timberg", "Sophia Zackrisson", "Arthur Chaves Costa", "João P. V. Teixeira", "Bruno Barufaldi", "Predrag R. Bakic"],
    conference: "Live Demonstrations Workshop, SPIE Medical Imaging, 2023, San Diego, California, United States",
    year: 2023,
    image: "/images/publications/live_demo.png",
    links: { "🏆 Best Live Demo": "demo_award.pdf" }
  },
  {
    title: "Spatial dependency of lesion detectability in digital breast tomosynthesis",
    authors: ["Chloe J. Choi", "Bruno Barufaldi", "João P. V. Teixeira", "Raymond J. Acciavatti", "Andrew D. A. Maidment"],
    conference: "16th International Workshop on Breast Imaging (IWBI2022)",
    year: 2022,
    image: "/images/publications/choi_iwbi.png",
    links: { DOI: "https://doi.org/10.1117/12.2626272" }
  },
  {
    title: "Multiclass segmentation of suspicious findings in simulated breast tomosynthesis images using a U-Net",
    authors: ["Yann Nobrega", "Giulia Carvalhal", "João P. V. Teixeira", "Barbara Camargo", "Thais G. do Rego", "Yuri Malheiros", "Telmo Filho", "Trevor Vent", "Raymond J. Acciavatti", "Andrew D. A. Maidment", "Bruno Barufaldi"],
    conference: "16th International Workshop on Breast Imaging (IWBI2022)",
    year: 2022,
    image: "/images/publications/nobrega_carvalhal_iwbi.png",
    links: { "🏆 Top Scorer": "", DOI: "https://doi.org/10.1117/12.2626225" }
  },
  {
    title: "Novel Perlin-based phantoms using 3D models of compressed breast shapes and fractal noise",
    authors: ["João P. V. Teixeira", "Telmo Filho", "Thais G. do Rego", "Yuri Malheiros", "Magnus Dustler", "Predrag R. Bakic", "Trevor Vent", "Raymond J. Acciavatti", "Srilalan Krishnamoorthy", "Suleman Surti", "Andrew D. A. Maidment", "Bruno Barufaldi"],
    conference: "SPIE Medical Imaging, 2022, San Diego, California, United States",
    year: 2022,
    image: "/images/publications/teixeira_spie.png",
    links: { DOI: "https://doi.org/10.1117/12.2612565" }
  },
  {
    title: "Iris-CV: Classifying Iris Flowers Is Not as Easy as You Thought",
    authors: ["Itamar Filho", "João P. V. Teixeira", "João W. L. Lins", "Felipe Sousa", "Ana Sousa", "Manuel F. Junior", "Thaís Ramos", "Cecília Silva", "Thais G. do Rego", "Yuri Malheiros", "Telmo Filho"],
    conference: "BRACIS 2021",
    year: 2021,
    image: "/images/publications/rocha_bracis.png",
    links: { DOI: "https://doi.org/10.1007/978-3-030-91699-2_18" }
  },
  {
    title: "An Approach for Automatic Description of Characters for Blind People",
    authors: ["Itamar Filho", "Felipe Sousa", "João W. L. Lins", "João P. V. Teixeira", "Tiago Maritan"],
    conference: "WebMedia '21: Proceedings of the Brazilian Symposium on Multimedia and the Web",
    year: 2021,
    image: "/images/publications/rocha_webmedia.png",
    links: { DOI: "https://doi.org/10.1145/3470482.3479617" }
  }
];

// Function to generate publication components
const generatePublicationItems = (data) => {
  return data.map((publication, index) => (
    <Section key={index} delay={0.1 * index}>
      <Box border="1px" borderRadius="lg" overflow="hidden" borderColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)'}} p={4}>
        <Stack direction={{ base: 'column', md: 'row' }} align="center" spacing={4}>
          {/* Publication Image */}
          <Image
            src={publication.image}
            alt={publication.title}
            width={{ base: '100px', md: '150px' }}
            height={{ base: '100px', md: '150px' }}
            borderRadius="md"
            objectFit="cover"
            mr={4}
          />
          {/* Publication Details */}
          <Box>
            <Heading as="h4" size="md" mb={2}>
              <Link href={publication.links.DOI || "#"} isExternal>{publication.title}</Link>
            </Heading>
            <Text fontSize="sm" color={useColorModeValue('green.600', 'gray.100')}>
              {publication.authors.join(", ")}
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              {publication.conference}, {publication.year}
            </Text>
            {/* Optional Badges for awards or additional links */}
            {publication.links && (
              <HStack mt={2} spacing={2}>
                {Object.entries(publication.links).map(([key, link]) => (
                  key !== 'DOI' && (
                    <Badge key={key} colorScheme="green">
                      {key}
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

// Publications Page Component
const Publications = () => (
  <Layout title="Publications">
    <Container maxW="container.lg" py={10}>
      {/* Page Title */}
      <Section delay={0.1}>
        <Heading as="h1" fontSize={36} textAlign="center" mb={8}>
          Publications
        </Heading>
      </Section>
      
      {/* Render Publications */}
      <SimpleGrid columns={[1, 1, 1]} spacing={8}>
        {generatePublicationItems(publicationsData)}
      </SimpleGrid>

      {/* Footer Divider */}
      <Divider my={10} />
    </Container>
  </Layout>
);

export default Publications;
export { getServerSideProps } from '../components/chakra';
