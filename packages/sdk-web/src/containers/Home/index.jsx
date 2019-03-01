import { h, Component } from 'preact'
import { Footer, Message, QuickReplies } from 'components'
import { sendMessage } from 'core/providers/service'
import { handleMessage, processMessages, isFirstNewMessage, getDelay } from 'core/utils/message'
import Provider from 'preact-context-provider'
import last from 'lodash/last'
import {
  StyledHome,
  StyledContent,
  StyledAnchor,
  StyledTyping
} from './styled'
class Home extends Component {

  state = {
    messages: [],
    typing: 0
  }

  async handleMessage(data) {
    try {
      this.setState({ typing: ++this.state.typing })
      const response = await sendMessage(data)
      await this.setMessages(this.state.messages, response)
    } catch (error) {
      console.warn(error)
    }
  }

  componentDidMount() {
    const flow = this.context.coraProvider.flow
    if (flow) {
      this.handleMessage({ postback: { payload: flow, title: 'start' } })
    }
  }

  sendTextMessage(text) {
    let { messages } = this.state
    messages = messages.concat({
      source: 'sended',
      text,
      type: 'text'
    })
    this.setState({ messages })
    this.handleMessage({ message: { text } })
  }

  sendPostback(button) {
    let { messages } = this.state
    messages = messages.concat({
      source: 'sended',
      text: button.title,
      type: 'text'
    })
    this.setState({ messages })
    this.handleMessage({ postback: { payload: button.payload, title: button.title } })
  }

  sendLocation() {
    if (navigator.geolocation) {
      const onReceivePosition = async ({ coords }) => {
        const text = `lat:${coords.latitude}, lng:${coords.longitude}, acc:${coords.accuracy}`
        let { messages } = this.state
        messages = messages.concat({
          source: 'sended',
          text: text,
          type: 'text'
        })
        this.setState({ messages })
        this.handleMessage({ message: { text } })
      }
      navigator.geolocation.getCurrentPosition(onReceivePosition)
    } else {
      console.warn('Geolocation is not supported by this browser.')
    }
  }

  onButtonClicked(button) {
    if (button.type === 'postback') {
      this.sendPostback(button)
    } else if (button.type === 'web_url') {
      this.openWebView(button)
    } else if (button.type == 'web_site') {
      this.openWebsite(button)
    } else if (button.content_type === 'location') {
      this.sendLocation()
    }
  }

  openWebView(button) {
    window.parent.location.replace(button.url)
  }

  openWebsite(button) {
    window.open(button.url, '_blank')
  }

  async setTimer(newMessage, isFirst) {
    let message = this.state.messages;
    return new Promise((resolve) => {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat(newMessage)
        })
        resolve()
      }, (isFirst || !message[0]) ? 0 : getDelay(message[message.length - 1]))
    })
  }

  stateMessage(newMessage) {
    this.setState({
      messages: this.state.messages.concat(newMessage)
    })
  }

  async setStateMessage(newMessages, index) {
    const newMessage = newMessages.slice(index, index + 1)
    const isFirstMessage = isFirstNewMessage(newMessages, index)
    newMessage[0].source === 'received' ?
      await this.setTimer(newMessage, isFirstMessage, index) :
      this.stateMessage(newMessage)
  }

  async setMessages(messages, response) {
    const newMessages = []
    const lastItem = messages.pop()
    lastItem && newMessages.push({ ...lastItem, last: false })
    for (const message of response.message) {
      newMessages.push(handleMessage(message))
    }
    for (let i = 0; i < newMessages.length; i++) {
      await this.setStateMessage(newMessages, i)
    }
    this.setState({ typing: --this.state.typing })
  }

  componentDidUpdate() {
    this.content.scrollTop = this.bottom.offsetTop
    document.getElementById("cora-input-message").focus()
  }

  render({ }, { messages, typing }) {
    processMessages(messages)
    return (
      <Provider chatProvider={{
        onButtonClicked: (button) => this.onButtonClicked(button)
      }}>
        <StyledHome>
          <StyledContent innerRef={el => { this.content = el }}>
            {messages.map(item => <Message message={item} />)}
            <QuickReplies lastMessage={last(messages)} />
            <StyledAnchor innerRef={el => { this.bottom = el }} />
            {!!typing && <StyledTyping>Digitando...</StyledTyping>}
          </StyledContent>
          <Footer sendTextMessage={text => this.sendTextMessage(text)} />
        </StyledHome>
      </Provider>
    )
  }
}

export default Home
