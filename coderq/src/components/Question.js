import React from 'react'

const Question = (props) => {
    const { questionsData, showAnswer, selected } = props;

    return (
        <div className="question">
            <p onClick={() => showAnswer(questionsData.id)}>{questionsData.question}</p>
            {
                selected === questionsData.id ? 
                <p>{questionsData.answer}</p> : null
            }

        </div>
    )
}

export default Question
