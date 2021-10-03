import React, { useState, useEffect } from 'react';
import './App.css';
import questionsData from './data/questionsData';
import useInput from './hooks/useInput';

const allQuestions = [...questionsData]

function App() {
  const [questions, setQuestions] = useState(allQuestions);
  const [topic, setTopic, handleChange] = useInput();
  const [answer, setAnswer] = useState(false);

  // useEffect(() => {
  //   console.log("useEffect: ", topic)
  //   console.log("useEffect: ", allQuestions)
  // }, [topic])

  return (
    <div className="App">
        <h1>CoderQs</h1>
        <div>
          {questions.map(q => {
            if(q.topic === `${topic}`){
              return(
              <div key={q.id}>
                <span>{q.question}</span>
                <span>{q.answer}</span>
              </div>
            )}
          })}
          <select name="topic" value={questions.topic} onChange={handleChange}>
            <option value="">Select a Topic</option>
            <option value="User Interface">User Interface</option>
            <option value="Git">Git</option>
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="Applied Javascript">Applied Javascript</option>
            <option value="React">React</option>
            <option value="Advanced React">Advanced React</option>
            {/* <option value="React">React</option> */}
          </select>

          <div>
            <label>
              <input 
                type="checkbox"
                name="answer"
                // checked={answer.checked}
              />
            </label>
          </div>
        </div>

    </div>
  );
}

export default App;
