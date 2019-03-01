import { h } from 'preact'
import { StyledButton } from './styled'
import PropTypes from 'prop-types'

export const Button = ({ children, color, format = "full", className, onClick, reply, link, icon }) => link ?
  (
    <a href={link} target="_blank">
      <StyledButton color={color} format={format} className={className} onClick={onClick} reply={reply}>
        {children}
      </StyledButton>
    </a>
  ) : (
    <StyledButton icon={icon} color={color} format={format} className={className} onClick={onClick} reply={reply}>
      {children}
    </StyledButton>
  )

Button.defaultProps = {
  transparent: false,
  secondary: false,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
}