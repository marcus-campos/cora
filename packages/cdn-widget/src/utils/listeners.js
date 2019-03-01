import { resizeIncreaseHandler, resizeDecreaseHandler } from './resize-sdk'

const setActiveSDK = (sdk) => {
  sdk.setAttribute('active', true)
}

const setInactiveSDK = (sdk) => {
  sdk.removeAttribute('active')
}

export const toggleHandler = () => {
  const sdk = document.querySelector('#zupcora-sdk-container')
  sdk.hasAttribute('active') ? setInactiveSDK(sdk) : setActiveSDK(sdk)
}

export const startHandler = () => {
  const sdk = document.querySelector('#zupcora-sdk-container')
  sdk.setAttribute('start', true)
}

const mapListeners = (type) => {
  return {
    'zupcora.sdk.toggle': () => toggleHandler(),
    'zupcora.sdk.decrease-resize': () => resizeDecreaseHandler(),
    'zupcora.sdk.increase-resize': () => resizeIncreaseHandler(),
    'zupcora.sdk.start': () => startHandler(),
  }[type || '']
}

export const applyListeners = () => {
  window.addEventListener('message', function(event) {
    if (event.data.type && event.data.type.indexOf('zupcora.sdk') === 0) {
      mapListeners(event.data.type)()
    }
  }, false)
}