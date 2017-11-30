import React, { Component } from 'react'
import { Container, BasicButton } from '../components'
import { Text } from 'react-native'

class DeckDetail extends Component {
	componentDidMount() {
		console.log('DECK DETAIL PROPS', this.props)
	}

	render() {
		const { navigator } = this.props

		return (
			<Container>
				<Text>
					Udacicards
				</Text>

				<Text>
					3 cards
                </Text>

				<BasicButton 
					text="Add Card"
					onPress={() => navigator.navigate('NewQuestion')} />

				<BasicButton 
					text="Start Quiz"
					onPress={() => navigator.navigate('Quiz')} />
			</Container>
		)
	}
}

export default DeckDetail