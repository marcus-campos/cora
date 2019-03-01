import { h } from 'preact'
import Button from './button'
import Generic from './generic'
import Image from './image'
import List from './list'
import Text from './text'

export const messageTypes = (message) => ({
  button: <Button message={message}/>,
  generic: <Generic message={message} />,
  image: <Image message={message} />,
  list: <List message={message} />,
  text: <Text message={message} />
})

export const renderMessage = (message) => {
  return messageTypes(message)[message.type]
}