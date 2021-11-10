import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
  // return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;
  // Arrow functions are a good choice if your event handler doesn't need to handle much logic. 
  // If you have more than one line of code to run in your event handler, it's a good idea to create a separate callback function (like in the first example).
}

export default Tickler;
