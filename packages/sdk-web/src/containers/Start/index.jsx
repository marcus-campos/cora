import { h, Component } from 'preact'
import { route } from 'preact-router'
import { StyledChatNow, StyledDivider, StyledGreetings } from './styled'
import { startChat } from 'core/utils/post-message'

class Start extends Component {

  startChatHandle = () => {
    startChat()
    route('/chat')
  }

  render () {
    const title = this.context.coraProvider.title

    return (
      <div>
        <StyledGreetings>
          Oi! Eu sou a {title} e estou aqui para lhe ajudar :D
          <div>
            Vamos começar?
          </div>
        </StyledGreetings>
        <StyledDivider>
          <StyledChatNow>
            <a className="cursor-pointer" onClick={this.startChatHandle}>Começar</a>
          </StyledChatNow>
        </StyledDivider>

      </div>
    )
  }
}

export default Start