import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitAction, okAction } from '../strings/actions'
import { titleOfDeckLabel } from '../strings/labels'
import { titleCantBeEmptyError } from '../strings/errors'
import { whatsTheNameOfYourNewDeckTitle, alertTitle } from '../strings/titles'
import { Text, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { BasicButton, BasicInput, Container } from '../components'
import { decks as decksActions } from '../actions'
import { addDeck as createDeck } from '../utils/session.js'
import glamorous from 'glamorous-native'

const NewDeckView = glamorous.view(
    {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        padding: 16
    },
    (props, theme) => ({
        backgroundColor: theme.colors.colorBase
    })
)

const NewDeckTitle = glamorous.text(
    {
        fontSize: 35,
        textAlign: 'center',

        marginBottom: 40
    },
    (props, theme) => ({
        color: theme.colors.colorBlack,
        fontFamily: theme.fonts.primaryFontBold
    })
)

const NewDeckInput = glamorous.textInput(
    {
        padding: 10,
        alignSelf: 'stretch',
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 5
    },
    (props, theme) => ({
        borderColor: theme.colors.colorGray,
        backgroundColor: theme.colors.colorWhite
    })
)

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
            const deck = { title: deckTitle, questions: [] }
            await createDeck(deck)

            const { addDeck, screenProps } = this.props
            const { rootNavigation } = screenProps
            addDeck(deck)

            rootNavigation.navigate('DeckDetail', { deckTitle: deck.title })
            return
        }

        this.openAlertModal()
        return
    }

    openAlertModal() {
        Alert.alert(
            alertTitle,
            titleCantBeEmptyError,
            [{ text: okAction }],
            { cancelable: false }
        )
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
                            {whatsTheNameOfYourNewDeckTitle}
                        </NewDeckTitle>

                        <BasicInput
                            placeholder={titleOfDeckLabel}
                            autoCorrect
                            autoCapitalize="sentences"
                            returnKeyType="go"
                            value={deckTitle}
                            onSubmitEditing={() => this.saveDeckInformations()}
                            onChangeText={(deckTitle) => this.setState({ deckTitle })} />
                    </NewDeckView>

                    <BasicButton
                        text={submitAction}
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