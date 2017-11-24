import React, { Component } from 'react'
import {View, Text} from 'react-native'
//import { HomeNavigation } from '../navigation'
import withDefaultStatusBar from '../utils/withDefaultStatusBar.js'

class Home extends Component {
    render() {
        return (
            <View>
                <Text>
                    aaaa
                </Text>
            </View>
        )
    }
}

export default withDefaultStatusBar(Home)