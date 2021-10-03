import React from 'react';
import questionsData from '../../data/questionsData';
import QuestionsCard from './QuestionsCard';

const Questions = ({topic}) => {
    return(
        <div>
            {
                questionsData.map(question => {
                    if(question.topic === `${topic}`){
                        return(
                            <QuestionsCard key={question.id} question={question}/>
                    )}
                })
            }
        </div>
    )
}

export default Questions;