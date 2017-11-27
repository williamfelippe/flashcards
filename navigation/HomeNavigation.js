import { TabNavigator } from 'react-navigation'
import { Decks, NewDeck } from '../screens'
import {
	colorPrimary,
	colorWhite,
	colorPrimaryDark
} from '../constants/colors.js'

const HomeNavigation = TabNavigator(
	{
		Decks: {
			screen: Decks,
			navigationOptions: ({ navigation }) => ({
				title: 'Decks',
			})
		},
		NewDeck: {
			screen: NewDeck,
			navigationOptions: ({ navigation }) => ({
				title: 'NewDeck',
			})
		}
	},
	{
		tabBarPosition: 'top',
		animationEnabled: true,
		tabBarOptions: {
			labelStyle: {
				color: colorWhite,
				fontSize: 16
			},
			style: {
				backgroundColor: colorPrimary
			},
			indicatorStyle: {
				backgroundColor: colorWhite
			}
		}
	}
)

export default HomeNavigation