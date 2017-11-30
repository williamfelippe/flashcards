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
        borderRadius: 5
    },
    ({ backgroundColor }) => ({
        backgroundColor: backgroundColor ? backgroundColor : colorPrimary
    })
)

const BasicButtonText = glamorous.text(
    {
        fontSize: 20
    },
    ({ textColor }) => ({
        color: textColor ? textColor : colorWhite
    })
)

const BasicButton = ({
    text,
    onPress,
    textColor,
    backgroundColor,
    underlayColor
}) => {
    return (
        <BasicButtonTouchableHighlight
            onPress={onPress}
            backgroundColor={backgroundColor}
            underlayColor={
                (underlayColor)
                    ? underlayColor
                    : colorPrimaryDark
            }>
            <BasicButtonText textColor={textColor}>
                {text}
            </BasicButtonText>
        </BasicButtonTouchableHighlight>
    )
}

BasicButton.defaultProps = {
    textColor: null,
    backgroundColor: null,
    underlayColor: null
}

BasicButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    underlayColor: PropTypes.string
}

export default BasicButton
