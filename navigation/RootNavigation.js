import { StatusBar } from 'react-native'
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
		textAlign: 'center',
		alignSelf: 'center'
	},
	headerStyle: {
		backgroundColor: colorPrimary,
		elevation: 0
	},
	headerTintColor: colorWhite
}

const RootNavigation = StackNavigator(
	{
		Home: { 
			screen: Home,
			navigationOptions: ({ navigation }) => ({
				title: 'Home',
				...style
			})
		},
		NewDeck: { 
			screen: Quiz,
			navigationOptions: ({ navigation }) => ({
				title: 'Quiz',
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
				title: `Deck ${navigation.state.params.deck.name}`,
				...style
			})
		}
	}
)

export default RootNavigation