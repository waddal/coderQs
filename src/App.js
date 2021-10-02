import React, { useState } from 'react';
import './App.css';
import questionsData from './data/questionsData';

function App() {
  const [questions, setQuestions] = useState(questionsData);
  const [topic, setTopic] = useState()

  return (
    <div className="App">
        <h1>CoderQs</h1>
        <div>
          {questions.map(q => {
            if(q.topic === "User Interface"){
              return(
              <div>
                <span>{q.id} &nbsp;</span>
                <span>{q.question}</span>
              </div>
            )}
          })}
          <select>
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
