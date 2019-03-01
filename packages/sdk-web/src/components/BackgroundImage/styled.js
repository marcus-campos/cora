import styled from 'styled-components'

export const StyledBackgroundImage = styled.div`
  width: 100%;
  color: #FFF;
  height: calc( calc(100vw - ${({ theme }) => theme.contentPadding}) / 2);
  position: relative;
  background-color: ${({ theme }) => theme.primaryLight};
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.url});
`