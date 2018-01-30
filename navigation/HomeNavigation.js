import { TabNavigator } from 'react-navigation'
import { Decks, NewDeck } from '../scenes'
import {
	decksTitle,
	newDeckTitle
} from '../strings/titles'
import {
	colorPrimary,
	colorPrimaryDark,
	colorAccent,
	colorWhite
} from '../constants/colors.js'

const HomeNavigation = TabNavigator(
	{
		Decks: {
			screen: Decks,
			navigationOptions: ({ navigation }) => ({
				title: decksTitle
			})
		},
		NewDeck: {
			screen: NewDeck,
			navigationOptions: ({ navigation }) => ({
				title: newDeckTitle
			})
		}
	},
	{
		tabBarPosition: 'top',
		animationEnabled: true,
		tabBarOptions: {
			labelStyle: {
				color: colorWhite,
				fontSize: 14
			},
			style: {
				backgroundColor: colorPrimary
			},
			indicatorStyle: {
				backgroundColor: colorAccent
			}
		}
	}
)

export default HomeNavigation