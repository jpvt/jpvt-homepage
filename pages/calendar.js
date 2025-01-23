import {
  Container,
  Heading,
  Text,
  Box,
  Link,
  Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Calendar = () => (
  <Layout title="Calendar">
    <Container maxW="container.md" py={10}>
      <Section>
        <Heading as="h2" mb={4}>
          Schedule a Meeting
        </Heading>
        <Text mb={4}>
        I allocated some 1:1 time slots for anyone interested in discussing career paths, research projects,
        or simply connecting over a virtual coffee chat. Feel free to book a slot that works for you :)
        </Text>
        <Box overflow="hidden" borderRadius="md" mb={6}>
          {/* Replace the src with your own Google Calendar embed link */}
          <iframe
            src="https://calendar.google.com/calendar/embed?src=jpvteixeira99%40gmail.com&ctz=America%2FVancouver&mode=week"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </Box>
        <Link href="https://calendar.app.google/M2CLWruHdu2vyD7m6" isExternal>
          <Button colorScheme="green" mb={4}>
            Book an Appointment
          </Button>
        </Link>
      </Section>
    </Container>
  </Layout>
)

export default Calendar
export { getServerSideProps } from '../components/chakra'
