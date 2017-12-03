import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Container, DeckCard } from '../components'

const data = [
    { 
        name: 'New deck', 
        questions: []
    }, 
    { 
        name: 'New deck 2', 
        questions: []
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
                            <DeckCard 
                                deck={item} 
                                navigation={rootNavigation} />
                        )
                    }} />
            </Container>
        )
    }
}

export default Decks