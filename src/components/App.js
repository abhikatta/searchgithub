import React, { useState } from "react";

const API_URL = "https://api.github.com";
const fetchResults = async (query) => {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
};

const User = ({ avatar, url, name }) => {
  return (
    <div className=" flex hover:cursor-pointer  hover:scale-105 transition-transform duration-150 flex-col m-1 justify-center items-center border-[#bceefd] border-2 rounded-md hover:bg-slate-500 p-2">
      <a
        href={url}
        className="flex flex-col sm:text-xl md:text-xl lg:text-xl text-xs items-center text-center  "
        rel="noopener noreferrer">
        <img
          className="flex justify-center rounded-2xl "
          src={avatar}
          alt={name}
          height={100}
          width={100}
        />
        {name}
      </a>
    </div>
  );
};
const Form = ({ onSubmit, onChange, className, value }) => {
  return (
    <div className={className}>
      <form onSubmit={onSubmit} className="flex flex-col">
        <input
          type="text"
          className="md:h-[5rem] lg:h-[5rem] sm:h-[2rem] h-[5rem] w-auto md:text-3xl sm:text-md text-xl rounded-md bg-slate-300 text-black  focus:outline-none  px-2 py-1 "
          placeholder="Enter username:"
          onChange={onChange}
          value={value}
        />
        <button
          className="items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-transform duration-200 h-[3rem] text-lg hover:text-slate-900 bg-slate-600 text-slate-200 font-bold rounded-md border-[rgb(148,163,184)] my-4 hover:bg-slate-300"
          type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const onSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const results = await fetchResults(query);
      setResults(results);
      // setAvatars(results.avatar_url);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col h-full min-h-screen  w-full items-center justify-center text-[#bceefd] bg-slate-700">
      <div
        className={
          results.length > 0
            ? "font-bold top-[30%]  text-5xl  items-start px-3 py-4 cursor-pointer"
            : "font-bold top-[10%] text-5xl absolute items-start px-3 py-4 cursor-pointer"
        }>
        <h3>
          <a href="/searchgithub">searchgithub</a>
          <p className="text-sm top-[20%] text-center mb-[5%] ">
            Search github profiles
          </p>
        </h3>
      </div>
      <Form
        onChange={onSearchChange}
        className="h-auto w-full text-black font-thin top-[30%] flex flex-col items-center justify-center px-5 my-10 py-10 md:text-md sm:text-sm"
        onSubmit={onSearchSubmit}
        value={query}
      />
      {results.length > 0 && (
        <>
          <h3 className="h-[5rem] w-[15rem] sm:text-md md:text-3xl lg:text-3xl text-md text-center rounded-md ">
            Results:
          </h3>
          <div className=" mb-10 rounded-3xl">
            <div className="grid grid-cols-3  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {results.map((user) => (
                <User
                  key={user.login}
                  avatar={user.avatar_url}
                  url={user.html_url}
                  name={user.login}
                />
              ))}
            </div>
          </div>
        </>
      )}
      <footer
        className={
          results.length > 0
            ? "transition-transform duration-150 hover:scale-125 hover:underline  hover:text-white pb-2"
            : "transition-transform duration-150 hover:scale-125 hover:underline bottom-0 absolute hover:text-white pb-2"
        }>
        <a href="http://github.com/abhikatta">Github</a>
      </footer>
    </div>
  );
};

export default App;
