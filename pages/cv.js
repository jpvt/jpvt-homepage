import { Container, Heading, SimpleGrid, Divider, Text, Box, Flex, HStack, Link, IconButton, useColorModeValue} from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { mode } from '@chakra-ui/theme-tools'




const CV = () => (
  <Layout title="Curriculum Vitae">
    <Container maxW="container.md" py={10}>
      {/* Name and Contact Section */}
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="2xl" fontWeight="bold" mb={4}>
          João Teixeira
        </Heading>
        <Text fontSize="lg" color={useColorModeValue('green.600', 'gray.100')}>
          Software Engineer
        </Text>
        <Text fontSize="md" color="#2d7e55" mt={2}>
        <Link href="mailto:jpvteixeira99@gmail.com" target="_blank">
            <IconButton
              aria-label="Email"
              icon={<IoMail />}
              variant="ghost"
              colorScheme="#2d7e55"
              fontSize="2xl" // Increase font size for larger icon
            />
            jpvteixeira99@gmail.com
          </Link>{' '} 
          | 
          <Link href="https://www.linkedin.com/in/jpvt/" target="_blank">
            <IconButton
              aria-label="LinkedIn"
              icon={<IoLogoLinkedin />}
              variant="ghost"
              colorScheme="#2d7e55"
              fontSize="2xl" // Increase font size for larger icon
            />
            in/jpvt
          </Link>{' '}  
          | 
          <Link href="https://github.com/jpvt" target="_blank">
            <IconButton
              aria-label="Github"
              icon={<IoLogoGithub />}
              variant="ghost"
              colorScheme="#2d7e55"
              fontSize="2xl" // Increase font size for larger icon
            />
            jpvt
          </Link>
        </Text>
      </Box>

      <Divider my={8} />

      {/* Education Section */}
      <Section delay={0.4}>
        <Heading as="h3" fontSize={24} mb={4}>
          Education
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} spacing={6}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
            Federal University of Paraíba, Brazil
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.600', 'gray.100')}>
            BSc in Computer Engineering
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
            2018 - 2023
            </Text>
          </Box>
        </SimpleGrid>
      </Section>

      <Divider my={8} />

      {/* Publications Section */}
      <Section delay={0.2}>
        <Heading as="h3" fontSize={24} mb={4}>
          Publications
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} spacing={6}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              7. Multiclass Segmentation of Breast Tissue and Suspicious Findings: A Simulation-Based Study for the Development of Self-Steering Tomosynthesis
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.600', 'gray.100')}>
              Bruno Barufaldi, Yann Nobrega, Giulia Carvalhal, <b><u>João P. V. Teixeira</u></b>, Thais G. do Rego, Yuri Malheiros, Telmo Filho, Raymond J. Acciavatti, Andrew D. A. Maidment
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              Tomography 9, no. 3: 1120-1132, 2023
            </Text>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold">
              6. Interactive breast lesion designer for virtual trials based on Perlin noise
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.600', 'gray.100')}>
              Magnus Dustler, Hanna Tomic, Anna Bjerken, Anders Tingberg, Pontus Timberg, Sophia Zackrisson, Arthur Chaves Costa, <b><u>João P. V. Teixeira</u></b>, Bruno Barufaldi, Predrag R. Bakic
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              Live Demonstrations Workshop, SPIE Medical Imaging, 2023, San Diego, California, United States
            </Text>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold">
              5. Spatial dependency of lesion detectability in digital breast tomosynthesis
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.600', 'gray.100')}>
              Chloe J. Choi, Bruno Barufaldi, <b><u>João P. V. Teixeira</u></b>, Raymond J. Acciavatti, Andrew D. A. Maidment
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              16th International Workshop on Breast Imaging (IWBI2022), 2022
            </Text>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold">
              4. Multiclass segmentation of suspicious findings in simulated breast tomosynthesis images using a U-Net
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.600', 'gray.100')}>
              Yann Nobrega, Giulia Carvalhal, <b><u>João P. V. Teixeira</u></b>, Barbara Camargo, Thais G. do Rego, Yuri Malheiros, Telmo Filho, Trevor Vent, Raymond J. Acciavatti, Andrew D. A. Maidment, Bruno Barufaldi
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              16th International Workshop on Breast Imaging (IWBI2022), 2022
            </Text>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold">
              3. Novel Perlin-based phantoms using 3D models of compressed breast shapes and fractal noise
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.600', 'gray.100')}>
              <b><u>João P. V. Teixeira</u></b>, Telmo Filho, Thais G. do Rego, Yuri Malheiros, Magnus Dustler, Predrag R. Bakic, Trevor Vent, Raymond J. Acciavatti, Srilalan Krishnamoorthy, Suleman Surti, Andrew D. A. Maidment, Bruno Barufaldi
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              SPIE Medical Imaging, 2022, San Diego, California, United States
            </Text>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold">
              2. Iris-CV: Classifying Iris Flowers Is Not as Easy as You Thought
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.600', 'gray.100')}>
              Itamar Filho, <b><u>João P. V. Teixeira</u></b>, João W. L. Lins, Felipe Sousa, Ana Sousa, Manuel F. Junior, Thaís Ramos, Cecília Silva, Thais G. do Rego, Yuri Malheiros, Telmo Filho
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              BRACIS 2021
            </Text>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold">
              1. An Approach for Automatic Description of Characters for Blind People
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.600', 'gray.100')}>
              Itamar Filho, Felipe Sousa, João W. L. Lins, <b><u>João P. V. Teixeira</u></b>, Tiago Maritan
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              WebMedia '21: Proceedings of the Brazilian Symposium on Multimedia and the Web, 2021
            </Text>
          </Box>
        </SimpleGrid>
      </Section>

      <Divider my={8} />

      {/* Industry Experience Section */}
      <Section delay={0.3}>
        <Heading as="h3" fontSize={24} mb={4}>
          Industry Experience
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} spacing={6}>
          {/* Microsoft */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Microsoft
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.800', 'gray.100')}>
              Software Engineer, Vancouver, Canada
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              January 2024 – Present
            </Text>
            <Text fontSize="md" mt={2}>
              Developing machine learning solutions for the Azure Kubernetes Service Infrastructure team.
            </Text>
          </Box>

          {/* Rei do Pitaco */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              <Link href="https://www.reidopitaco.com.br/" isExternal>
                Rei do Pitaco
              </Link>
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.800', 'gray.100')}>
              Software Engineering Intern, Remote
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              May 2022 – November 2022
            </Text>
            <Text fontSize="md" mt={2}>
              Rei do Pitaco is the first trustworthy Brazilian Daily Fantasy Sports mobile app and recently raised Series A.
            </Text>
            <Text fontSize="md" mt={2}>
              Worked in the Data Platform team, building data extraction pipelines using Apache Airflow.
            </Text>
          </Box>

          {/* Amazon */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Amazon
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.800', 'gray.100')}>
              Software Development Engineer Intern, Remote
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              October 2021 – May 2022
            </Text>
            <Text fontSize="md" mt={2}>
              Collaborated on the Fulfillment by Amazon Organization on a team focused on Tax Services.
            </Text>
            <Text fontSize="md" mt={2}>
              Created dashboards to monitor the SLAs from the team's microservices.
            </Text>
          </Box>

          {/* Aplicativos de Bolso */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              <Link href="https://blog.oabdebolso.com/" isExternal>
                Aplicativos de Bolso
              </Link>
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.800', 'gray.100')}>
              Data Science Intern, Remote
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              March 2021 – September 2021
            </Text>
            <Text fontSize="md" mt={2}>
              Designed and implemented a new Deep Learning-based recommender system that assists Law Students in studying for the OAB Examination (Brazilian Bar Examination).
            </Text>
            <Text fontSize="md" mt={2}>
              Developed a microservice using PyTorch, GRPC Python, and SQLModel to recommend questions to the users according to their performance on the application's simulations.
            </Text>
          </Box>

          {/* Atoptima and UFPB */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              <Link href="https://atoptima.com/" isExternal>
                Atoptima
              </Link> and UFPB
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.800', 'gray.100')}>
              Combinatorial Optimization Developer, Remote
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              November 2020 – April 2021
            </Text>
            <Text fontSize="md" mt={2}>
              Contributed to the development of Camina, an Open-source Vehicle Routing Problem Solver in Julia Language.
            </Text>
            <Text fontSize="md" mt={2}>
              Developed heuristics and new features that improved Camina's time performance and reduced computational cost to be equivalent to C/C++ solvers, such as VRPSolver.
            </Text>
          </Box>

          {/* ARIA Lab - UFPB */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              <Link href="https://aria.ci.ufpb.br/en/" isExternal>
                ARIA Lab - UFPB
              </Link>
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.800', 'gray.100')}>
              Data Engineering Intern, João Pessoa, PB, Brazil
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              April 2020 – September 2021
            </Text>
            <Text fontSize="md" mt={2}>
              Upgraded the data infrastructure of the Department of Finance of the State of Paraíba and developed a tool that uses artificial intelligence to detect tax fraud.
            </Text>
            <Text fontSize="md" mt={2}>
              Maintained the data lake by building data loaders, creating new tables, managing user groups, and setting permissions. Anonymized sensitive data using PostgreSQL Anonymizer.
            </Text>
          </Box>

          {/* LAVID - UFPB */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              <Link href="http://lavid.ufpb.br/" isExternal>
                LAVID - UFPB
              </Link>
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.800', 'gray.100')}>
              Software Engineering Intern, João Pessoa, PB, Brazil
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              September 2019 – December 2019
            </Text>
            <Text fontSize="md" mt={2}>
              Collaborated on the development of a Distributed Collaborative Video Surveillance System for the Federal University of Paraíba.
            </Text>
            <Text fontSize="md" mt={2}>
              Built an Event-Driven Logging for the distributed system using Apache Kafka and explored methods to detect anomalous events in videos.
            </Text>
          </Box>
        </SimpleGrid>
      </Section>

      <Divider my={8} />

      {/* Research Experience Section */}
      <Section delay={0.3}>
        <Heading as="h3" fontSize={24} mb={4}>
          Research Experience
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} spacing={6}>

          {/* Summer Geometry Initiative (SGI) @ MIT */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              <Link href="https://sgi.mit.edu/" isExternal>
                Summer Geometry Initiative (SGI) @ MIT
              </Link>
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.800', 'gray.100')}>
              SGI Fellow, Remote
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              Summer 2023
            </Text>
            <Text fontSize="md" mt={2}>
              Summer program that introduces students to research in Geometry Processing through projects:
            </Text>
            <Text fontSize="md" mt={2} pl={4}>
              <b><Link href="https://summergeometry.org/sgi2023/hybrid-neural-and-grid-representations/" isExternal>The (in)accurate Gradients of Neural Representations</Link></b>: Mentored by <Link href="https://peterchencyc.com/" isExternal>Peter Yichen Chen (MIT)</Link>, explored different methods to smooth the noisy gradients of Implicit Neural Spatial Representations for Time-dependent PDEs.
            </Text>
            <Text fontSize="md" mt={2} pl={4}>
              <b><Link href="https://github.com/SGI-2023/sampling-surfaces" isExternal>Sampling Surfaces from Point Clouds</Link></b>: Mentored by <Link href="https://www.silviasellan.com/" isExternal>Silvia Sellán (University of Toronto)</Link> and <Link href="https://anadodik.github.io/" isExternal>Ana Dodik (MIT)</Link>, implemented Gaussian and Neural Processes to predict a distribution of possible surfaces of a given Point Cloud.
            </Text>
            <Text fontSize="md" mt={2} pl={4}>
              <b><Link href="https://summergeometry.org/sgi2023/exvivo-surface-mesh-reconstruction-from-in-vivo-freesurfer-meshes/" isExternal>Exvivo Surface Mesh Reconstruction from In-vivo FreeSurfer Meshes</Link></b>: Mentored by <Link href="https://sites.google.com/site/karthikharitz/" isExternal>Karthik Gopinath (Harvard Medical School/Massachusetts General Hospital)</Link>, translated in-vivo MRI FreeSurfer meshes into ex-vivo meshes using a surface-based approach to close the deep sulci of the brain.
            </Text>
          </Box>

          {/* X-ray Physics Lab (XPL), UPenn and ARIA Lab, UFPB */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              <Link href="https://www.imagephysics.com/" isExternal>X-ray Physics Lab (XPL), UPenn</Link> and <Link href="https://aria.ci.ufpb.br/en/" isExternal>ARIA Lab, UFPB</Link>
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.800', 'gray.100')}>
              Undergraduate Research Assistant, Remote
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              June 2021 – October 2023
            </Text>
            <Text fontSize="md" mt={2}>
              Contributed to the development of methods for generating realistic simulations (phantoms) of breast anatomy, enhancing the efficiency and realism of the simulations:
            </Text>
            <Text fontSize="md" mt={2} pl={4}>
              Introduced a Perlin noise-based pipeline, reducing the average generation time of small/medium-sized phantoms from hours to minutes.
            </Text>
            <Text fontSize="md" mt={2} pl={4}>
              Developed a Simplex noise-based pipeline, further improving generation time from minutes to seconds for smaller phantoms and from days to hours for large phantoms.
            </Text>
            <Text fontSize="md" mt={2}>
              Engineered deep learning models for the segmentation of breast tissue and identification of suspicious findings, contributing to the advancement of diagnostic accuracy.
            </Text>
            <Text fontSize="md" mt={2}>
              Currently developing diffusion models to generate phantoms, aiming to further enhance the realism and applicability of the simulations in clinical trials.
            </Text>
          </Box>

        </SimpleGrid>
      </Section>

      <Divider my={8} />

      {/* Leadership / Extracurricular Experience Section */}
      <Section delay={0.4}>
        <Heading as="h3" fontSize={24} mb={4}>
          Leadership / Extracurricular Experience
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} spacing={6}>

          {/* Technology and Artificial Intelligence League (TAIL) */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              <Link href="https://aria.ci.ufpb.br/tail/" isExternal>
                Technology and Artificial Intelligence League (TAIL)
              </Link>
            </Text>
            <Text fontSize="md" color={useColorModeValue('green.800', 'gray.100')}>
              Co-Founder and Advisor, Federal University of Paraíba
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')}>
              August 2020 – Present
            </Text>
            <Text fontSize="md" mt={2}>
              TAIL is a non-profit organization oriented by the ARIA LAB professors.
            </Text>
            <Text fontSize="md" mt={2}>
              The academic league aims to teach new students, produce content, contribute to AI and Data Analysis fields, and help the members achieve their goals (internships, graduation programs, full-time jobs).
            </Text>
            <Text fontSize="md" mt={2}>
              Since its creation, TAIL has had over 500 applicants, 130+ members, and 25+ projects developed. It has already helped over 50 students obtain internships and has 60+ active members today.
            </Text>
          </Box>

        </SimpleGrid>
      </Section>

      <Divider my={8} />

      {/* Honors and Awards Section */}
      <Section delay={0.4}>
        <Heading as="h3" fontSize={24} mb={4}>
          Honors and Awards
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} spacing={6}>

          {/* Estudar Foundation Tech Fellowship */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              <Link href="https://www.estudar.org.br/" isExternal>
                Estudar Foundation Tech Fellowship
              </Link>
            </Text>
            <Text fontSize="sm" color={useColorModeValue('green.700', 'green.400')} mb={2}>
              2022
            </Text>
            <Text fontSize="md" mt={2}>
              This process selects students who will lead Brazil's technological revolutions. It is a merit-based scholarship for outstanding trajectory and academic potential.
            </Text>
            <Text fontSize="md" mt={2}>
              Includes a grant to pursue studies (~ $10,000 USD), mentorship, and career support.
            </Text>
            <Text fontSize="md" mt={2}>
              One of 0.6% approved over 4,285 applications in 2022.
            </Text>
          </Box>

        </SimpleGrid>
      </Section>


    </Container>
  </Layout>
);

export default CV;
export { getServerSideProps } from '../components/chakra';
