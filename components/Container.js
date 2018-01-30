import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous-native'

const ContainerView = glamorous.view(
    {
        flex: 1
    },
    (props, theme) => ({
        backgroundColor: theme.colors.colorBase,
        padding: theme.dimens.defaultPadding
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