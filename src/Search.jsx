import React, { useEffect, useState } from "react";

export default function Search({ setMovies, setCategory }) {
  const [input, setInput] = useState("");

  const fetchData = () => {
    fetch(`https://www.omdbapi.com/?apikey=ef42345f&s=${input}&type=series`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setCategory(input);
      });
  };

  function handleChange(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (input) fetchData();
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [input]);

  return (
    <div className="searchbox">
      <label htmlFor="search">Search</label>
      <input value={input} onChange={handleChange} type="text" id="search" />
    </div>
  );
}
