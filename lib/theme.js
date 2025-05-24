import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f4f1ea', '#1a1b1e')(props)
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
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#2c7a7b', '#81e6d9')(props),
      textUnderlineOffset: 3
    })
  },
  Button: {
    variants: {
      'ghost': props => ({
        color: mode('#2c7a7b', '#81e6d9')(props),
        _hover: {
          bg: mode('#e6fffa', '#1D4044')(props)
        }
      }),
      'solid': props => ({
        bg: mode('#2c7a7b', '#81e6d9')(props),
        color: mode('white', '#1a1b1e')(props),
        _hover: {
          bg: mode('#285e61', '#4fd1c5')(props)
        }
      })
    }
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  primary: {
    50: '#e6fffa',
    100: '#b2f5ea',
    200: '#81e6d9',
    300: '#4fd1c5',
    400: '#38b2ac',
    500: '#2c7a7b',
    600: '#285e61',
    700: '#234e52',
    800: '#1D4044',
    900: '#1a1b1e',
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
