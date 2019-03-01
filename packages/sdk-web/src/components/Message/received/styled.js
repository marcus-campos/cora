import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 30px;
  margin: 10px 0px;
  padding: 0px ${ ({ theme }) => theme.contentPadding};
`
export const StyledAvatar = styled.div`
  width: 30px;
  height: 30px;
  background: ${ ({ theme }) => theme.primary};
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 10px;
`
export const StyledMessage = styled.div`
  margin: 0px 35px;
  min-height: 30px;
  flex-grow: 1;
  display: flex;
`
