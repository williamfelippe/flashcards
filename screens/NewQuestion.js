import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { BasicButton, Container } from '../components'
import { colorRed, colorAccent, colorTextDefault } from '../constants/colors.js'
import { addCardToDeck, getDeck } from '../utils/session.js'
import { questions as questionsActions } from '../actions'
import glamorous from 'glamorous-native'

const NewQuestionTitle = glamorous.text({
    fontFamily: 'ubuntu-bold',
    fontSize: 35,
    textAlign: 'center',
    color: colorTextDefault,
    opacity: 0.6,

    marginBottom: 20
})

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
        const { navigation, addQuestion } = this.props
        const { deck } = navigation.state.params
        const { title } = deck

        const { question, answer } = this.state
        await addCardToDeck(title, { question, answer })
        const deckString = await getDeck(title)
        
        const deckObject = JSON.parse(deckString)
        console.log('NEW QUESTION DECK', deckObject)
        addQuestion(deckObject.title, { question, answer })

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

                        <NewQuestionInput
                            placeholder="Question"
                            autoCorrect
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            value={question}
                            underlineColorAndroid={colorAccent}
                            onChangeText={(question) => this.setState({ question })} />

                        <NewQuestionInput
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
    addQuestion: (deckTitle, card) => dispatch(questionsActions.addQuestion(deckTitle, card))
})

export default connect(null, mapDispatchToProps)(NewQuestion)