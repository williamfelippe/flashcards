import React, { Component } from 'react'
import { connect } from 'react-redux'
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

const NEGATIVE = 0
    , POSITIVE = 1

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
        <View>
            No questions here =/
        </View>
    )
}

const QuestionResults = () => {
    return (
        <View>
            Resultados aqui =)
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
        this.setState(prevState => {
            statuses: prevState.statuses.concat(status)
        }, () => this.nextQuestion())
    }

    nextQuestion() {
        const { statuses } = this.state
        if (allIds.length === statuses.length) {
            this.showResults()
            return
        }

        this.setState(prevState => { index: prevState.index++ })
    }

    showResults() {
        console.log('Opa')
        //Calcula a porcentagem


        //Mostra o componente de resultados
        this.setState({ showResults: true })
    }

    renderElements() {
        const { allIds, byId } = this.props

        if (allIds.length <= 0) {
            return <NoQuestions />
        }
        else if (this.state.showResults) {
            const { statuses } = this.state
            return <QuestionResults statuses={statuses} />
        }

        const { index } = this.state
        const { question, answer } = byId[allIds[index]]
        
        return (
            <Container>
                <QuizView>
                    <QuizScore>
                        {index + 1}/{allIds.length}
                    </QuizScore>

                    <View>
                        <QuizQuestion>
                            {(seeingAnswer) ? answer : question}
                        </QuizQuestion>

                        <BasicButton
                            text={`See ${(seeingAnswer) ? 'question' : 'answer'}`}
                            textColor={colorPrimaryDark}
                            backgroundColor={colorBase}
                            onPress={() => this.setState(prevState => {
                                seeingAnswer: !prevState.seeingAnswer
                            })} />
                    </View>

                    <QuizVoteButtonsWrapper>
                        <VoteButton onPress={() => this.vote(NEGATIVE)} />

                        <VoteButton positive onPress={() => this.vote(POSITIVE)} />
                    </QuizVoteButtonsWrapper>
                </QuizView>
            </Container>
        )
    }

    render() {
        return this.renderElements()
    }
}

const mapStateToProps = ({ questions }) => {
    const { byId, allIds } = questions

    return {
        byId,
        allIds
    }
}

export default connect(mapStateToProps)(Quiz)