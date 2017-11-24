import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colorPrimary } from '../constants/colors.js'
import glamorous from 'glamorous-native'

const LoaderView = glamorous.view({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
})

const Loader = () => {
    return (
        <LoaderView>
            <Feather
                name="loader"
                color={colorPrimary}
                size={40} />
        </LoaderView>
    )
}

export default Loader
