import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DeckCard, NoDecks } from '../components'
import glamorous from 'glamorous-native'

const DecksList = glamorous.flatList({},
    (props, theme) => ({
        padding: theme.dimens.defaultPadding
    })
)

class Decks extends Component {
    render() {
        const { allIds, decksById, navigation } = this.props
        const { rootNavigation } = this.props.screenProps

        return (
            (allIds.length <= 0)
                ? <NoDecks navigation={navigation} />
                : <DecksList
                    keyExtractor={(item, index) => index}
                    data={allIds}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    renderItem={({ item }) => {
                        return (
                            <DeckCard
                                deck={decksById[item]}
                                navigation={rootNavigation} />
                        )
                    }} />
        )
    }
}


const mapStateToProps = ({ decks }) => {
    const { byId, allIds } = decks

    return {
        decksById: byId,
        allIds
    }
}

export default connect(mapStateToProps)(Decks)