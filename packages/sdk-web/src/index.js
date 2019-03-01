import { h, render } from 'preact'
import Main from 'containers/'
import injectGlobal from 'assets/style/global'
import "babel-polyfill"

function init() {
  render(<Main />, document.getElementById('root'))
}

if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

if (module.hot) {
	module.hot.accept('./containers/main', () => requestAnimationFrame(init) )
}


init()
