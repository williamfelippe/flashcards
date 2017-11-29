import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Container, DeckCard } from '../components'

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