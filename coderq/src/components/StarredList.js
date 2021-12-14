import React from "react";
import Starred from './Starred';

const StarredList = (props) => {
  const { starred } = props;
  return (
    <div>
      <h1>Starred</h1>
      <Starred starred={starred}/>
    </div>
  );
};

export default StarredList;
