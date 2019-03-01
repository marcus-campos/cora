import { CONFIGS } from  './config'
import { applyListeners, toggleHandler } from './utils/listeners'

const ENVIRONMENT = CONFIGS[ENV];

(function (window) {

  var zupcora = document.createElement('div')
  zupcora.setAttribute('data-sdk', 'zupcora-sdk')
  document.body.appendChild(zupcora)

  function httpGetAsync(theUrl, sdkIdentifier, callback) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText)
      else if (xmlHttp.readyState == 4) callback(null, xmlHttp.status)
    }
    xmlHttp.open('GET', theUrl, true)
    xmlHttp.setRequestHeader('Cora-UU-Identifier', sdkIdentifier)
    xmlHttp.send(null)
  }

  function getAppParameters(sdkIdentifier, options) {
    return {
      srcApp: 'cora-websdk',
      uuIdentifier: sdkIdentifier,
      options: options,
      parentOrigin: window.location.origin
    }
  }

  function createApp(response, sdkIdentifier, options) {
    var color = response.primaryColor
    var title = response.title
    var flow = response.flow || ''
    var toggle = document.createElement('div')

    toggle.setAttribute('id', 'zupcora-toggle')
    toggle.addEventListener('click', toggleHandler)
    toggle.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 34 34">' +
      '<g fill="none" fill-rule="nonzero">' +
      '<path fill="#FFF" d="M3.708 19.536C.38 14.126 2.064 7.04 7.472 3.709 12.88.38 19.963 2.064 23.292 7.473A11.504 11.504 0 0 1 25 13.67c-.206 6.36-5.45 11.392-11.811 11.33H2.575l1.117-1.898a3.459 3.459 0 0 0 .016-3.565z" />' +
      '<path fill="' + color + '" fill-opacity=".2" d="M32.284 28.51c3.347-5.437 1.649-12.556-3.793-15.9a11.566 11.566 0 0 0-4.52-1.61c.082.566.12 1.137.116 1.709-.206 6.39-5.482 11.446-11.88 11.384H11A11.829 11.829 0 0 0 22.749 34h10.675L32.3 32.093a3.474 3.474 0 0 1-.016-3.583z" />' +
      '<g fill="' + color + '">' +
      '<path d="M32.2 30.91a2.58 2.58 0 0 1 0-2.668c3.509-5.704 1.73-13.174-3.975-16.682a12.121 12.121 0 0 0-4.11-1.589 12.126 12.126 0 0 0-3.622-6.637A12.012 12.012 0 0 0 11.18.044C4.503.565-.485 6.402.038 13.08a12.121 12.121 0 0 0 1.789 5.453 2.58 2.58 0 0 1 0 2.668L.703 23.076a.808.808 0 0 0 .695 1.221H10A12.41 12.41 0 0 0 22.127 34h10.478a.809.809 0 0 0 .695-1.221l-1.1-1.868zM2.812 22.68l.388-.655a4.196 4.196 0 0 0 0-4.341C.158 12.74 1.7 6.267 6.643 3.224c4.943-3.042 11.417-1.5 14.46 3.443a10.506 10.506 0 0 1 1.557 5.657c-.193 5.817-4.996 10.417-10.817 10.356h-9.03zm19.347 9.702a10.794 10.794 0 0 1-10.51-8.085h.194c6.702.056 12.224-5.25 12.434-11.949v-.703c5.651 1.326 9.157 6.982 7.83 12.633a10.517 10.517 0 0 1-1.281 3.107 4.196 4.196 0 0 0 0 4.342l.388.655h-9.055z" />' +
      '<path d="M13.047 10.222c0 .808-.76 1.326-2.708 1.406l-.08.081.355 2.507h1.617l.17-.946c1.649-.291 2.983-1.1 2.983-3.08 0-2.054-1.512-3.234-3.743-3.234a4.851 4.851 0 0 0-3.784 1.673l1.423 1.56a3.184 3.184 0 0 1 2.32-1.067c.922 0 1.447.404 1.447 1.1zM10.105 15.441h2.506v2.474h-2.506z" />' +
      '</g>' +
      '</g>' +
      '</svg>'

    zupcora.appendChild(toggle)

    const container = document.createElement('div')
    container.id = 'zupcora-sdk-container'

    const iframeContainer = document.createElement('div')
    iframeContainer.id = 'zupcora-sdk-iframe-container'

    const iframe = document.createElement('iframe')
    iframe.name = 'Zup Cora'
    iframe.id = 'zupcora-iframe'
    iframe.src = `${ENVIRONMENT.sdkUrl}/?primaryColor=` + color + '&title=' + title + '&flow=' + flow
    iframe.setAttribute('allowTransparency', true)
    iframe.frameBorder = '0'
    iframe.scrolling = 'no'

    iframe.onload = function () {
      const appData = getAppParameters(sdkIdentifier, options)
      toggle.setAttribute('initialized', true)
      this.contentWindow.postMessage(appData, ENVIRONMENT.sdkUrl)
    }

    iframeContainer.appendChild(iframe)
    container.appendChild(iframeContainer)
    zupcora.appendChild(container)

    applyListeners()

  }

  const initDevMode = (sdkIdentifier, options) => {
    createApp({
      primaryColor: 'blue',
      title: 'Teste',
      flow: '5c17e02ae5adae000f93f790|start'
    }, sdkIdentifier, options)
  }

  const initProdMode = (sdkIdentifier, options) => {
    httpGetAsync(`${ENVIRONMENT.apiUri}/websdk`, sdkIdentifier, function (response, error) {
      if (error || !response) {
        console.error('Could not start CORA, invalid domain/uu-identifier')
      } else {
        response && createApp(JSON.parse(response), sdkIdentifier, options)
      }
    })
  }

  const initHandler = (sdkIdentifier, options) => {
    ENV === 'dev'
      ? initDevMode(sdkIdentifier, options)
      : initProdMode(sdkIdentifier, options)
  }

  window.zupcora = {
    sdk: {
      toggle: toggleHandler,
      init: initHandler
    }
  }

}(window))

