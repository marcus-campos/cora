import { h, Component } from 'preact';
import {
  StyledDivider,
  StyledElement,
  StyledLarge,
  StyledContainer,
  StyledLargeContent,
  StyledOverlay,
} from './styled'

import { Title, Button, BackgroundImage } from 'components'

export default class List extends Component {

  onClick(button) {
    const { onButtonClicked } = this.context.chatProvider
    onButtonClicked(button)
  }

  renderElements(elements) {
    return elements.map((element, index) => (
      <div>
        {index > 0 ? <StyledDivider /> : ''}
        <StyledElement className="pd-15">
          <div className="content">
            <Title >{element.title}</Title>
            <div>{element.subtitle}</div>
            {element.buttons && element.buttons.map((button, index) =>
              <Button format="compact" className="mg-top-5" onClick={() => { this.onClick(button) }}>{button.title}</Button>
            )}
          </div>
          {element.image_url && <div className="image" style={`background-image: url(${element.image_url})`} />}
        </StyledElement>
      </div>
    ))
  }

  renderTopElement(element) {
    if (!element) {
      return ''
    }

    return (
      <BackgroundImage url={element.image_url}>
        <StyledOverlay />
        <StyledLargeContent className="content pd-15">
          <Title >{element.title}</Title>
          <div >{element.subtitle}</div>
          {element.buttons && element.buttons.map((button, index) =>
            <Button className="mg-top-5" format="compact" color="#FFF" onClick={() => { this.onClick(button) }}>{button.title}</Button>
          )}
        </StyledLargeContent>
      </BackgroundImage>
    )
  }
  render({ message }) {

    let topElement
    const elements = [...message.elements]
    if (message.top_element_style === 'large') {
      topElement = elements.shift()
    }


    return (
      <StyledContainer className="max-card-width">

        {this.renderTopElement(topElement)}
        {this.renderElements(elements)}

        {message.buttons && message.buttons.map((button, index) =>
          (
            <div>
              <StyledDivider />
              <Button transparent onClick={() => { this.onClick(button) }}> {button.title} </Button>
            </div>
          )
        )}
      </StyledContainer>
    )
  }
}
