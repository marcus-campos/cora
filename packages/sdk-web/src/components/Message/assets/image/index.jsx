import { h, Component } from 'preact';
import { StyledContainer, StyledImage } from './styled'

export default class Image extends Component {
  render({ message }) {
    return (
      <StyledContainer message={message} className="max-card-width">
        <StyledImage
          src={message.url}
        />
      </StyledContainer>
    )
  }
}
