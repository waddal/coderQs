import React from 'react'

const Question = (props) => {
    const { questionsData, answer, showAnswer } = props;



    return (
        <div className="question">
            <p onClick={showAnswer(questionsData.id)}>{questionsData.question}</p>
            {
                answer && <p>{questionsData.answer}</p>
            }
            

        </div>
    )
}

export default Question
