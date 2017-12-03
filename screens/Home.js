import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeNavigation } from '../navigation'
import { Loader } from '../components'
import { getDecks, getDeck } from '../utils/session.js'
import { decks as decksActions } from '../actions'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => this.recoverDecks())
    }

    async recoverDecks() {
        const decks = await getDecks()

        for (const deckTitle of decks) {
            const deck = await getDeck(deckTitle)
            if (deck) {
                const { addDeck } = this.props
                addDeck(JSON.parse(deck))
            }
        }

        this.setState({ loading: false })
    }

    render() {
        const { loading } = this.state
        const { navigation } = this.props

        return (
            (loading)
                ? <Loader />
                : <HomeNavigation
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