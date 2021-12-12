import React from 'react'

const Question = (props) => {
    const { questionsData, showAnswer, selected } = props;

    return (
        <div className="question" onClick={() => showAnswer(questionsData.id)}>
            {/* QUESTION */}
            <p>{questionsData.question}</p>
            {/* ANSWER */}
            {
                selected === questionsData.id ? 
                <p>{questionsData.answer}</p> : null
            }

        </div>
    )
}

export default Question
