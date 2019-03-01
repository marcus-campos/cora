import styled from 'styled-components'

export const StyledContainer = styled.div`
  padding: 5px 10px;
  vertical-align: middle;
  font-size: 1.6em;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.primaryLight};
  background: ${({ message, theme }) => message.source === "sended" ? theme.primary : '#FFF'};
  color: ${({ message, theme }) => message.source === "sended" ? '#FFF' : '#000'};
`

