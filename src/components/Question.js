import React from 'react';
import PropTypes from "prop-types";


function Question(props) {
  return (
    <React.Fragment>
      <p>{props.question}</p>
      {/* <button onClick={props.handleClick}>Yes</button> */}
    </React.Fragment>
  );
}

Question.propTypes = {
  question: PropTypes.string
}; 

export default Question;
