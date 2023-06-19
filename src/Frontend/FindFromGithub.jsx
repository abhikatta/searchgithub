import { useState } from "react";
import "./FindFromGithub.css";
import PhotoCarousel from "./PhotoCarousel";

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

const FindFromGithub = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [avatars,setAvatars]=useState([]);
  PhotoCarousel(avatars);
  const onSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const onSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const results = await fetchResults(query);
      setResults(results);
      setAvatars(results.avatar_url);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="main">
      <h2>Project FindFromGithub</h2>
      <Form onChange={onSearchChange} onSubmit={onSearchSubmit} value={query} />
      <h3>Results</h3>
      <div>
        <div>
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
    </div>
  );
};

const User = ({ avatar, url, name }) => {
  return (
    <div className="user">
      <img src={avatar} alt={name} width={50} height={50} />
      <a href={url} rel="noopener noreferrer">
        {name}
      </a>
    </div>
  );
};
const Form = ({ onSubmit, onChange, value }) => {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter username or mail:"
        onChange={onChange}
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default FindFromGithub;

// async function fetchResults(query) {
//   try {
//     const response = await fetch(`${API_URL}/search/users?q=${query}`);
//     const json = await response.json();
//     return json.items || [];
//   } catch (e) {
//     throw new Error(e);
//   }
// }

// export default function App() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   function onSearchChange(event) {
//     setQuery(event.target.value);
//   }

//   async function onSearchSubmit(event) {
//     event.preventDefault();
//     const results = await fetchResults(query);
//     setResults(results);
//   }

//   return (
//     <div className="app">
//       <main className="main">
//         <h2>Project 5: GitHub User Search</h2>
//         <Form
//           onChange={onSearchChange}
//           onSubmit={onSearchSubmit}
//           value={query}
//         />
//         <h3>Results</h3>
//         <div id="results">
//           <div>
//             {results.map((user) => (
//               <User
//                 key={user.login}
//                 avatar={user.avatar_url}
//                 url={user.html_url}
//                 username={user.login}
//               />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// function User({ avatar, url, username }) {
//   return (
//     <div className="user">
//       <img src={avatar} alt="Profile" width="50" height="50" />
//       <a href={url} target="_blank" rel="noopener noreferrer">
//         {username}
//       </a>
//     </div>
//   );
// }

// function Form({ onSubmit, onChange, value }) {
//   return (
//     <form className="search-form" onSubmit={onSubmit}>
//       <input
//         id="search"
//         type="text"
//         placeholder="Enter username or email"
//         onChange={onChange}
//         value={value}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }
