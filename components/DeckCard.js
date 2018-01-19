import React from 'react'
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation'
import { TouchableHighlight } from 'react-native'
import {
    colorIce,
    colorRed,
    colorGreen
} from '../constants/colors.js'
import getAmountOfQuestions from '../utils/getAmountOfQuestions.js'
import glamorous from 'glamorous-native'

const DeckCardTouchableHighlight = glamorous.touchableHighlight(
    {
        borderRadius: 5,
        marginBottom: 10,
        elevation: 3,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            height: 1,
            width: 0.3
        }
    },
    (props, theme) => ({
        backgroundColor: theme.colors.colorWhite,
        shadowColor: theme.colors.colorBlack
    })
)

const DeckCardView = glamorous.view({
    minHeight: 150
})

const DeckCardIconView = glamorous.view({
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingTop: 10,
    paddingRight: 5
})

const DeckCardContentView = glamorous.view({
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
})

const DeckCardTitle = glamorous.text(
    {
        fontFamily: 'ubuntu-bold',
        fontSize: 25,
        fontWeight: '900',
        marginBottom: 10,
        textAlign: 'center',
        alignSelf: 'center',
        opacity: 0.7
    },
    (props, theme) => ({
        color: theme.colors.colorTextDefault
    })
)

const DeckCardInfo = glamorous.text(
    {
        fontSize: 14,
        opacity: 0.6
    },
    (props, theme) => ({
        color: theme.colors.colorTextDefault
    })
)

const DeckCard = ({ deck, navigation }) => {

    const renderCircles = () => {
        const { questions } = deck

        if (questions.length > 0) {
            return deck.questions.map((question, key) => {
                return (
                    <Feather
                        key={key}
                        name="circle"
                        color={colorRed}
                        style={{ marginRight: 5 }}
                        size={15} />
                )
            })
        }

        return (
            <Feather
                name="circle"
                color={colorGreen}
                style={{ marginRight: 5 }}
                size={15} />
        )
    }

    return (
        <DeckCardTouchableHighlight
            onPress={() => navigation.navigate('DeckDetail', { deck })}
            underlayColor={colorIce}>
            <DeckCardView>
                <DeckCardIconView>
                    {renderCircles()}
                </DeckCardIconView>

                <DeckCardContentView>
                    <DeckCardTitle>
                        {deck && deck.title.toUpperCase()}
                    </DeckCardTitle>

                    <DeckCardInfo>
                        {deck && getAmountOfQuestions(deck.questions)}
                    </DeckCardInfo>
                </DeckCardContentView>
            </DeckCardView>
        </DeckCardTouchableHighlight>
    )
}

DeckCard.propTypes = {
    deck: PropTypes.object.isRequired
}

export default DeckCard