import React, { useState } from 'react';
import "./App.css";
// import UserList from "./components/UserList";
import QuestionList from "./components/QuestionList";
import StarredList from "./components/StarredList";

function App() {
  const [starred, setStarred] = useState({})

  const onStar = (starQ) => {
    setStarred({
      ...starred,
      starQ: starQ
    });
  }
  // console.log(starred);

  return (
    <div className="App">
      {/* <UserList /> */}
      <QuestionList onStar={onStar}/>
      {/* <StarredList starred={starred}/> */}
    </div>
  );
}

export default App;
