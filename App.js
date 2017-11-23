import React, { Component } from 'react'
import glamorous from 'glamorous-native'
import { Text, View } from 'react-native'
import { colorBlack } from './constants/colors'

const SplashView = glamorous.view({

})

const SplashTitle = glamorous.text({

})

class App extends Component {

	render() {
		return (
			<View>
				<SplashView>
					<SplashTitle>
						Flashcards
					</SplashTitle>


				</SplashView>
			</View>
		)
	}
}

export default App