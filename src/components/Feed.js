import { useState, useEffect } from "react";

import Card from "./Card";

function Feed() {
    const [cuties, setCuties] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/data")
          .then(r => r.json())
          .then(data => setCuties(data))
      }, []);

      return(
        <div id="feed">
          {cuties.map((cutie) => (
              <Card key={cutie.id} cutie={cutie} />
          ))}
        </div>
      )
}

export default Feed;