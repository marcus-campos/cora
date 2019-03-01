import { h } from 'preact'
import { StyledTitle } from './styled'
import PropTypes from 'prop-types'

export const Title = ({ children, className }) => (
  <StyledTitle className={className}>
    {children}
  </StyledTitle>
)

Title.defaultProps = {
  className: '',
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}