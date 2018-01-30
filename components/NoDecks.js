import React from 'react'
import PropTypes from 'prop-types'
import { Container, BasicButton } from '../components'
import { createYourFirstAction } from '../strings/actions'
import { noDecksAtTheMomentLabel } from '../strings/labels'
import glamorous from 'glamorous-native'

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
                    {noDecksAtTheMomentLabel}
                </NoDecksText>

                <BasicButton
                    text={createYourFirstAction}
                    onPress={() => navigation.navigate('NewDeck')} />
            </NoDecksView>
        </Container>
    )
}

NoDecks.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default NoDecks