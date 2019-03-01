import { h } from 'preact'
import { StyledText } from './styled'
import PropTypes from 'prop-types'

export const Text = ({ children }) => (
  <StyledText>
    {children}
  </StyledText>
)

Text.propTypes = {
  children: PropTypes.node.isRequired,
}