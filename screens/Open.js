import React, { Component } from 'react'
import { Text } from 'react-native'
import { colorBlack, colorWhite, colorPrimary } from '../constants/colors.js'
import withDefaultStatusBar from '../utils/withDefaultStatusBar.js'
import glamorous from 'glamorous-native'

const OpenView = glamorous.view({
    backgroundColor: colorPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
})

const OpenTitle = glamorous.text({
    fontFamily: 'ubuntu-bold',
    fontSize: 40,
    textAlign: 'center',
    color: colorBlack
})

const OpenButton = glamorous.touchableHighlight({
    backgroundColor: colorPrimary
})

class Open extends Component {
    render() {
        return (
            <OpenView>
                <OpenTitle>
                    Flashcards
                </OpenTitle>

                <OpenButton>
                    <Text>Iniciar</Text>
                </OpenButton>
            </OpenView>
        )
    }
}

export default Open