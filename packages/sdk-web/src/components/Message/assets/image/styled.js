import styled from 'styled-components'

export const StyledContainer = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.primaryLight};
  border-radius: 15px;  
`

export const StyledImage = styled.img`
  width: calc(100vw - ${({ theme }) => theme.contentPadding} - ${({ theme }) => theme.contentPadding });
  vertical-align: middle;
  height: auto;
`
