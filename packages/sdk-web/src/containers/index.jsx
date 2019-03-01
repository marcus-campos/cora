import { h } from 'preact'
import { Router } from 'preact-router'
import { ThemeProvider } from 'styled-components'
import { Header } from 'components'
import { theme } from 'assets/style/theme'
import Provider from 'preact-context-provider'
import { getQueryParams } from 'core/utils/query-string'
import { setPostMessageEventListener } from 'core/utils/post-message'
import { StyledContent } from './styled'

import Start from './Start'
import Home from './Home'

const mergeTheme = ({ primaryColor = '#246fc5' }) => {
  return Object.assign(theme, {
		primary: primaryColor,
		primaryLight: primaryColor
	})
}

const Main = () => {
	const params = getQueryParams()
	const theme = mergeTheme(params)

	setPostMessageEventListener()

	return (
		<Provider coraProvider={params}>
			<ThemeProvider theme={theme}>
				<div>
					<Header />
					<StyledContent>
						<Router>
							<Start path="/" />
							<Home path="/chat" />
						</Router>
					</StyledContent>
				</div>
			</ThemeProvider>
		</Provider>
	)
}

export default Main
