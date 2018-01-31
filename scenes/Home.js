import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeNavigation } from '../navigation'
import { Loader, SearchButton } from '../components'
import { getDecks, getDeck } from '../utils/session.js'
import { decks as decksActions } from '../actions'

class Home extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        headerRight: <SearchButton onPress={
            () => this.setState({
                searching: true
            })
        } />
    })

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            searching: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            this.recoverDecks()
        })
    }

    recoverDecks() {
        const { resetDecks, setDecks } = this.props

        resetDecks()

        getDecks()
            .then(JSON.parse)
            .then(decks => {
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
        const { loading, searching } = this.state
        const { navigation } = this.props

        return (
            (loading)
                ? <Loader />
                : <HomeNavigation
                    screenProps={{
                        rootNavigation: navigation,
                        searching
                    }} />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    resetDecks: () => dispatch(decksActions.resetDecks()),
    setDecks: (decks) => dispatch(decksActions.setDecks(decks))
})

export default connect(null, mapDispatchToProps)(Home)