import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from '../components/Header';

function Home() {
  const [user, setUser] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setUser(event.target.elements.userInput.value);
  }

  return (
    <div className="home">
      <Header />
      {user ? 
        <>
          <h1>Hello, {user}!</h1>
          <Link class="nav-button" to="/cuties">SHOWMESOMETHINGCUTE</Link>
        </>
        : 
        <>
          <h2>Welcome! Your day is about to get a whole lot cuter. To continue, please enter your name!</h2>
          <form class="form" onSubmit={handleSubmit}>
            <input class="form-input" type="text" name="userInput" autoComplete="off" />
            <button class="form-submit" type="submit">&#8594;</button>
          </form>

        </>
      }
    </div>
  );
}

export default Home;
