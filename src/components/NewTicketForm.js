import React from "react";
import { v4 } from 'uuid';

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
}

export default NewTicketForm;