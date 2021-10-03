import React from 'react';
import questionsData from '../../data/questionsData';
import QuestionCard from './QuestionsCard';

const Questions = ({topic}) => {
    return(
        <div>
            {
                questionsData.map(question => {
                    if(question.topic === `${topic}`){
                        return(
                            <QuestionCard key={question.id} question={question}/>
                    )}
                })
            }
        </div>
    )
}

export default Questions;