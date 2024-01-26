import React, { useState } from "react";
import Header from '../components/Header';

function Home() {
  const [user, setUser] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setUser(event.target.elements.userInput.value);
  }

  return (
    <div>
      <Header />
      {user ? 
        <>
          <h1>Hello, {user}!</h1>
          <button>SHOW ME SOMETHING CUTE!</button>
        </>
        : 
        <>
          <h2>Welcome! Your day is about to get a whole lot cuter. To continue, please enter your name!</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="userInput" />
            <button type="submit">Submit</button>
          </form>

        </>
      }
    </div>
  );
}

export default Home;
