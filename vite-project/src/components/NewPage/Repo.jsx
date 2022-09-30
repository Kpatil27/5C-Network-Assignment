import React from "react";

const Repo = ({ repo }) => {
  const { name, html_url, description, language } = repo;
  return (
    <div className="repo">
      <h3>
        {" "}
        <a href={html_url}>Repo Name:{name}</a>
      </h3>
      <p>Description:{description}</p>
      <small>Language:{language}</small>
    </div>
  );
};

export default Repo;
