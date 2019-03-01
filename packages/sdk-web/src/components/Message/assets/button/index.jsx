import { h, Component } from 'preact'
import { Button as ButtonDefault } from 'components'
import { StyledContainer } from './styled'

export default class Button extends Component {
  onClick(button) {
    const { onButtonClicked } = this.context.chatProvider
    onButtonClicked(button)
  }

  render({ message }) {
    return (
      <StyledContainer message={message} className="max-card-width">
        <div className="text pd-15">
          {message.text}
        </div>

        {message.buttons.map(button =>
          (
            <div>
              <div className="divider" />
              <ButtonDefault onClick={() => this.onClick(button)}> {button.title} </ButtonDefault>
            </div>
          )
        )}
      </StyledContainer>
    )
  }
}
