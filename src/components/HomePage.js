import React, { useState } from 'react'
import questionsData from '../data/questionsData';
import questionsData2 from '../data/questionsData';

const HomePage = () => {
    const [questions, setQuestons] = useState(questionsData);
    // const questionsArray = questionsData.map(question => {
    //     return question
    // })
    
    return (
        <div>
            <h1>{questions.topic}</h1> 
            <span>{questions.question}</span>
        </div>
    )
}

export default HomePage;