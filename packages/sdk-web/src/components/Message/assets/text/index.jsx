import { h, Component } from 'preact';
import { StyledContainer } from './styled'

export default class Text extends Component {
  render({ message }) {
    return (
      <StyledContainer message={message}>
        {message.text}
      </StyledContainer>
    )
  }
}
