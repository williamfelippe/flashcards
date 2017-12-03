import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, TextInput } from 'react-native'
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
        const { navigation } = this.props
        const { deck } = navigation.state.params
        const { title } = deck

        await addCardToDeck(title, card)
        const deckString = await getDeck(title)
        
        const deckObject = JSON.parse(deckString)
        addQuestion(deckObject.title, deckObject.questions)
    }

    render() {
        const { navigation } = this.props
        const { deck } = navigation.state.params
        const { question, answer } = this.state

        return (
            <Container>
                <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
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
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addQuestion: (deckTitle, card) => dispatch(questionsActions.addQuestion(deckTitle, card))
})

export default connect(null, mapDispatchToProps)(NewQuestion)