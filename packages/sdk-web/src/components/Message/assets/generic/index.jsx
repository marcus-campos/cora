import { h, Component } from 'preact'
import {
  StyledContainer,
  StyledSpace,
  StyledElement
} from './styled'
import theme from 'assets/style/theme'
import { IconRight, IconLeft } from 'assets/icons'
import values from 'lodash/values'
import { Title, Button, Arrow, BackgroundImage } from 'components'

export default class Generic extends Component {

  state = {
    elementIndex: 0
  }

  constructor(props) {
    super(props)
    this.translate = 0
  }

  componentDidMount() {
    this.node.style['-webkit-transition'] = '0.3s ease-in-out'
    this.node.style['-moz-transition'] = '0.3s ease-in-out'
    this.node.style['-o-transition'] = '0.3s ease-in-out'
  }

  onClick(button) {
    const { onButtonClicked } = this.context.chatProvider
    onButtonClicked(button)
  }

  onTouchStart(ev) {
    this.sliding = true
    this.canScroll = true
    const { pageX, pageY } = ev.targetTouches[0]
    this.initialPos = {
      pageX,
      pageY
    }
    this.node.style['-webkit-transition'] = 'none'
    this.node.style['-moz-transition'] = 'none'
    this.node.style['-o-transition'] = 'none'
  }

  onTouchEnd(ev) {
    if (this.sliding) {
      const { pageX, pageY } = ev.changedTouches[0]
      const distance = pageX - this.initialPos.pageX
      const deltaX = distance + this.translate
      this.sliding = false
      let elements = []
      for (const element of this.node.getElementsByClassName("element")) {
        elements.push(element)
      }

      const leftMargin = elements[0].offsetLeft

      const right = deltaX < this.translate
      let leftPosition = -1
      let elementIndex = -1
      const mod = Math.abs(deltaX)
      const originalArray = values(elements)
      if (!right) {
        elements.reverse()
      }

      for (const element of elements) {
        const index = originalArray.indexOf(element)
        if (right) {
          if (element.offsetLeft >= mod) {
            leftPosition = element.offsetLeft
            elementIndex = index
            break
          }
        } else {
          if (element.offsetLeft < mod) {
            leftPosition = element.offsetLeft
            elementIndex = index
            break
          }
        }
      }

      if (leftPosition !== -1 && Math.abs(distance) > 45) {
        this.translate = -leftPosition + leftMargin
        this.setState({ elementIndex })
      }

      this.node.style['-webkit-transition'] = '0.3s ease-in-out'
      this.node.style['-moz-transition'] = '0.3s ease-in-out'
      this.node.style['-o-transition'] = '0.3s ease-in-out'
      this.node.style.transform = `translateX(${this.translate}px)`
    }

    this.node.style.transform = `translateX(${this.translate}px)`

  }

  onTouchMove(ev) {

    if (this.sliding) {

      ev.preventDefault()
      const { pageX, pageY } = ev.targetTouches[0]
      const distanceX = pageX - this.initialPos.pageX
      const distanceY = pageY - this.initialPos.pageY
      const deltaX = pageX - this.initialPos.pageX + this.translate

      if (Math.abs(distanceX) > 20) {
        this.canScroll = false
      }


      if (Math.abs(distanceY) > 20 && this.canScroll) {
        this.sliding = false
        return false
      }

      this.node.style.transform = `translateX(${deltaX}px)`
    }
  }

  next() {
    const { elementIndex } = this.state
    const elements = this.node.getElementsByClassName("element")
    const index = Math.min(elementIndex + 1, elements.length - 1)
    const leftMargin = elements[0].offsetLeft
    const leftPosition = elements[index].offsetLeft
    this.translate = -leftPosition + leftMargin
    this.setState({ elementIndex: index })
    this.node.style.transform = `translateX(${this.translate}px)`

  }

  previous() {
    const { elementIndex } = this.state
    const elements = this.node.getElementsByClassName("element")
    const index = Math.max(elementIndex - 1, 0)
    const leftMargin = elements[0].offsetLeft
    const leftPosition = elements[index].offsetLeft
    this.translate = -leftPosition + leftMargin
    this.setState({ elementIndex: index })
    this.node.style.transform = `translateX(${this.translate}px)`

  }

  renderElements(elements) {
    return elements.map((element, index) => (

      <StyledElement className="element max-card-width">
        {element.image_url && <BackgroundImage url={element.image_url} />}
        <div className="content">
          <Title> {element.title} </Title>
          <div className="subtitle"> {element.subtitle} </div>
        </div>
        <div className="buttons">
          {element.buttons && element.buttons.map((button, index) =>
            (
              <div>
                <div className="divider" />
                <Button onClick={() => { this.onClick(button) }}> {button.title} </Button>
              </div>
            )
          )}
        </div>
      </StyledElement>
    ))
  }


  render({ message }, { elementIndex }) {
    return (
      <StyledContainer
        onTouchMove={(ev) => this.onTouchMove(ev)}
        onTouchStart={(ev) => this.onTouchStart(ev)}
        onTouchEnd={(ev) => this.onTouchEnd(ev)}
      >
        {elementIndex > 0 && (
          <Arrow left onClick={() => this.previous()}>
            <IconLeft fill={theme.primary} />
          </Arrow>
        )}

        <div className="carousel" ref={(el) => { this.node = el }}>
          <StyledSpace />

          {this.renderElements(message.elements)}

          <StyledSpace />
        </div>

        {elementIndex + 1 < message.elements.length && (
          <Arrow right onClick={() => this.next()}>
            <IconRight fill={theme.primary} />
          </Arrow>
        )}
      </StyledContainer>
    )
  }
}
