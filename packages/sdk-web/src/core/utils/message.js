const messageTypes = {
  RECEIVED: 'received',
  SENDED: 'sended'
}

export const handleMessage = (message) => {
  if (!message.attachment) {
    return {
      source: messageTypes.RECEIVED,
      text: message.text,
      type: 'text',
      quick_replies: message.quick_replies,
    }
  }

  if (message.attachment.type === 'template') {
    if (message.attachment.payload.template_type === 'button') {
      return {
        source: messageTypes.RECEIVED,
        text: message.attachment.payload.text,
        buttons: message.attachment.payload.buttons,
        type: 'button',
        quick_replies: message.quick_replies
      }
    }

    if (message.attachment.payload.template_type === 'generic') {
      return {
        source: messageTypes.RECEIVED,
        elements: message.attachment.payload.elements,
        type: 'generic',
        quick_replies: message.quick_replies
      }
    }

    if (message.attachment.payload.template_type === 'list') {
      return {
        source: messageTypes.RECEIVED,
        elements: message.attachment.payload.elements,
        top_element_style: message.attachment.payload.top_element_style,
        buttons: message.attachment.payload.buttons,
        type: 'list',
        quick_replies: message.quick_replies
      }
    }
  }

  if (message.attachment.type === 'image') {
    return {
      source: messageTypes.RECEIVED,
      url: message.attachment.payload.url,
      type: 'image',
      quick_replies: message.quick_replies
    }
  }
}

export const processMessages = (messages) => {
  if (!messages.length) {
    return
  }
  let i = 0
  for (i = 0; i < messages.length - 1; i++) {
    messages[i].source !== messages[i + 1].source ?
      messages[i + 1].last = true :
      messages[i].last = false
  }
  messages[i].last = true
}

export const isFirstNewMessage = (newMessages, index) => {
  return (newMessages[0].source === 'received' && index === 0) ||
    (newMessages[0].source !== 'received' && index === 1)
}

export const getDelay = (message) => {
  return message.text ? message.text.split(" ").length * 80 : 300
}