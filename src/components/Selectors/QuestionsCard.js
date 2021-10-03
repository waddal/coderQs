import React from 'react'

const QuestionsCard = ({question}) => {
    return (
        <div>
            <span>{question.question}</span>
            <span>{question.answer}</span>
        </div>
    )
}

export default QuestionsCard;
