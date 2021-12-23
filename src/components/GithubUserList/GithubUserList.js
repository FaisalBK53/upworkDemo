import React from 'react';
import './githubUserList.css';

const GithubUserList = ({ item, list }) => {
  return (
    <div className={list}>
      {item &&
        item.map((item, index) => {
          return (
            <a href={item.html_url} target="blank">
              <div className="user-block">
                <img src={item.avatar_url} alt="" className="avatar" />
                <div className="username">{item.login}</div>
              </div>
            </a>
          );
        })}
    </div>
  );
};

export default GithubUserList;
