import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { BasicButton } from '../components'
import {
    colorBase,
    colorWhite,
    colorPrimary,
    colorBlack
} from '../constants/colors.js'
import glamorous from 'glamorous-native'

const NewDeckView = glamorous.view({
    backgroundColor: colorBase,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 16
})

const NewDeckTitle = glamorous.text({
    fontFamily: 'ubuntu-bold',
    fontSize: 35,
    textAlign: 'center',
    color: colorBlack,

    marginBottom: 20
})

const NewDeckInput = glamorous.textInput({
    height: 40,
    alignSelf: 'stretch',
    marginBottom: 20,

    fontSize: 17,
    borderColor: colorPrimary
})

class NewDeck extends Component {
    constructor() {
        super()
        this.state = {
            deckTitle: ''
        }
    }

    onPress() {

    }

    render() {
        return (

            <NewDeckView>
                <KeyboardAvoidingView behavior="height">
                    <NewDeckTitle>
                        What is the title of your new deck?
                    </NewDeckTitle>

                    <NewDeckInput
                        placeholder="Deck title"
                        onChangeText={(deckTitle) => this.setState({ deckTitle })} />
                </KeyboardAvoidingView>

                <BasicButton
                    text="Submit"
                    onPress={() => this.onPress()} />
            </NewDeckView>
        )
    }
}

export default NewDeck