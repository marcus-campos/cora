import styled, { css } from 'styled-components'

export const Arrow = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 100;
  background: rgba(255,255,255,0.6);
  box-shadow: 0 1px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  top: calc(50% - 20px);
  cursor: pointer;
  border-radius: 50%;
  border:none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active{
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
     -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
          box-shadow: inset 0px 0px 5px #c1c1c1; 
  }
  
  &:hover{
    border: 1px solid ${({ theme }) => theme.primary};
    background: #FFF;
  }
  
  ${props => props.left && css`
    left: 0;
  `}

  ${props => props.right && css`
    right: 0;
  `}
`

export default Arrow