import React from 'react'

const QuestionCard = ({question}) => {
    return (
        <div className="QuestionCard">
            <span>{question.question}</span>
            <hr/>
            <span>{question.answer}</span>
        </div>
    )
}

export default QuestionCard;
