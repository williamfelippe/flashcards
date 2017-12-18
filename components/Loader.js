import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { colorPrimary } from '../constants/colors.js'
import glamorous from 'glamorous-native'

const LoaderView = glamorous.view(
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
)

const Loader = () => {
    return (
        <LoaderView>
            <ActivityIndicator
                animating
                size="small"
                color={colorPrimary} />
        </LoaderView>
    )
}

export default Loader
