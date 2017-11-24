import { TabNavigator } from 'react-navigation'
import { Decks, Quiz } from '../screens'

const HomeNavigation = TabNavigator(
	{
		Decks: {
			screen: Decks
		},
		Quiz: {
			screen: Quiz
		}
	},
	{
		initialRouteName: 'Decks',
		headerMode: 'none'
	}
)

export default HomeNavigation