import styled from 'styled-components'
import {
  IconChat,
  IconClose,
  IconIncreaseResize,
  IconDecreaseResize,
} from 'assets/icons'

export const StyledContainer = styled.div`
  height: 50px;
  align-items: center;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 15px;
`

export const StyledClose = styled.div`
  width: 50px;
  font-weight: bold;
  text-align: center;
`

export const StyledTitle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  text-align: center;
  align-items: center;
`

export const StyledIconChat = styled(IconChat).attrs({
  fill: ({ theme }) => theme.primary
}) `
`

export const StyledIconClose = styled(IconClose).attrs({
  fill: ({ theme }) => theme.primary
}) `
`

export const StyledIconIncreaseResize = styled(IconIncreaseResize).attrs({
  fill: ({ theme }) => theme.primary
}) `
`

export const StyledIconDecreaseResize = styled(IconDecreaseResize).attrs({
  fill: ({ theme }) => theme.primary
}) `
`

export const StyledName = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  color: ${({ theme }) => theme.primary};
  margin-left: 15px;
`
