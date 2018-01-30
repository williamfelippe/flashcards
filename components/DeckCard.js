import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation'
import {
    TouchableHighlight,
    Animated,
    Easing
} from 'react-native'
import {
    colorIce,
    colorRed,
    colorGreen,
    colorGray
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

const DeckCardView = glamorous(Animated.View)(
    {
        minHeight: 150
    },
    (props) => ({
        opacity: props.style.opacity
    })
)

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

class DeckCard extends Component {

    constructor(props) {
        super()
        this.state = {
            opacity: new Animated.Value(1)
        }
    }

    handleDeckDetail() {
        const { opacity } = this.state

        Animated.sequence([
            Animated.timing(
                opacity,
                {
                    duration: 300,
                    toValue: 0,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
            Animated.timing(
                opacity,
                {
                    duration: 300,
                    toValue: 1,
                    easing: Easing.linear,
                    useNativeDriver: true
                })
        ]).start(() => this.changeScreen())
    }

    changeScreen() {
        const { navigation, deck } = this.props
        navigation.navigate('DeckDetail', { deckTitle: deck.title })
    }

    renderCircles() {
        const { deck } = this.props
        const { questions } = deck
        const questionLength = questions.length

        if (questionLength > 0) {
            if (questionLength <= 7) {
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
                    key={key}
                    name="plus-circle"
                    color={colorGreen}
                    style={{ marginRight: 5 }}
                    size={15} />
            )
        }

        return (
            <Feather
                name="minus-circle"
                color={colorGray}
                style={{ marginRight: 5 }}
                size={15} />
        )
    }

    render() {
        const { deck, navigation } = this.props
        const { opacity } = this.state

        return (
            <DeckCardTouchableHighlight
                onPress={() => this.handleDeckDetail()}
                underlayColor={colorIce}>
                <DeckCardView style={{ opacity }}>
                    <DeckCardIconView>
                        {this.renderCircles()}
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
            </DeckCardTouchableHighlight >
        )
    }
}

DeckCard.propTypes = {
    deck: PropTypes.object.isRequired
}

export default DeckCard