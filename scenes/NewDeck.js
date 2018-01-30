import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, Modal } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { BasicButton, BasicInput, Container } from '../components'
import { decks as decksActions } from '../actions'
import { addDeck as createDeck } from '../utils/session.js'
import { colorAccent } from '../constants/colors.js'
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

const NewDeckModalContainer = glamorous.view(
    {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey'
    }
)

const NewDeckInnerContainer = glamorous.view(
    {
        alignItems: 'center'
    }
)

class NewDeck extends Component {
    constructor() {
        super()
        this.state = {
            deckTitle: '',
            isAlertModalOpen: false
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

            rootNavigation.navigate('DeckDetail', { deck })
            return
        }

        this.openAlertModal()
        return
    }

    openAlertModal() {
        this.setState({ isAlertModalOpen: true })
    }

    closeAlertModal() {
        this.setState({ isAlertModalOpen: false })
    }

    render() {
        const { deckTitle, isAlertModalOpen } = this.state

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

                        <BasicInput
                            placeholder="Deck title"
                            autoCorrect
                            autoCapitalize="sentences"
                            returnKeyType="go"
                            value={deckTitle}
                            onSubmitEditing={() => this.saveDeckInformations()}
                            onChangeText={(deckTitle) => this.setState({ deckTitle })} />
                    </NewDeckView>

                    <BasicButton
                        text="Submit"
                        onPress={() => this.saveDeckInformations()} />

                    <Modal
                        visible={isAlertModalOpen}
                        animationType={'slide'}
                        onRequestClose={() => this.closeAlertModal()}>
                        <NewDeckModalContainer>
                            <NewDeckInnerContainer>
                                <Text>
                                    Title can't be empty
                                </Text>
                                <BasicButton
                                    onPress={() => this.closeAlertModal()}
                                    text="Ok" />
                            </NewDeckInnerContainer>
                        </NewDeckModalContainer>
                    </Modal>
                </KeyboardAwareScrollView>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addDeck: (deck) => dispatch(decksActions.addDeck(deck))
})

export default connect(null, mapDispatchToProps)(NewDeck)