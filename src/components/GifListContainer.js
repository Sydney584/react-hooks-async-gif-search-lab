import React, { useState, useEffect } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
    
    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState("dolphins");

useEffect(() => {

    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=ZWSMro8wlWQqRISmJ6AJZR0hcMHiWVOS&rating=g&limit=3`)
      .then((response) => response.json())
      .then(({data}) => {

        const gifs = data.map((gif) => ({url: gif.images.original.url}));
        setGifs(gifs);
      });
  }, [query]);

  return (  
  <div style={{ display: "flex" }}>
       <GifList gifs={gifs} />
      <GifSearch onSubmitQuery={setQuery} />

  </div>
  );
  }




export default GifListContainer;