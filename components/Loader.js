import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colorPrimary } from '../constants/colors.js'
import glamorous from 'glamorous-native'

const LoaderView = glamorous.view(
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ({ spin }) => ({
        transform: [{ rotate: spin }]
    })
)

class Loader extends Component {
    constructor() {
        super()
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.spin()
    }

    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <LoaderView>
                <Feather
                    name="loader"
                    color={colorPrimary}
                    size={40} />
            </LoaderView>
        )
    }
}

export default Loader
