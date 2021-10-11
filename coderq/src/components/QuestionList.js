import React, { useState } from 'react'
import questionsData from '../database/questionsData';

const QuestionList = () => {
    const [answer, setAnswer] = useState(false);

    const showAnswer = () => {
        setAnswer(!answer);
    }

    return (
        <>
            {
            questionsData.map(q => {
                return (
                    <div key={q.id} className="question">
                        <p>topic: {q.topic}</p>
                        <h3 onClick={showAnswer}>q: {q.question}</h3>
                        {
                            answer && <h3 onClick={showAnswer}>a: {q.answer}</h3>
                        }
                        <hr/>
                    </div>
                )
            })
            }
        </>
    )
}

export default QuestionList;
