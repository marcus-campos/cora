import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.primaryLight};
  background: ${({ message, theme }) => message.source === "sended" ? theme.primaryLight : '#fff'};
  color: ${({ message, theme }) => message.source === "sended" ? '#fff' : '#000'};
  overflow: hidden;
  .text{
    font-size: 1.6em
  }

  .divider{
    height: 1px;
    margin: 0px 15px;
    background: ${({ theme }) => theme.primaryLight };
  }
`

