import { StackNavigator } from 'react-navigation'
import { 
	Open, 
	Home, 
	NewDeck, 
	NewQuestion, 
	DeckDetail 
} from '../screens'
import withDefaultStatusBar from '../utils/withDefaultStatusBar'

const RootNavigation = StackNavigator({
	Open: { screen: Open },
	Home: { screen: Home },
	NewDeck: { screen: NewDeck },
	NewQuestion: { screen: NewQuestion },
	DeckDetail: {
		path: 'DeckDetail/:deck',
		screen: DeckDetail
	}
})

export default withDefaultStatusBar(RootNavigation)