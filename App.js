import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Font } from 'expo'
import { ThemeProvider } from 'glamorous-native'
import { RootNavigation } from './navigation'
import { Loader } from './components'
import { setLocalNotification } from './utils/notification'
import { View, StatusBar } from 'react-native'
import {
	colorPrimary,
	colorPrimaryDark,
	colorAccent,
	colorBase,
	colorTextDefault,
	colorWhite,
	colorIce,
	colorGreen,
	colorRed,
	colorBlack
} from './constants/colors.js'
import store from './store.js'

const theme = {
	colors: {
		colorPrimary,
		colorPrimaryDark,
		colorAccent,
		colorBase,
		colorTextDefault,
		colorWhite,
		colorIce,
		colorGreen,
		colorRed,
		colorBlack
	},
	fonts: {
		primaryFont: 'ubuntu',
		primaryFontBold: 'ubuntu-bold',
		primaryFontLight: 'ubuntu-light',
		primaryFontMedium: 'ubuntu-medium'
	},
	dimens: {
		paddingLeft: 15,
		paddingRight: 15
	}
}

class App extends Component {

	constructor() {
		super()
		this.state = {
			fontLoaded: false
		}
	}

	async componentDidMount() {
		await Font.loadAsync({
			'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
			'ubuntu-light': require('./assets/fonts/Ubuntu-Light.ttf'),
			'ubuntu-medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
			'ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf')
		})

		this.setState({ fontLoaded: true }, () => {
			setLocalNotification()
		})
	}

	render() {
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<View style={{ flex: 1 }}>
						<StatusBar backgroundColor={colorPrimaryDark} />
						{
							!this.state.fontLoaded
								? <Loader />
								: <RootNavigation />
						}
					</View>
				</ThemeProvider>
			</Provider>
		)
	}
}

export default App
