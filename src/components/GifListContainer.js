import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const API_KEY = "EkBJYr8g8XnVBlY5W7gjnc1aVj2x12mL";
const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&rating=g&limit=3&q=`;

function GifListContainer() {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(API_URL + query)
        .then((response) => response.json())
        .then((data) => setGifs(data.data))
        .catch((error) => console.error("Error fetching data: ", error));
    }
  }, [query]);

  return (
    <div>
      <GifSearch setQuery={setQuery} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
