import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Joao Teixeira. Adapted from <Link href="https://github.com/craftzdog/craftzdog-homepage" target="_blank">Takuya Matsuyama</Link>.
    </Box>
  )
}

export default Footer
