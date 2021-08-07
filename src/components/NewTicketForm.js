import React from "react";
import { v4 } from 'uuid';

function NewTicketForm(){

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
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }
  // event.target gives us access to the event that was just fired. In this case, we just had a submit event. We can actually grab the values that came from that submit event. 
}



export default NewTicketForm;