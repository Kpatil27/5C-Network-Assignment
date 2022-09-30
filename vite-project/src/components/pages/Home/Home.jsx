import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "../../../axios";
import User from "../../NewPage/User";

export default function Home() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const fetchUsers = async () => {
    const { data } = await axios.get("/search/users?q=" + input);
    return data?.items;
  };
  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (input) {
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log("empty");
    }
  };

  return (
    <div className="container">
      <div className="search-form">
        <h4>GitHub Search User</h4>
        <form action="">
          <input
            value={input}
            onChange={handleInput}
            type="text"
            name=""
            id=""
          />
          <button onClick={handleSearchUsers}>Search</button>
        </form>
      </div>
      <div className="search-results">
        <div className="options"></div>
        {users ? (
          users.map((user) => {
            return <User user={user} key={user.id} />;
          })
        ) : (
          <h2>Nothing</h2>
        )}
      </div>
    </div>
  );
}
