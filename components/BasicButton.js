import React from 'react'
import PropTypes from 'prop-types'
import { 
    colorWhite, 
    colorPrimary, 
    colorPrimaryDark 
} from '../constants/colors.js'
import glamorous from 'glamorous-native'

const BasicButtonTouchableHighlight = glamorous.touchableHighlight(
    {
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 7,
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
    fontSize: 14,
    text: ''
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
