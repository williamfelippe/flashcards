import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { 
    clearLocalNotification, 
    setLocalNotification 
} from '../utils/notification'
import {
    BasicButton,
    Container,
    VoteButton,
    NoQuestions,
    QuestionsResults
} from '../components'
import {
    colorBase,
    colorPrimary,
    colorPrimaryDark,
    colorTransparent,
    colorRed,
    colorDarkRed,
    colorGreen,
    colorDarkGreen
} from '../constants/colors.js'
import glamorous from 'glamorous-native'

const NEGATIVE = 0
    , POSITIVE = 1

const QuizView = glamorous.view({
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
})

const QuizScore = glamorous.text(
    {
        textAlign: 'left',
        alignSelf: 'stretch',
        fontSize: 16,
        marginTop: 10
    },
    (props, theme) => ({
        fontFamily: theme.fonts.primaryFontBold
    })
)

const QuizQuestion = glamorous.text(
    {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 10
    },
    (props, theme) => ({
        fontFamily: theme.fonts.primaryFontLight
    })
)

const QuizChangeCardButtonText = glamorous.text(
    {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        textDecorationLine: 'underline',
        padding: 20,
        marginBottom: 20
    },
    (props, theme) => ({
        color: theme.colors.colorTextDefault,
        textDecorationColor: theme.colors.colorTextDefault
    })
)

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
            statuses: [],
            index: 0,
            seeingAnswer: false,
            showResults: false
        }
    }

    vote(status) {
        this.setState(prevState => ({
            statuses: [...prevState.statuses, status]
        }), () => this.nextQuestion())
    }

    nextQuestion() {
        const { deck } = this.props
        const { questions } = deck
        const { statuses } = this.state

        if (questions.length === statuses.length) {
            this.showResults()
            return
        }

        this.setState(prevState => ({
            index: prevState.index + 1
        }))
    }

    showResults() {
        //Mostra o componente de resultados
        this.setState({ showResults: true }, () => {
            clearLocalNotification()
                .then(setLocalNotification)
        })
    }

    restartQuiz() {
        this.setState({
            statuses: [],
            index: 0,
            seeingAnswer: false,
            showResults: false
        })
    }

    renderElements() {
        const { deck, navigation } = this.props
        const { questions } = deck

        if (questions.length <= 0) {
            return <NoQuestions />
        }
        else if (this.state.showResults) {
            const { statuses } = this.state
            return (
                <QuestionResults
                    statuses={statuses}
                    questions={questions}
                    navigation={navigation}
                    restartQuiz={() => this.restartQuiz()} />
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
                            backgroundColor={colorTransparent}
                            underlayColor={colorTransparent}
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
        return (
            this.renderElements()
        )
    }
}

const mapStateToProps = ({ decks }, { navigation }) => {
    const { byId } = decks
    const { deckTitle } = navigation.state.params

    return {
        deck: byId[deckTitle]
    }
}

export default connect(mapStateToProps)(Quiz)