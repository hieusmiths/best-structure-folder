import { createGlobalStyle } from 'styled-components'

const ThemeGlobalV1 = createGlobalStyle`
  body {    
    font-family: 'ProximaNovaSoftW03-Bold', 'proxima-soft', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    z-index: 0;
    font-size: 16px;
    line-height: 1.5;
    color: #2d3436;
    -webkit-font-smoothing: antialiased;
    padding: 0px;
    overflow-x: hidden;
    min-width: 320px;
    background: #FFFFFF;
    line-height: 1.5;
  }
`

const themeV1 = {
  color: {
    main: '#fc6514',
    second: '#b2bec3',
    black: '#2d3436',
    red: '#d63031',
    blue: '#0984e3',
    grey300: '#dfe6e9',
    grey500: '#636e72'
  },
  fontSize: {

  }
}

export {
    themeV1,
    ThemeGlobalV1
}