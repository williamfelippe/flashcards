import { TabNavigator } from 'react-navigation'
import { Decks, NewDeck } from '../scenes'
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
				title: 'Decks'
			})
		},
		NewDeck: {
			screen: NewDeck,
			navigationOptions: ({ navigation }) => ({
				title: 'NewDeck'
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