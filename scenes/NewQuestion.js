import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitAction } from '../strings/actions'
import { cantBeEmptyError } from '../strings/errors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { decks as decksActions } from '../actions'
import { addCardToDeck } from '../utils/session.js'
import { Text, Modal } from 'react-native'
import { colorRed, colorAccent } from '../constants/colors.js'
import { answerLabel, questionLabel } from '../strings/labels'
import { BasicButton, BasicModal, BasicInput, Container } from '../components'
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
            errorMessage: cantBeEmptyError(question === '' 
                ? questionLabel 
                : answerLabel),
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
                            placeholder={questionLabel}
                            autoCorrect
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            value={question}
                            underlineColorAndroid={colorAccent}
                            onChangeText={(question) => this.setState({ question })} />

                        <BasicInput
                            placeholder={answerLabel}
                            autoCorrect
                            autoCapitalize="sentences"
                            returnKeyType="go"
                            value={answer}
                            onSubmitEditing={() => this.submitQuestion()}
                            underlineColorAndroid={colorAccent}
                            onChangeText={(answer) => this.setState({ answer })} />
                    </NewQuestionInputsContainer>

                    <BasicButton
                        text={submitAction}
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