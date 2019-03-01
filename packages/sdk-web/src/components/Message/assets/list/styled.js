import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: calc(100vw - ${({ theme }) => theme.contentPadding} - ${({ theme }) => theme.contentPadding});
  background: #fff;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.primaryLight};
  border-radius: 15px;  
`

export const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
`

export const StyledLargeContent = styled.div`
  position: absolute;
  bottom: 0;
`

export const StyledElement = styled.div`
  display: flex;
  flex-direction: row;
  .content{
    flex-grow: 1;
  }

  .image{
    width: 60px;
    height: 60px;
    background: #eaeaea;
    background-size: cover;
    background-position: center center;
  }
`

export const StyledDivider = styled.div`
  margin: 0px 16px;
  height: 1px;
  background: ${({ theme }) => theme.primaryLight};
`
