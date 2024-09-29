import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#D5DAD5', '#00000')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#2d7e55",
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#2d7e55', '#2d7e55')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#2d7e55'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const cvColors = props => {
  text: mode('gray.100', 'green.600')(props)
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
