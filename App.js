import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View, StatusBar } from 'react-native'
import { Font } from 'expo'
import { RootNavigation } from './navigation'
import { Loader } from './components'
import { colorPrimaryDark } from './constants/colors.js'
import store from './store.js'

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

		this.setState({ fontLoaded: true })
	}

	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<StatusBar backgroundColor={colorPrimaryDark} />
					{
						!this.state.fontLoaded
							? <Loader />
							: <RootNavigation />
					}
				</View>
			</Provider>
		)
	}
}

export default App
