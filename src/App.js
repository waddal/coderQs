import React, { useState, useEffect } from 'react';
import './App.css';
import questionsData from './data/questionsData';
import questions_UI from './data/questionsData';
const allQuestions = [...questionsData, ...questions_UI]

function App() {
  const [questions, setQuestions] = useState(allQuestions);
  const [topic, setTopic] = useState()

  useEffect(() => {
    console.log("useEffect: ", topic)
    console.log("useEffect: ", allQuestions)
  }, [topic])

  const handleChange = (e) => {
    setTopic(e.target.value);
  }

  return (
    <div className="App">
        <h1>CoderQs</h1>
        <div>
          {questions.map(q => {
            if(q.topic === `${topic}`){
              return(
              <div>
                <span>{q.id} &nbsp;</span>
                <span>{q.question}</span>
              </div>
            )}
          })}
          <select name="topic" value={questions.topic} onChange={handleChange}>
            <option value="">Select a Topic</option>
            <option value="User Interface">User Interface</option>
            <option value="Git">Git</option>
          </select>
          {/* <span>{questions[1].question}</span> */}
        </div>

    </div>
  );
}

export default App;
