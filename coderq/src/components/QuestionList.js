import React, { useState } from "react";
import questionsData from "../api/data/questionsData";
import Question from "./Question";

const QuestionList = () => {
  const [answer, setAnswer] = useState(false);
  const [selected, setSelected] = useState();
  const [topic, setTopic] = useState("");

  const showAnswer = (id) => {
    selected === id ? setSelected(null) : setSelected(id);
    setAnswer(!answer);
  };

  const onChange = (e) => {
    const { value } = e.target;
    setTopic(value);
  };

  return (
    <>
      <div>
        <h1>Questions</h1>
        <select value={topic} name="topics" id="topics" onChange={onChange}>
          <option value=""></option>
          <option value="JS">JS</option>
          <option value="CSS">CSS</option>
        </select>
        {questionsData
          .filter((t) => t.topic === topic)
          .map((q) => {
            return (
              <Question
                key={q.id}
                questionsData={q}
                answer={answer}
                showAnswer={showAnswer}
                selected={selected}
              />
            );
          })}
        {/* {
                    questionsData.map(q => {
                        return(
                            <Question 
                                key={q.id} 
                                questionsData={q} 
                                answer={answer} 
                                showAnswer={showAnswer}
                                selected={selected}
                                />
                        )
                    })
                } */}
      </div>
    </>
  );
};

export default QuestionList;

// const getClassName = id => {
//     return id = id === activeSquare ? 'active' : '';
//   };

//   const markActive = id => {
//     // This is a helper used inside an _inlined_ click handler (see below).
//     // Set the id argument to become the active id in state
//     // (unless it already is, in which case we should reset
//     // the currently active square id back to initial state).
//     activeSquare === id ? setActiveSquare(null) : setActiveSquare(id);
//   };
