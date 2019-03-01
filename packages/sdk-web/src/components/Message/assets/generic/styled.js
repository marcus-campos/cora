import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
  overflow: hidden;
  margin-left: -${({ theme }) => theme.contentPadding};
  margin-right: -${({ theme }) => theme.contentPadding};
  float:left;
  z-index: 2;
  width: calc( 100% + ${({ theme }) => theme.contentPadding} + ${({ theme }) => theme.contentPadding});
  -webkit-transform: translateZ(0);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  .carousel {
    display: flex;
    width: 100% !important;
    z-index: 2;
    flex-direction: row;
    flex-wrap: nowrap;
    transform: translateX(0);
    -webkit-perspective: 1000;
    -webkit-backface-visibility: hidden;
    margin-bottom:0.1em;
  }
  
`

export const StyledElement = styled.div`
  width: calc(100% - ${({ theme }) => theme.contentPadding} - ${({ theme }) => theme.contentPadding});
  overflow: hidden;
  z-index:1;
  position: relative;
  background: #FFF;
  border: 1px solid ${({ theme }) => theme.primaryLight};
  border-radius: 15px;
  margin-right: 15px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 10px 0 0px 5px #888;
  box-shadow: 10px 0 0px 5px #FFF;

  .divider{
    height: 1px;
    margin: 0px 15px;
    background: ${({ theme }) => theme.primaryLight};
  }

  .content{
    padding: 15px;
  }

  .buttons{
    margin-top: auto;
  }

  &:nth-last-of-type(1){
    margin-right: 0px;
  }

`

export const StyledSpace = styled.div`
  width: ${({ theme }) => theme.contentPadding};
  height: ${({ theme }) => theme.contentPadding};
  flex: 0 0 auto;
`

export const StyledArrow = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 100;
  border-radius: 50%;
  background: rgba(255,255,255,0.6);
  box-shadow: 0 1px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  top: calc(50% - 20px);
  cursor: pointer;
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
