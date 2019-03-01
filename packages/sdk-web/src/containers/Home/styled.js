import styled from 'styled-components'

export const StyledHome = styled.div`
  height: 100%;
  width: 100%;
`

export const StyledTyping = styled.div`
  font-size: 16px;
  position: -webkit-sticky;
  position: sticky;
  padding: 14px 22px;
  color: grey;
  top: 100%;
`

export const StyledContent = styled.div`
  position: absolute;
  background: white;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0,0,0);
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  &  > * {
    -webkit-transform: translateZ(0px);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0,0,0);
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary}; 
    border-radius: 10px;
  }
`

export const StyledAnchor = styled.div`
  height: 10px;
	width: 100%;
`