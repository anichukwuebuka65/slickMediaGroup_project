import React, { useEffect, useState } from "react";

export default function Search({ setMovies }) {
  const [input, setInput] = useState("");

  const fetchData = () => {
    fetch(`http://www.omdbapi.com/?apikey=ef42345f&s=${input}&type=series`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };

  function handleChange(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchData();
    }, 1000);

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
