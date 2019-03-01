import { h, Component } from 'preact'
import { renderMessage } from '../assets'
import { StyledContainer, StyledMessage, StyledAvatar } from './styled'

export default class Received extends Component {
  render({ message }) {
    return (
      <StyledContainer>
        {message.last && <StyledAvatar />}
        {renderMessage(message)}
      </StyledContainer>
    )
  }
}
