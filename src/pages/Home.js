import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from '../components/Header';

function Home() {
  const [user, setUser] = useState("");
  const [formData, setFormData] = useState({})

  function handleSubmit(event) {
    event.preventDefault();
    // setUser(event.target.value);
    
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => setUser(data.user));
  }

  console.log(user)

  return (
    <div className="home">
      <Header />
      {user ? 
        <>
          <h1>{`Hello, ${user}!`}</h1>
          <Link className="nav-button" to="/cuties">SHOW ME SOMETHING CUTE!</Link>
        </>
        : 
        <>
          <h2>Welcome! Your day is about to get a whole lot cuter. To continue, please enter your name!</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input onChange={(event) => setFormData({"user": event.target.value})} className="form-input" type="text" name="userInput" autoComplete="off" />
            <button className="form-submit" type="submit">&#8594;</button>
          </form>

        </>
      }
    </div>
  );
}

export default Home;
