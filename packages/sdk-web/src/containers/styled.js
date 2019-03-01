import styled from 'styled-components'

export const StyledContent = styled.div`
  position: absolute;
  background: white;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0,0,0);
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  &  > * {
    -webkit-transform: translateZ(0px);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0,0,0);
  }
`