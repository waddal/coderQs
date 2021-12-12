import React, { useState } from "react";
import questionsData from "../api/data/questionsData";
import Question from "./Question";

const QuestionList = () => {
  const [answer, setAnswer] = useState(false);
  const [selected, setSelected] = useState();
  const [topic, setTopic] = useState("");
  //completed & show/hide completed?
  //starred

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
      <div className="QuestionsList">
        <h1>Questions</h1>
        <div className="topicSelect">
            <select value={topic} name="topics" id="topics" onChange={onChange}>
                <option value=""></option>
                <option value="JS">JS</option>
                <option value="CSS">CSS</option>
                <option value="HTML">HTML</option>
            </select>
        </div>
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
      </div>
    </>
  );
};

export default QuestionList;