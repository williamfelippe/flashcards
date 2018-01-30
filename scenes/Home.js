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
        this.setState({ loading: true }, () => {
            this.recoverDecks()
        })
    }

    recoverDecks() {
        const { setDecks } = this.props
        getDecks()
            .then(JSON.parse)
            .then(decks => {
                console.log('RECOVER DECKS', decks)
                this.setState({ loading: false }, () => {
                    setDecks((decks) ? Object.values(decks) : [])
                })
            })
            .catch(error => {
                this.setState({ loading: false }, () => {
                    setDecks([])
                })
            })
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
    setDecks: (decks) => dispatch(decksActions.setDecks(decks))
})

export default connect(null, mapDispatchToProps)(Home)