import React from 'react'
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons'
import { colorWhite, colorTransparent } from '../constants/colors'
import glamorous from 'glamorous-native'

const TouchableHighlight = glamorous.TouchableHighlight

const SearchButton = (onPress) => {
    return (
        <TouchableHighlight 
            onPress={onPress} 
            underlayColor={colorTransparent}>
            <Feather
                name="search"
                color={colorWhite}
                size={15} />
        </TouchableHighlight>
    )
}

SearchButton.propTypes = {
    onPress: PropTypes.func.isRequired
}

export default SearchButton