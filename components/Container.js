import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous-native'
import { defaultPadding } from '../constants/dimens.js'

const ContainerView = glamorous.view(
    {
        padding: defaultPadding,
        flex: 1
    },
    (props, theme) => ({
        backgroundColor: theme.colors.colorBase,
    })
)

const Container = ({ children }) => {
    return (
        <ContainerView>
            {children}
        </ContainerView>
    )
}

Container.propTypes = {
    children: PropTypes.element.isRequired
}

export default Container