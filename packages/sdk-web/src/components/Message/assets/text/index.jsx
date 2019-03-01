import { h, Component } from 'preact';
import { StyledContainer } from './styled'
import parse from 'html-react-parser';

export default class Text extends Component {
  render({ message }) {
    return (
      <StyledContainer message={message}>
        {parse(message.text)}
      </StyledContainer>
    )
  }
}
