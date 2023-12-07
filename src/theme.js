import { createTheme } from '@mui/material/styles'

const branding = {
  scienceGreen: '#44BC9C',
  offWhite: '#F5F6F5',
  deepPurple: '#392D57',
  darkGranite: '#212121',
  earthBlue: '#37698B',
  dataGreen: '#239BA6',
  yellow: '#FDB614',
  lightGrey: '#BFBFBF',
  coyoteBrown: '#7C6354',
  frenchGrey: '#C8BFC7',
  fuchsiaRose: '#C94277',
  thistle: '#DBC2CF',
  bittersweet: '#FF785A'
}

const palette = {
  primary: {
    main: branding.deepPurple,
  },
  secondary: {
    main: branding.yellow,
    light: '#FDDB8D'
  },
  info: {
    main: branding.scienceGreen
  },
  branding: branding,
  text: {
    primary: branding.deepPurple,
    secondary: branding.scienceGreen,
    disabled: branding.coyoteBrown
  },
}

const typography = {
  fontFamily: ['"Open Sans"', 'sans-serif'].join(','),
  h1: {
    fontSize: 'clamp(3rem, 2rem + 1.6667vw, 3.5rem)',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    marginBottom: '2rem',
    lineHeight: '1.2',
  },
  h2: {
    fontSize: 'clamp(2rem, 2rem + 1.6667vw, 2.5rem)',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    marginBottom: '2rem',
    lineHeight: 1.5,
  },
  h3: {
    fontSize: 'clamp(1.4rem, 1.4rem + 1.6667vw, 1.8rem)',
    marginBottom: '1rem',
    fontWeight: 600,
    lineHeight: 1.35,
  },
  h4: {
    fontSize: 'clamp(1.1rem, 0.8000rem + 1.3333vw, 1.5rem)',
    margin: '0.5rem 0',
    },
  h6: {
    fontSize: '1.2rem',
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
    fontWeight: 400,
  },
  body2: {
    fontSize: '1.2rem',
    lineHeight: 1.5,
    letterSpacing: '0.5px',
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: '1.2rem',
    lineHeight: 1.5,
    fontWeight: 400,
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: '0.9rem',
  },
}



export const theme = createTheme({
  palette,
  typography
})