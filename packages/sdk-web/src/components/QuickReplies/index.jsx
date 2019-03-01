import { h, Component } from 'preact'
import { Button, Arrow } from 'components'
import theme from 'assets/style/theme'
import { IconLeft, IconRight } from 'assets/icons'
import { StyledContainer } from './styled'
import debounce from 'lodash/debounce'
import eq from 'lodash/eq'

export default class QuickReplies extends Component {

  state = {
    scrollLeft: 0
  }

  componentDidMount() {
    this.onScroll = debounce(this.onScroll, 100)
  }

  componentDidUpdate({ lastMessage }) {
    if (this.props.lastMessage && this.props.lastMessage.quick_replies) {
      if (!lastMessage || !eq(this.props.lastMessage.quick_replies, lastMessage.quick_replies)) {
        this.setState({
          maxScroll: this.node.scrollWidth - this.node.clientWidth
        })
      }
    }
  }

  onClick(button) {
    const { onButtonClicked } = this.context.chatProvider
    onButtonClicked(button)
  }

  onScroll() {
    this.setState({
      scrollLeft: Math.ceil(this.node.scrollLeft)
    })
  }

  previous() {
    const goTo = Math.max(this.node.scrollLeft - this.node.clientWidth + 100, 0)
    this.node.scroll({
      behavior: 'smooth',
      left: goTo,
      top: 0
    })
  }

  next() {
    const goTo = Math.min(this.node.scrollLeft + this.node.clientWidth - 100, this.state.maxScroll)
    this.node.scroll({
      behavior: 'smooth',
      left: goTo,
      top: 0
    })
  }

  render({ lastMessage }, { scrollLeft, maxScroll }) {
    if (!lastMessage || !lastMessage.quick_replies) {
      return ''
    }

    return (
      <StyledContainer
      >
        <div className="carousel" ref={(el) => { this.node = el }} onScroll={() => this.onScroll()}>
          {scrollLeft > 0 && (
            <Arrow left onClick={() => this.previous()}>
              <IconLeft fill={theme.primary} />
            </Arrow>
          )}

          {
            lastMessage.quick_replies.map((button) => (
              <Button
                reply
                format="compact"
                className="reply"
                onClick={() => { this.onClick(button) }}>
                {button.title ? button.title : 'Localização'}
              </Button>
            ))
          }

          {maxScroll > 0 && scrollLeft < maxScroll && (
            <Arrow right onClick={() => this.next()}>
              <IconRight fill={theme.primary} />
            </Arrow>
          )}
        </div>
      </StyledContainer>
    )
  }
}
