import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { avatar_url, login, id } = user;
  return (
    <div className="user">
      <div className="image">
        <img src={avatar_url} alt="" />
      </div>
      <div className="user-info">
        <h4>Name of the user:{login}</h4>
        <small>ID:{id}</small>
        <br />
        <Link style={{ color: "black" }} to={`/user/${login}`}>
          View Profile
        </Link>
      </div>
    </div>
  );
};
export default User;
