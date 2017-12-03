const getAmountOfQuestions = (questions) => {
    const amount = questions.length

    return (amount > 0) 
        ? `${amount} cards`
        : 'No cards at the moment'
}

export default getAmountOfQuestions