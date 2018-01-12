import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { BasicButton, Container, VoteButton } from '../components'
import {
    colorTextDefault,
    colorAccent,
    colorBlack,
    colorBase,
    colorPrimaryDark
} from '../constants/colors.js'
import glamorous from 'glamorous-native'

const NEGATIVE = 0
    , POSITIVE = 1

const NoQuestionsView = glamorous.view({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
})

const NoQuestionsText = glamorous.text({
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'ubuntu-light',
    color: colorTextDefault,
    opacity: 0.6
})

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
    fontFamily: 'ubuntu-light',
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

const NoQuestions = () => {
    return (
        <NoQuestionsView>
            <NoQuestionsText>
                No questions here
            </NoQuestionsText>
        </NoQuestionsView>
    )
}

const QuestionResults = ({ statuses, questions }) => {
    const calculateResult = () => {
        //Calcula a porcentagem
        const total = statuses.reduce((previous, current) => previous + current, 0)
        const percentage = total / questions.length * 100
        return percentage
    }

    return (
        <View style={{ flex: 1 }}>
            <Text>
                Results here =)
            </Text>

            <Text>
                {calculateResult()}
            </Text>
        </View>
    )
}

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {
            statuses: [],
            index: 0,
            seeingAnswer: false,
            showResults: false
        }
    }

    vote(status) {
        this.setState(prevState => ({
            statuses: prevState.statuses.concat(status)
        }), () => this.nextQuestion())
    }

    nextQuestion() {
        const { navigation } = this.props
        const { deck } = navigation.state.params
        const { questions } = deck
        const { statuses } = this.state

        if (questions.length === statuses.length) {
            this.showResults()
            return
        }

        this.setState(prevState => ({ index: prevState.index++ }))
    }

    showResults() {
        //Mostra o componente de resultados
        this.setState({ showResults: true })
    }

    renderElements() {
        const { navigation } = this.props
        const { deck } = navigation.state.params


        console.log('DECK?', deck)

        const { questions } = deck

        if (questions.length <= 0) {
            return <NoQuestions />
        }
        else if (this.state.showResults) {
            const { statuses } = this.state
            return (
                <QuestionResults
                    statuses={statuses}
                    questions={questions} />
            )
        }

        const { index, seeingAnswer } = this.state
        const { question, answer } = questions[index]

        return (
            <Container>
                <QuizView>
                    <QuizScore>
                        {index + 1}/{questions.length}
                    </QuizScore>

                    <View>
                        <QuizQuestion>
                            {(seeingAnswer) ? answer : question}
                        </QuizQuestion>

                        <BasicButton
                            text={`See ${(seeingAnswer) ? 'question' : 'answer'}`}
                            textColor={colorPrimaryDark}
                            backgroundColor={colorBase}
                            onPress={() => this.setState(prevState => ({
                                seeingAnswer: !prevState.seeingAnswer
                            }))} />
                    </View>

                    <QuizVoteButtonsWrapper>
                        <VoteButton
                            onPress={() => this.vote(NEGATIVE)} />

                        <VoteButton
                            positive
                            onPress={() => this.vote(POSITIVE)} />
                    </QuizVoteButtonsWrapper>
                </QuizView>
            </Container>
        )
    }

    render() {
        return this.renderElements()
    }
}

export default Quiz