import { h, Component } from 'preact'
import { StyledContainer, StyledDelivered, Styledmessage, Styledcontent } from './styled'
import { renderMessage } from '../assets'

export default class Sended extends Component {
  render({ message }) {
    return (
      <StyledContainer>
        <Styledmessage>
          <Styledcontent>
            {renderMessage(message)}
          </Styledcontent>
        </Styledmessage>
        <StyledDelivered />
      </StyledContainer>
    )
  }
}
