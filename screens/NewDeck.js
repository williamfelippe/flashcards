import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { BasicButton, Container } from '../components'
import { decks as decksActions } from '../actions'
import { 
    addDeck as createDeck, 
    getDeck 
} from '../utils/session.js'
import {
    colorBase,
    colorWhite,
    colorPrimary,
    colorBlack,
    colorAccent
} from '../constants/colors.js'
import glamorous from 'glamorous-native'

const NewDeckView = glamorous.view({
    backgroundColor: colorBase,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    padding: 16
})

const NewDeckTitle = glamorous.text({
    fontFamily: 'ubuntu-bold',
    fontSize: 35,
    textAlign: 'center',
    color: colorBlack,

    marginBottom: 40
})

const NewDeckInput = glamorous.textInput({
    padding: 10,
    alignSelf: 'stretch',

    fontSize: 20
})

class NewDeck extends Component {
    constructor() {
        super()
        this.state = {
            deckTitle: ''
        }
    }

    async saveDeckInformations() {
        const { deckTitle } = this.state

        if (deckTitle !== '') {
            await createDeck(deckTitle)
            const deck = await getDeck(deckTitle)

            if (deck) {
                const { screenProps, addDeck } = this.props
                const { rootNavigation } = screenProps

                const deckObject = JSON.parse(deck)
                
                console.log('DECK', deckObject)
                addDeck(deckObject)
                rootNavigation.navigate('DeckDetail', { deckObject })

                return
            }

            //Fazer algo se não recuperou o deck
            return
        }

        //Fazer algo se o título é vazio
        return
    }

    render() {
        const { deckTitle } = this.state

        return (
            <Container>
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    style={{ flex: 1 }}
                    contentContainerStyle={{ flex: 1 }}
                    scrollEnabled={false}>
                    <NewDeckView>
                        <NewDeckTitle>
                            What is the title of your new deck?
                        </NewDeckTitle>

                        <NewDeckInput
                            placeholder="Deck title"
                            autoCorrect
                            autoCapitalize="sentences"
                            returnKeyType="go"
                            value={deckTitle}
                            selectionColor={colorAccent}
                            underlineColorAndroid={colorAccent}
                            onSubmitEditing={() => this.saveDeckInformations()}
                            onChangeText={(deckTitle) => this.setState({ deckTitle })} />
                    </NewDeckView>

                    <BasicButton
                        text="Submit"
                        onPress={() => this.saveDeckInformations()} />
                </KeyboardAwareScrollView>
            </Container>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    addDeck: (deck) => dispatch(decksActions.addDeck(deck))
})

export default connect(null, mapDispatchToProps)(NewDeck)