import React from 'react'
import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'
import { TouchableHighlight } from 'react-native'
import {
    colorWhite,
    colorBase,
    colorBlack,
    colorTextDefault,
    colorGreen
} from '../constants/colors.js'
import glamorous from 'glamorous-native'

const DeckCardTouchableHighlight = glamorous.touchableHighlight({
    backgroundColor: colorWhite,
    marginBottom: 10,
    elevation: 3,
    shadowColor: colorBlack,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0.3
    }
})

const DeckCardView = glamorous.view({
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150
})

const DeckCardTitle = glamorous.text({
    fontFamily: 'ubuntu-bold',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 10,
    color: colorBlack
})

const DeckCardInfo = glamorous.text({
    fontSize: 14,
    color: colorTextDefault
})

const DeckCard = ({ deck, navigation }) => {

    return (
        <DeckCardTouchableHighlight 
            onPress={() => navigation.navigate('DeckDetail', { deck })} 
            underlayColor={colorGreen}>
            <DeckCardView>
                <DeckCardTitle>
                    {deck.name.toUpperCase()}
                </DeckCardTitle>

                <DeckCardInfo>
                    {deck.amount} cards
                </DeckCardInfo>
            </DeckCardView>
        </DeckCardTouchableHighlight>
    )
}

DeckCard.propTypes = {
    deck: PropTypes.object.isRequired
}

export default DeckCard