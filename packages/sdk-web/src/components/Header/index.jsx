import { h, Component } from 'preact'
import { Button } from 'components'
import {
  StyledContainer,
  StyledIconChat,
  StyledIconClose,
  StyledTitle,
  StyledName,
  StyledIconIncreaseResize,
  StyledIconDecreaseResize
} from './styled'

import {
  toggleSDK,
  increaseResize,
  decreaseResize
} from 'core/utils/post-message'

export default class Header extends Component {

  state = {
    maximized: false
  }

  renderResizeIcon = () => {
    const { maximized } = this.state
    return maximized ? <StyledIconDecreaseResize /> : <StyledIconIncreaseResize />
  }

  resize = () => {
    const { maximized } = this.state
    maximized ? decreaseResize() : increaseResize()
    this.setState({ maximized: !maximized })
  }

  render() {
    const { title } = this.context.coraProvider
    return (
      <StyledContainer >
        <StyledTitle >
          <StyledIconChat />
          <StyledName>{title}</StyledName>
        </StyledTitle>
        <Button
          icon
          onClick={this.resize}
          format="compact"
          className="button pd-top-5"
        >
          {this.renderResizeIcon()}
        </Button>
        <Button
          icon
          onClick={toggleSDK}
          format="compact"
          className="button mg-10 mg-top-15"
        >
          <StyledIconClose />
        </Button>
      </StyledContainer>
    )
  }
}
