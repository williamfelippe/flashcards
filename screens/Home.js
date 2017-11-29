import React from 'react'
import { HomeNavigation } from '../navigation'

const Home = ({ navigation }) => {
    return (
        <HomeNavigation screenProps={{ rootNavigation: navigation }} />
    )
}

export default Home