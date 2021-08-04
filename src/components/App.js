import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Questions from "./Questions";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <TicketControl />
      <Questions />
    </React.Fragment>
  );
}

export default App;