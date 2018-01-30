import React from 'react'
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons'
import { 
    colorWhite, 
    colorDarkGreen, 
    colorDarkRed 
} from '../constants/colors.js'
import glamorous from 'glamorous-native'

const VoteTouchableHighlight = glamorous.touchableHighlight(
    {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ({ positive }, theme) => ({
        backgroundColor: positive
            ? theme.colors.colorGreen
            : theme.colors.colorRed
    })
)

const VoteTouchableText = glamorous.text(
    {}, (props, theme) => ({
        color: theme.colors.colorWhite
    })
)

const VoteButton = ({ positive, onPress }) => {
    return (
        <VoteTouchableHighlight
            positive={positive}
            onPress={onPress}
            underlayColor={positive ? colorDarkGreen : colorDarkRed}>
            <Feather
                name={positive ? "check" : "x"}
                color={colorWhite}
                size={40} />
        </VoteTouchableHighlight>
    )
}

VoteButton.defaultProps = {
    positive: false
}

VoteButton.propTypes = {
    positive: PropTypes.bool,
    onPress: PropTypes.func.isRequired
}

export default VoteButton