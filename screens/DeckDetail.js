import React, { Component } from 'react'
import { Container, BasicButton } from '../components'
import { Text, View } from 'react-native'
import { colorTextDefault, colorGreen, colorRed } from '../constants/colors.js'
import getAmountOfQuestions from '../utils/getAmountOfQuestions.js'
import glamorous from 'glamorous-native'

const DeckDetailView = glamorous.view({
	flexGrow: 1,
	justifyContent: 'center',
	alignItems: 'center'
})

const DeckDetailTitle = glamorous.text({
	fontFamily: 'ubuntu-bold',
	fontSize: 40,
	fontWeight: '900',
	marginBottom: 10,
	color: colorTextDefault,
	textAlign: 'center'
})

const DeckDetailInfo = glamorous.text({
	fontSize: 20,
	color: colorTextDefault,
	opacity: 0.7,
	textAlign: 'center'
})

class DeckDetail extends Component {
	render() {
		const { navigation } = this.props
		const { deck } = navigation.state.params

		return (
			<Container>
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
							onPress={() => navigation.navigate('NewQuestion', { deck })} />

						<BasicButton
							text="Start Quiz"
							backgroundColor={colorGreen}
							onPress={() => navigation.navigate('Quiz', { deck })} />
					</View>
				</View>
			</Container>
		)
	}
}

export default DeckDetail