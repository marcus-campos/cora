import { h, Component } from 'preact'
import Received from './received'
import Sended from './sended'

export default class Message extends Component {
  render(props) {
    return props.message.source === 'sended'
      ? <Sended {...props} />
      : <Received {...props} />
  }
}
