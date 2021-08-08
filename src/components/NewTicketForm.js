import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 

function NewTicketForm(props){

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}> 
      {/* onSubmit triggers when the submit button of a form is clicked */}
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }
  // event.target gives us access to the event that was just fired. In this case, we just had a submit event. We can actually grab the values that came from that submit event. 
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;