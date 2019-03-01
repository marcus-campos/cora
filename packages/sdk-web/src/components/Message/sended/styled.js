import styled from 'styled-components'

export const StyledContainer  = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin: 10px 0px;

  &:first-child {
    border-top-right-radius: 1px;
  }

  &:last-child {
    border-bottom-right-radius: 1px;
  }
`

export const Styledcontent = styled.div`
`

export const StyledDelivered = styled.div`
  width: 8px;
  height: 8px;
  background: #dfdfdf;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right:5px;
`

export const Styledmessage = styled.div`
  padding: 0px 10px 0px 35px;
  min-height: 30px;
  display: flex;
  flex-grow: 1;
  flex-direction:row-reverse;
`
