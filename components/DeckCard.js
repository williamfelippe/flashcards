import React from 'react'
import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'
import { TouchableHighlight } from 'react-native'
import {
    colorWhite,
    colorBase,
    colorBlack,
    colorTextDefault,
    colorIce
} from '../constants/colors.js'
import getAmountOfQuestions from '../utils/getAmountOfQuestions.js'
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
    color: colorTextDefault
})

const DeckCardInfo = glamorous.text({
    fontSize: 14,
    color: colorTextDefault,
    opacity: 0.6
})

const DeckCard = ({ deck, navigation }) => {

    return (
        <DeckCardTouchableHighlight 
            onPress={() => navigation.navigate('DeckDetail', { deck })} 
            underlayColor={colorIce}>
            <DeckCardView>
                <DeckCardTitle>
                    {deck && deck.title.toUpperCase()}
                </DeckCardTitle>

                <DeckCardInfo>
                    {deck && getAmountOfQuestions(deck.questions)}
                </DeckCardInfo>
            </DeckCardView>
        </DeckCardTouchableHighlight>
    )
}

DeckCard.propTypes = {
    deck: PropTypes.object.isRequired
}

export default DeckCard