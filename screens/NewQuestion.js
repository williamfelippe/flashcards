import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { BasicButton } from '../components'

class NewQuestion extends Component {
    constructor() {
        super()
        this.state = {
            question: '',
            answer: ''
        }
    }

    onPress() {

    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Question"
                    onChangeText={(question) => this.setState({ question })} />

                <TextInput
                    placeholder="Answer"
                    onChangeText={(answer) => this.setState({ answer })} />

                <BasicButton
                    text="Submit"
                    onPress={() => onPress()} />
            </View>
        )
    }
}

export default NewQuestion