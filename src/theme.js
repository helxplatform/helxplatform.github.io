import { createTheme } from '@mui/material/styles'

const branding = {
  scienceGreen: '#44BC9C',
  offWhite: '#F5F6F5',
  deepPurple: '#392D57',
  darkGranite: '#212121',
  earthBlue: '#37698B',
  dataGreen: '#239BA6',
  yellow: '#FDB614',
  lightGrey: '#555555'
}

const palette = {
  primary: {
    main: branding.darkGranite,
  },
  secondary: {
    main: branding.scienceGreen
  },
  info: {
    main: branding.yellow
  },
  branding: branding,
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
    fontWeight: 700,
    marginBottom: '2rem',
    lineHeight: 1.5,
  },
  h3: {
    fontSize: 'clamp(1.4rem, 1.4rem + 1.6667vw, 1.8rem)',
    marginBottom: '1rem',
    fontWeight: 600,
    letterSpacing: '0.6px',
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
    fontSize: '1.1rem',
    lineHeight: 1.5,
    fontWeight: 400,
  },
  body2: {
    fontFamily: 'Montserrat',
    fontSize: '1.2rem',
    lineHeight: 1.5,
    letterSpacing: '0.8px',
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: '1.2rem',
    lineHeight: 1.5,
    letterSpacing: '0.8px',
    fontWeight: 400,
  },
  subtitle2: {
    fontWeight: 400,
    letterSpacing: '0.6px',
    fontSize: '0.9rem',
  },
}



export const theme = createTheme({
  palette,
  typography
})