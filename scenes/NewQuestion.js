import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, Modal } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { BasicButton, BasicModal, BasicInput, Container } from '../components'
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

class NewQuestion extends Component {
    constructor() {
        super()
        this.state = {
            question: '',
            answer: '',
            errorMessage: '',
            isAlertModalOpen: false
        }
    }

    async submitQuestion() {
        const { deck, updateDeck, navigation } = this.props
        const { title } = deck

        const { question, answer } = this.state
        if (question !== '' && answer !== '') {
            const card = { question, answer }

            await addCardToDeck(title, card)
            updateDeck({
                ...deck,
                questions: deck.questions.concat(card),
            })

            navigation.goBack()
            return
        }

        this.setState({
            errorMessage: `${question === '' ? 'Question' : 'Answer'} can't be empty`,
            isAlertModalOpen: true
        })
    }

    closeAlertModal() {
        this.setState({ 
            isAlertModalOpen: false, 
            errorMessage: '' 
        })
    }

    render() {
        const { deck } = this.props
        const {
            question,
            answer,
            errorMessage,
            isAlertModalOpen
        } = this.state

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

                    <BasicModal
                        message={errorMessage}
                        isAlertModalOpen={isAlertModalOpen}
                        closeAlertModal={() => this.closeAlertModal()} />
                </KeyboardAwareScrollView>
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

const mapDispatchToProps = dispatch => ({
    updateDeck: (deck) => dispatch(decksActions.updateDeck(deck))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)