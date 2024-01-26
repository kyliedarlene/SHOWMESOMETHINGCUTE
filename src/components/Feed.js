import { useState, useEffect } from "react";

import Card from "./Card";

function Feed() {
    const [cuties, setCuties] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/data")
          .then(r => r.json())
          .then(data => setCuties(data))
          .then(console.log(cuties))
      }, []);

      return(
        <>
          {cuties.map((cutie) => (
              <Card id={cutie.id} cutie={cutie} />
          ))}
        </>
      )
}

export default Feed;