import { h, Component } from 'preact'
import { Button } from 'components'
import { StyledFooter, StyledContainer, StyledMessageInput, StyledDivider, StyledIconSend } from './styled'

export default class Footer extends Component {

  onSubmit(ev) {
    ev.preventDefault()
    if (!ev.target.elements.message.value.trim())
      return
    const { sendTextMessage = () => { } } = this.props
    const message = ev.target.elements.message.value
    sendTextMessage(message)
    ev.target.elements.message.value = ''
  }

  render() {
    return (
      <form onSubmit={ev => this.onSubmit(ev)} autocomplete="off">
        <StyledFooter>
          <StyledDivider />
          <StyledContainer >
            <StyledMessageInput id="cora-input-message" name="message" placeholder="Message" />
            <Button icon format="compact" className="button">
              <StyledIconSend />
            </Button>
          </StyledContainer>
        </StyledFooter>
      </form>
    )
  }
}
