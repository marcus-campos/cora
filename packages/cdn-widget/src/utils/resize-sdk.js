export const resizeDecreaseHandler = () => {
  document.getElementById('zupcora-sdk-container')
    .classList
    .remove('increase-resize')
  document.getElementById('zupcora-iframe')
    .classList
    .remove('increase-resize')
  document.getElementById('zupcora-sdk-iframe-container')
    .classList
    .remove('increase-resize')
}

export const resizeIncreaseHandler = () => {
  document.getElementById('zupcora-sdk-container')
    .classList.add('increase-resize')
  document.getElementById('zupcora-iframe')
    .classList.add('increase-resize')
  document.getElementById('zupcora-sdk-iframe-container')
    .classList.add('increase-resize')
}