import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../../axios";
import Repo from "../../NewPage/Repo";

import "./Users.css";
const Users = () => {
  const { login } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`users/${login}/repos`),
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
        console.log(response[0].data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <div className="container">
      <Link to="/" className="back">
        Back
      </Link>
      <div className="user-information">
        <div className="image">
          <img src={userInfo?.avatar_url} alt="" />
        </div>
        <div className="user-content">
          <h4>
            {" "}
            <a href="">Name:{userInfo?.name}</a>
          </h4>
          <p>Bio:{userInfo?.bio}</p>
          <div className="more-data">
            <p>
              <img src={userInfo} alt="" />
              <a href={userInfo?.followers_url}>
                {userInfo?.followers}:followers
              </a>
              &nbsp;
              <a href={userInfo?.following_url}>
                Following:{userInfo?.following}
              </a>
            </p>
            <p>
              <a href="">Location:{userInfo?.location}</a>
            </p>

            <p>
              <a href={userInfo?.url}>View github profile</a>
            </p>
          </div>
        </div>
      </div>
      <div className="user-repos">
        {repos ? (
          repos.map((repo) => {
            return <Repo repo={repo} key={repo.id} />;
          })
        ) : (
          <h2>No repos</h2>
        )}
      </div>
    </div>
  );
};

export default Users;
