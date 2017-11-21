import PropTypes from 'prop-types'
import glamorous from 'glamorous-native'
import { white, green, red } from '../constants/colors'
import { Feather } from '@expo/vector-icons'

const VoteTouchableHighlight = glamorous.touchableHighlight(
    {
        color: white,
        borderRadius: '50%',
        padding: 30
    },
    (props) => {
        backgroundColor: props.positive ? green : red
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