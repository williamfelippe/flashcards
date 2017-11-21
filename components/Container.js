import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous-native'
import { defaultPadding } from '../contants/dimens'
import { colorBase } from '../contants/colors'

const ContainerView = glamorous.view({
    padding: defaultPadding,
    backgroundColor: colorBase
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