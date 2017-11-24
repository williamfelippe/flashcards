import React, { Component } from 'react'
import { Container } from '../components'
import { StyleSheet, Text, View } from 'react-native'
import withDefaultStatusBar from '../utils/withDefaultStatusBar.js'

class DeckDetail extends Component {
	render() {
		return (
			<Container>
                <Text>
					aaaa
				</Text>
			</Container>
		)
	}
}

export default withDefaultStatusBar(DeckDetail)