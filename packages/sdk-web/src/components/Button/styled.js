import styled, { css } from 'styled-components'

const full = css`
  width: 100%;
  height: 30px;
`

const compact = css`
  border: 1px solid ${({ theme, color }) => color ? color : theme.primary};
  border-radius: 0.4em;
  
`
const icon = css`
  border-radius: 50%;  
  border: none;
`

const reply = css`
  border-radius: 4em;
  margin-right: 5px;
  &:last-of-type {
    margin-right: 0px;
  }
`

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme, color }) => color ? color : theme.primary};
  text-align: center;
  min-width: 30px;
  min-height: 32px;
  padding: 0 8px;
  font-size: 1.6em;
  outline: none;
  cursor: pointer;
  ${props => props.format === 'full' ? full : ''}
  ${props => props.format === 'compact' ? compact : ''}
  ${props => props.reply ? reply : ''}
  ${props => props.icon ? icon : ''}

  &:active{
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
     -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
          box-shadow: inset 0px 0px 5px #c1c1c1; 
  }
`