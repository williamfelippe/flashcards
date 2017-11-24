import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous-native'
import { Feather } from '@expo/vector-icons'
import { colorWhite, colorGreen, colorRed } from '../constants/colors.js'

const VoteTouchableHighlight = glamorous.touchableHighlight(
    {
        borderRadius: 50,
        padding: 30
    },
    (props) => {
        backgroundColor: props.positive ? colorGreen : colorRed
    }
)

const VoteButton = ({ positive }) => {
    <VoteTouchableHighlight>
        <Feather name={positive ? "check" : "x"} />
    </VoteTouchableHighlight>
}

VoteButton.defaultProps = {
    positive: false
}

VoteButton.propTypes = {
    positive: PropTypes.bool
}

export default VoteButton