import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput } from 'react-native'
import { BasicButton, Container } from '../components'
import { colorRed, colorAccent, colorTextDefault } from '../constants/colors.js'
import { addCardToDeck } from '../utils/session.js'
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

    onPress() {
        const { navigation } = this.props
        const { deck } = navigation.state.params
        
        addCardToDeck(deck.name, card)
            .then(() => {
                
            })
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
                            {deck.name}
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
                            underlineColorAndroid={colorAccent}
                            onChangeText={(answer) => this.setState({ answer })} />
                    </NewQuestionInputsContainer>

                    <BasicButton
                        text="Submit"
                        backgroundColor={colorRed}
                        onPress={() => onPress()} />
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

export default NewQuestion