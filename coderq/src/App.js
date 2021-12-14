import React, { useState } from 'react';
import "./App.css";
// import UserList from "./components/UserList";
import QuestionList from "./components/QuestionList";
// import StarredList from "./components/StarredList";

function App() {
  const [starred, setStarred] = useState([])

  return (
    <div className="App">
      {/* <UserList /> */}
      <QuestionList />
      {/* <StarredList /> */}
    </div>
  );
}

export default App;
