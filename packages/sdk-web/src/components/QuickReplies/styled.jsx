import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
   .carousel {
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 10px 50px;
    display: inline-block;
    white-space: nowrap;
    margin-bottom:0.1em;

    &::-webkit-scrollbar {
      display:none;

    }

    &::-webkit-scrollbar-thumb {
      display:none;
    }
  }
`


