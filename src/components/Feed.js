import { useState, useEffect } from "react";

import Card from "./Card";

function Feed({ display = "all" }) {
    const [cuties, setCuties] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/data")
          .then(r => r.json())
          .then(data => {
            if (display === "favs") {
              setCuties(data.filter((cutie) => cutie.isFavorite))
            } else {
              setCuties(data)
            }
          })
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