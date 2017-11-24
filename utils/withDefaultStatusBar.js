import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { colorPrimaryDark } from '../constants/colors.js'
import glamorous from 'glamorous-native'

const WithDefaultStatusBarView = glamorous.view({
    marginTop: StatusBar.currentHeight
})

const withDefaultStatusBar = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <WithDefaultStatusBarView>
                    <StatusBar
                        backgroundColor={colorPrimaryDark} />

                    <WrappedComponent {...this.props} />
                </WithDefaultStatusBarView>
            )
        }
    }
}

export default withDefaultStatusBar
