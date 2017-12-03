import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeNavigation } from '../navigation'
import { getDecks, getDeck } from '../utils/session.js'
import { decks as decksActions } from '../actions'

class Home extends Component {

    componentDidMount() {
        this.recoverDecks()
    }

    async recoverDecks() {
        const decks = await getDecks()
        console.log('DECKS', decks)

        for (const deckTitle of decks) {
            const deck = await getDeck(deckTitle)
            if (deck) {
                console.log('DECK', deck)

                /*const { addDeck } = this.props
                addDeck(deck)*/
            }
        }
    }

    render() {
        const { navigation } = this.props

        return (
            <HomeNavigation
                screenProps={{
                    rootNavigation: navigation
                }} />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addDeck: (deck) => dispatch(decksActions.addDeck(deck))
})

export default connect(null, mapDispatchToProps)(Home)