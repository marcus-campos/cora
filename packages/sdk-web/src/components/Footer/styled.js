import styled from 'styled-components'
import { IconSend } from 'assets/icons'

export const StyledIconSend = styled(IconSend).attrs({
  fill: (props) => props.theme.primary
}) ``

export const StyledContainer = styled.div`
  display: flex;
  padding-left: 16px;
  align-items: center;
  margin: 5px;
  .button{
    height: 50px;
    width: 50px;
    padding-top:5px;
  }
`

export const StyledFooter = styled.div`
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export const StyledDivider = styled.div`
  margin: 0px 20px;
  height: 1px;
  opacity: 0.4;
  background: #9b9b9b
`

export const StyledMessageInput = styled.input`
  background: transparent;
  border:none;
  border-bottom: 1px solid #fff;
  height: 30px;
  flex-grow: 1;
  color: #9b9b9b;
  outline: none;

  ::-webkit-input-placeholder {
    color: rgba(115, 115, 115, 0.6)
  }
  ::-moz-placeholder {
    color: rgba(115, 115, 115, 0.6)
  }
  :-ms-input-placeholder {
    color: rgba(115, 115, 115, 0.6)
  }
  :-moz-placeholder {
    color: rgba(115, 115, 115, 0.6)
  }
`