import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous-native'
import { colorWhite, colorPrimary, colorPrimaryDark } from '../constants/colors.js'

const BasicButtonTouchableHighlight = glamorous.touchableHighlight(
    {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        marginBottom: 10
    },
    ({ backgroundColor }) => ({ backgroundColor })
)

const BasicButtonText = glamorous.text(
    {
        fontWeight: '700',
        textAlign: 'center'
    },
    ({ textColor, fontSize }) => ({
        color: textColor,
        fontSize
    })
)

const BasicButton = ({
    text,
    onPress,
    textColor,
    backgroundColor,
    underlayColor,
    fontSize
}) => {
    return (
        <BasicButtonTouchableHighlight
            onPress={onPress}
            backgroundColor={backgroundColor}
            underlayColor={underlayColor}>
            <BasicButtonText 
                textColor={textColor}
                fontSize={fontSize}>
                {text.toUpperCase()}
            </BasicButtonText>
        </BasicButtonTouchableHighlight>
    )
}

BasicButton.defaultProps = {
    textColor: colorWhite,
    backgroundColor: colorPrimary,
    underlayColor: colorPrimaryDark,
    fontSize: 18
}

BasicButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    underlayColor: PropTypes.string,
    fontSize: PropTypes.number
}

export default BasicButton
