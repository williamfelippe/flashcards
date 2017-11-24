import PropTypes from 'prop-types'
import glamorous from 'glamorous-native'
import { colorWhite, colorPrimary } from '../constants/colors.js'

const BasicButtonTouchableHighlight = glamorous.touchableHighlight({
    borderRadius: 4,
    padding: '15px 30px',
    backgroundColor: colorPrimary
})

const BasicButton = ({ text, onPress }) => {
    <BasicButtonTouchableHighlight onPress={onPress}>
        <Text>
            {text}
        </Text>
    </BasicButtonTouchableHighlight>
}

BasicButton.propTypes = {
    text: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
}

export default BasicButton
