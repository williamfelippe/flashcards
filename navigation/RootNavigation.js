import { 
	StackNavigator, 
	StatusBar 
} from 'react-navigation'
import {
	Open,
	Home,
	Quiz,
	NewQuestion,
	DeckDetail
} from '../screens'

const RootNavigation = StackNavigator(
	{
		Open: {
			screen: Open,
			navigationOptions: ({ navigation }) => ({
				title: 'Flashcards',
			})
		},
		Home: { 
			screen: Home,
			navigationOptions: ({ navigation }) => ({
				title: 'Home'
			})
		},
		NewDeck: { 
			screen: Quiz,
			navigationOptions: ({ navigation }) => ({
				title: 'Quiz',
			})
		},
		NewQuestion: { screen: NewQuestion },
		DeckDetail: {
			path: 'DeckDetail/:deck',
			screen: DeckDetail
		}
	},
)

export default RootNavigation