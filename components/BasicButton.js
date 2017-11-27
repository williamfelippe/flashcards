import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous-native'
import { colorWhite, colorPrimary } from '../constants/colors.js'

const BasicButtonTouchableHighlight = glamorous.touchableHighlight({
    backgroundColor: colorPrimary,

    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5
})

const BasicButtonText = glamorous.text({
    color: colorWhite,
    fontSize: 20
})

const BasicButton = ({ text, onPress }) => {
    return (
        <BasicButtonTouchableHighlight onPress={onPress}>
            <BasicButtonText>
                {text}
            </BasicButtonText>
        </BasicButtonTouchableHighlight>
    )
}

BasicButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default BasicButton
