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

const NoDecksText = glamorous.text({
    fontFamily: 'ubuntu-light',
    fontSize: 40,
    textAlign: 'center',
    color: colorTextDefault,

    opacity: 0.6,
    marginBottom: 30
})

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
        const { allIds, byId, navigation } = this.props
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
                                deck={byId[item]}
                                navigation={rootNavigation} />
                        )
                    }} />
        )
    }
}


const mapStateToProps = ({ decks }) => {
    const { byId, allIds } = decks

    return {
        byId,
        allIds
    }
}

export default connect(mapStateToProps)(Decks)