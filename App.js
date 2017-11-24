import React, { Component } from 'react'
import { RootNavigation } from './navigation'
import { Font } from 'expo'
import { Loader } from './components'

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
			!this.state.fontLoaded
				? <Loader />
				: <RootNavigation />
		)
	}
}

export default App
