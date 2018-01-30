import React from 'react'
import { noQuestionsHereLabel } from '../strings/labels'
import glamorous from 'glamorous-native'

const NoQuestionsView = glamorous.view({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
})

const NoQuestionsText = glamorous.text(
    {
        textAlign: 'center',
        fontSize: 40,
        opacity: 0.6
    },
    (props, theme) => ({
        fontFamily: theme.fonts.primaryFontLight,
        color: theme.colors.colorTextDefault
    })
)

const NoQuestions = () => {
    return (
        <NoQuestionsView>
            <NoQuestionsText>
                {noQuestionsHereLabel}
            </NoQuestionsText>
        </NoQuestionsView>
    )
}

export default NoQuestions