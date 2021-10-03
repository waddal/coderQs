import './App.css';
import React, { useState } from 'react';
import questionsData from './data/questionsData';
import useInput from './hooks/useInput';
import Question from './components/Selectors/Questions';

function App() {
  const [questions, setQuestions] = useState(questionsData);
  const [topic, setTopic, handleChange] = useInput();
  const [answer, setAnswer] = useState(false);

  return (
    <div className="App">
        <h1>CoderQs</h1>

{/* QUESTION COMPONENT */}
        <div>
          {/* {questions.map(q => {
            if(q.topic === `${topic}`){
              return(
              <div key={q.id}>
                <span>{q.question}</span>
                <span>{q.answer}</span>
              </div>
            )}
          })} */}
          <Question topic={topic}/>
{/* QUESTION COMPONENT */}

{/* TOPIC COMPONENT */}
          <select name="topic" value={questions.topic} onChange={handleChange}>
            <option value="">Select a Topic</option>
            <option value="User Interface">User Interface</option>
            <option value="Git">Git</option>
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="Applied Javascript">Applied Javascript</option>
            <option value="React">React</option>
            <option value="Advanced React">Advanced React</option>
          </select>
{/* TOPIC COMPONENT */}

{/* ANSWER COMPONENT */}
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
{/* ANSWER COMPONENT */}

    </div>
  );
}

export default App;
