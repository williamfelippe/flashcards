import React from 'react'
import { BasicButton, Container } from '../components'
import { correctAnswersLabel } from '../strings/labels'
import {
    restartQuizAction,
    backToDeckAction
} from '../strings/actions'
import {
    colorRed,
    colorDarkRed,
    colorGreen,
    colorDarkGreen
} from '../constants/colors.js'
import glamorous from 'glamorous-native'

const QuestionsResultTitle = glamorous.text(
    {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 30
    },
    (props, theme) => ({
        fontFamily: theme.fonts.primaryFontLight,
        color: theme.colors.colorTextDefault
    })
)

const QuestionsResultScore = glamorous.text(
    {
        fontSize: 100,
        textAlign: 'center',
        marginBottom: 10
    },
    (props, theme) => ({
        fontFamily: theme.fonts.primaryFontBold,
        color: theme.colors.colorPrimary
    })
)

const QuestionsResultButtonsWrapper = glamorous.view({
    flexDirection: 'column',
    alignSelf: 'center',
    marginBottom: 20
})

const QuestionsResults = ({
    navigation,
    statuses,
    questions,
    restartQuiz
}) => {
    const calculateResult = () => {
        //Calcula a porcentagem
        const total = statuses.reduce((previous, current) => previous + current, 0)
        const percentage = total / questions.length * 100
        return Math.round(percentage)
    }

    return (
        <Container>
            <QuizView>
                <QuestionsResultTitle>
                    {correctAnswersLabel}:
                </QuestionsResultTitle>

                <QuestionsResultScore>
                    {calculateResult()}%
                </QuestionsResultScore>

                <QuestionsResultButtonsWrapper>
                    <BasicButton
                        text={restartQuizAction}
                        backgroundColor={colorRed}
                        underlayColor={colorDarkRed}
                        onPress={restartQuiz} />

                    <BasicButton
                        text={backToDeckAction}
                        backgroundColor={colorGreen}
                        underlayColor={colorDarkGreen}
                        onPress={() => navigation.goBack()} />
                </QuestionsResultButtonsWrapper>
            </QuizView>
        </Container>
    )
}

export default QuestionsResults