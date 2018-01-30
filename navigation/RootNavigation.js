import React from 'react'
import { StatusBar, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { colorWhite, colorPrimary } from '../constants/colors.js'
import {
	homeTitle,
	quizTitle,
	newQuestionTitle,
	deckTitle
} from '../strings/titles'
import {
	Home,
	Quiz,
	NewQuestion,
	DeckDetail
} from '../scenes'

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
				title: homeTitle,
				...style,
				headerLeft: (<View></View>)
			})
		},
		Quiz: { 
			screen: Quiz,
			navigationOptions: ({ navigation }) => ({
				title: `${quizTitle} ${navigation.state.params.deckTitle}`,
				...style
			})
		},
		NewQuestion: { 
			screen: NewQuestion,
			navigationOptions: ({ navigation }) => ({
				title: newQuestionTitle,
				...style
			})
		},
		DeckDetail: {
			screen: DeckDetail,
			navigationOptions: ({ navigation }) => ({
				title: `${deckTitle} ${navigation.state.params.deckTitle}`,
				...style
			})
		}
	}
)

export default RootNavigation