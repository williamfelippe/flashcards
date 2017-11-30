import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container, VoteButton } from '../components'
import glamorous from 'glamorous-native'

const QuizQuestion = glamorous.text({
    fontSize: 30,
    fontFamily: 'ubuntu-bold',
    textAlign: 'center'
})

const QuizChangeCardButton = glamorous.touchableHighlight({

})

const QuizVoteButtonsWrapper = glamorous.view({
    flexDirection: 'column',
    alignContent: 'space-between'
})

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Text>1/2</Text>
                
                <QuizQuestion>
                    Does React Native Works With Android?
                </QuizQuestion>

                <QuizChangeCardButton onPress={() => console.log('Virar cartão')}>
                    <QuizChangeCardButtonText>
                        Answer
                    </QuizChangeCardButtonText>
                </QuizChangeCardButton>

                <QuizVoteButtonsWrapper>
                    <VoteButton />

                    <VoteButton positive />
                </QuizVoteButtonsWrapper>
            </Container>
        )
    }
}

export default Quiz