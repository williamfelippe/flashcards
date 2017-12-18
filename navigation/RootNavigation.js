import React from 'react'
import { StatusBar, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { colorWhite, colorPrimary } from '../constants/colors.js'
import {
	Home,
	Quiz,
	NewQuestion,
	DeckDetail
} from '../screens'

const style = {
	headerTitleStyle: {
		color: colorWhite,
		alignSelf: 'center'
	},
	headerStyle: {
		backgroundColor: colorPrimary,
		elevation: 0
	},
	headerRight: (<View></View>),
	headerTintColor: colorWhite
}

const RootNavigation = StackNavigator(
	{
		Home: { 
			screen: Home,
			navigationOptions: ({ navigation }) => ({
				title: 'Home',
				...style,
				headerLeft: (<View></View>)
			})
		},
		Quiz: { 
			screen: Quiz,
			navigationOptions: ({ navigation }) => ({
				title: `Quiz ${navigation.state.params.deck.title}`,
				...style
			})
		},
		NewQuestion: { 
			screen: NewQuestion,
			navigationOptions: ({ navigation }) => ({
				title: 'NewQuestion',
				...style
			})
		},
		DeckDetail: {
			screen: DeckDetail,
			navigationOptions: ({ navigation }) => ({
				title: `Deck ${navigation.state.params.deck.title}`,
				...style
			})
		}
	}
)

export default RootNavigation