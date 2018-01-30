import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, BasicButton } from '../components'
import { Text, View } from 'react-native'
import { colorGreen, colorRed } from '../constants/colors.js'
import getAmountOfQuestions from '../utils/getAmountOfQuestions.js'
import glamorous from 'glamorous-native'

const DeckDetailView = glamorous.view({
	flexGrow: 1,
	justifyContent: 'center',
	alignItems: 'center'
})

const DeckDetailTitle = glamorous.text(
	{
		fontSize: 40,
		marginBottom: 10,
		textAlign: 'center'
	},
	(props, theme) => ({
		color: theme.colors.colorTextDefault,
		fontFamily: theme.fonts.primaryFontBold
	})
)

const DeckDetailInfo = glamorous.text(
	{
		fontSize: 20,
		opacity: 0.7,
		textAlign: 'center'
	},
	(props, theme) => ({
		color: theme.colors.colorTextDefault
	})
)

class DeckDetail extends Component {
	render() {
		const { deck, navigation } = this.props

		return (
			<Container>
				{
					(deck) &&
					<View style={{ flex: 1 }}>
						<DeckDetailView>
							<DeckDetailTitle>
								{deck.title.toUpperCase()}
							</DeckDetailTitle>

							<DeckDetailInfo>
								{getAmountOfQuestions(deck.questions)}
							</DeckDetailInfo>
						</DeckDetailView>

						<View>
							<BasicButton
								text="Add Card"
								backgroundColor={colorRed}
								onPress={() => navigation.navigate('NewQuestion', { deckTitle: deck.title })} />

							<BasicButton
								text="Start Quiz"
								backgroundColor={colorGreen}
								onPress={() => navigation.navigate('Quiz', { deckTitle: deck.title })} />
						</View>
					</View>
				}
			</Container>
		)
	}
}

const mapStateToProps = ({ decks }, { navigation }) => {
	const { byId } = decks
	const { deckTitle } = navigation.state.params

	return {
		deck: byId[deckTitle]
	}
}

export default connect(mapStateToProps)(DeckDetail)