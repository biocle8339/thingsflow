import React from "react";
import { NavLink } from "react-router-dom";

const Entry = function ({ id, number, title, author, createdAt, comments }) {
  return (
    <NavLink exact to={`/details/${id}`} className="entry">
      <div className="titleContainer">
        <div className="titleFont">{`#${number} ${title}`}</div>
        <div>{`작성자: ${author}, 작성일: ${createdAt}`}</div>
      </div>
      <div className="countContainer">{`코멘트: ${comments}`}</div>
    </NavLink>
  );
};

export default Entry;
