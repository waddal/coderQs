import React from "react";

const Question = (props) => {
  const { questionsData, showAnswer, selected } = props;

  return (
    <div className="questionContainer" onClick={() => showAnswer(questionsData.id)}>
      {/* QUESTION */}
      <p className="question">{questionsData.question}</p>
      {/* ANSWER */}
      {selected === questionsData.id ? <p className="answer">{questionsData.answer}</p> : null}
    </div>
  );
};

export default Question;
