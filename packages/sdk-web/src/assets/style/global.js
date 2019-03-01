import { injectGlobal } from 'styled-components'
import gutterSpacer from './gutter-spacer'

export default injectGlobal`

  body {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  button,form, input{
    font-family: 'Open Sans', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  .hidden {
    display: none !important;
  }

  .visible {
    display: block !important;
  }

  .pos-relative {
    position: relative;
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }

  .text-center {
    text-align: center;
  }

  .text-center-right {
    text-align: right;
  }

  .invisible {
    visibility: hidden !important;
  }

  ${gutterSpacer};


  a, a:visited, a:hover, a:active {
    color: inherit;
    outline: none;
    text-decoration: none;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`
