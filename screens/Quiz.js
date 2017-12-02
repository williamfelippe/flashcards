import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { BasicButton, Container, VoteButton } from '../components'
import { 
    colorTextDefault, 
    colorAccent, 
    colorBlack, 
    colorBase, 
    colorPrimaryDark 
} from '../constants/colors.js'
import glamorous from 'glamorous-native'

const QuizView = glamorous.view({
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
})

const QuizScore = glamorous.text({
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: 16,
    fontFamily: 'ubuntu-bold',
    marginTop: 10
})

const QuizQuestion = glamorous.text({
    fontSize: 40,
    fontFamily: 'ubuntu-bold',
    textAlign: 'center',
    marginBottom: 10
})

const QuizChangeCardButtonText = glamorous.text({
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: colorTextDefault,
    textDecorationLine: 'underline',
    textDecorationColor: colorTextDefault,
    padding: 20,
    marginBottom: 20
})

const QuizVoteButtonsWrapper = glamorous.view({
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    marginBottom: 20
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
                <QuizView>
                    <QuizScore>
                        1/2
                    </QuizScore>

                    <View>
                        <QuizQuestion>
                            Does React Native Works With Android?
                        </QuizQuestion>

                        <BasicButton 
                            text="See answer"
                            fontSize={16}
                            textColor={colorPrimaryDark}
                            backgroundColor={colorBase}
                            onPress={() => console.log('Virar cartão')} />
                    </View>

                    <QuizVoteButtonsWrapper>
                        <VoteButton />

                        <VoteButton positive />
                    </QuizVoteButtonsWrapper>
                </QuizView>
            </Container>
        )
    }
}

export default Quiz