import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import { Container, DeckCard, BasicButton } from '../components'
import { defaultPadding } from '../constants/dimens.js'
import { colorTextDefault } from '../constants/colors.js'
import glamorous from 'glamorous-native'

const DecksList = glamorous.flatList({
    padding: defaultPadding
})

const NoDecksView = glamorous.view({
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40
})

const NoDecksText = glamorous.text(
    {
        fontSize: 40,
        textAlign: 'center',

        opacity: 0.6,
        marginBottom: 30
    },
	(props, theme) => ({
        color: theme.colors.colorTextDefault,
        fontFamily: theme.fonts.primaryFontLight
	})
)

const NoDecks = ({ navigation }) => {
    return (
        <Container>
            <NoDecksView>
                <NoDecksText>
                    No decks at the moment
                </NoDecksText>

                <BasicButton
                    text="Create your first"
                    onPress={() => navigation.navigate('NewDeck')} />
            </NoDecksView>
        </Container>
    )
}

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