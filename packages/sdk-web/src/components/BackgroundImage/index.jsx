import { h } from 'preact'
import { StyledBackgroundImage } from './styled'
import PropTypes from 'prop-types'

export const BackgroundImage = ({ url, children }) => (
  <StyledBackgroundImage className="max-card-height" url={url}>
    {children}
  </StyledBackgroundImage>
)

BackgroundImage.defaultProps = {
  url: ''
}

BackgroundImage.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string
}