import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { BasicButton, BasicInput, Container } from '../components'
import { colorRed, colorAccent } from '../constants/colors.js'
import { addCardToDeck } from '../utils/session.js'
import { decks as decksActions } from '../actions'
import glamorous from 'glamorous-native'

const NewQuestionTitle = glamorous.text(
    {
        fontSize: 35,
        textAlign: 'center',
        opacity: 0.6,

        marginBottom: 20
    },
    (props, theme) => ({
        fontFamily: theme.fonts.primaryFontBold,
        color: theme.colors.colorTextDefault
    })
)

const NewQuestionInputsContainer = glamorous.view({
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
})

const NewQuestionInput = glamorous.textInput({
    alignSelf: 'stretch',
    padding: 10,
    fontSize: 20,
    marginBottom: 20
})

class NewQuestion extends Component {
    constructor() {
        super()
        this.state = {
            question: '',
            answer: ''
        }
    }

    async submitQuestion() {
        const { navigation, updateDeck } = this.props
        const { deck } = navigation.state.params
        const { title } = deck

        const { question, answer } = this.state
        const card = { question, answer }

        console.log('Pergunta', card)
        await addCardToDeck(title, card)

        updateDeck({
            ...deck,
            questions: deck.questions.concat(card),
        })

        navigation.goBack()
    }

    render() {
        const { navigation } = this.props
        const { question, answer } = this.state
        const { deck } = navigation.state.params

        return (
            <Container>
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    style={{ flex: 1 }}
                    contentContainerStyle={{ flex: 1 }}
                    scrollEnabled={false}>
                    <NewQuestionInputsContainer>
                        <NewQuestionTitle>
                            {deck.title}
                        </NewQuestionTitle>

                        <BasicInput
                            placeholder="Question"
                            autoCorrect
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            value={question}
                            underlineColorAndroid={colorAccent}
                            onChangeText={(question) => this.setState({ question })} />

                        <BasicInput
                            placeholder="Answer"
                            autoCorrect
                            autoCapitalize="sentences"
                            returnKeyType="go"
                            value={answer}
                            onSubmitEditing={() => this.submitQuestion()}
                            underlineColorAndroid={colorAccent}
                            onChangeText={(answer) => this.setState({ answer })} />
                    </NewQuestionInputsContainer>

                    <BasicButton
                        text="Submit"
                        backgroundColor={colorRed}
                        onPress={() => this.submitQuestion()} />
                </KeyboardAwareScrollView>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateDeck: (deck) => dispatch(decksActions.updateDeck(deck))
})

export default connect(null, mapDispatchToProps)(NewQuestion)