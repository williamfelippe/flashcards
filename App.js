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
	colorDarkGreen,
	colorRed,
	colorDarkRed,
	colorBlack,
	colorGray
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
		colorDarkGreen,
		colorRed,
		colorDarkRed,
		colorBlack,
		colorGray
	},
	fonts: {
		primaryFont: 'montserrat',
		primaryFontBold: 'montserrat-bold',
		primaryFontLight: 'montserrat-light',
		primaryFontMedium: 'montserrat-medium'
	},
	dimens: {
		sidePadding: 10,
		topAndBottomPadding: 15,
		defaultPadding: 10
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
			'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
			'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
			'montserrat-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
			'montserrat': require('./assets/fonts/Montserrat-Regular.ttf')
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
