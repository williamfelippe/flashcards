import React, { Component } from 'react'
import { colorTransparent } from '../constants/colors'
import glamorous from 'glamorous-native'

const Input = glamorous.textInput(
    {
        padding: 10,
        alignSelf: 'stretch',
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 5
    },
    (props, theme) => ({
        borderColor: theme.colors.colorGray,
        backgroundColor: theme.colors.colorWhite,
        marginBottom: 15
    })
)

const BasicInput = (props) => {
    return (
        <Input
            {...props}
            underlineColorAndroid={colorTransparent} />
    )
}

export default BasicInput