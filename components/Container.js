import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous-native'
import { defaultPadding } from '../constants/dimens.js'
import { colorBase } from '../constants/colors.js'

const ContainerView = glamorous.view({
    padding: defaultPadding,
    backgroundColor: colorBase,
    flex: 1
})

const Container = ({ children }) =>  {
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