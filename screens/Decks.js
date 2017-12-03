import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Container, DeckCard } from '../components'
import { getDecks } from '../utils/session.js'

const data = [
    { 
        name: 'New deck', 
        amount: 3 
    }, 
    { 
        name: 'New deck 2', 
        amount: 1 
    }
]

class Decks extends Component {

    async componentDidMount() {
        const decks = await getDecks()
        console.log('DECKS', decks)
    }

    render() {
        const { rootNavigation } = this.props.screenProps
        
        return (
            <Container>
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <DeckCard deck={item} navigation={rootNavigation} />
                        )
                    }} />
            </Container>
        )
    }
}

export default Decks