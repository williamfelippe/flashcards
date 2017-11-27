import React, { Component } from 'react'
import { Text, StatusBar } from 'react-native'
import { BasicButton } from '../components'
import {
    colorBlack,
    colorWhite,
    colorPrimary,
    colorPrimaryDark,
    colorBase
} from '../constants/colors.js'
import glamorous from 'glamorous-native'

const OpenView = glamorous.view({
    backgroundColor: colorBase,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
})

const OpenTitle = glamorous.text({
    fontFamily: 'ubuntu-bold',
    fontSize: 40,
    textAlign: 'center',
    color: colorBlack,

    marginBottom: 20
})

class Open extends Component {
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
        const { navigation } = this.props

        return (
            <OpenView>
                <StatusBar backgroundColor={colorPrimaryDark} />

                <OpenTitle>
                    Flashcards
                </OpenTitle>

                <BasicButton 
                        text="Start" 
                        onPress={() => navigation.navigate('Home')} />
            </OpenView>
        )
    }
}

export default Open