import React from 'react';
import PropTypes from "prop-types";


function Question(props) {
  return (
    <React.Fragment>
      <p>{props.question}</p>
    </React.Fragment>
  );

}

// function Ticket(props){
//   return (
//     <React.Fragment>
//       <h3>{props.location} - {props.names}</h3>
//       <p><em>{props.issue}</em></p>
//       <hr/>
//     </React.Fragment>
//   );
// }


Question.propTypes = {
  question: PropTypes.string
}; 

export default Question;
