import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { colorWhite, colorPrimary, colorPrimaryDark } from '../constants/colors.js'
import { HomeNavigation } from '../navigation'

class Home extends Component {
    static navigationOptions = {
        headerTitleStyle: {
            color: colorWhite
        },
        headerStyle: {
            backgroundColor: colorPrimary,
            marginTop: StatusBar.currentHeight
        }
    }

    render() {
        return (
            <HomeNavigation />
        )
    }
}

export default Home