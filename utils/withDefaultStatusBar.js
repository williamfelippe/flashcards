import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { colorPrimaryDark } from '../constants/colors.js'

const withDefaultStatusBar = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <View>
                    <StatusBar
                        backgroundColor={colorPrimaryDark}
                        barStyle="light-content" />

                    <WrappedComponent {...this.props} />
                </View>
            )
        }
    }
}

export default withDefaultStatusBar