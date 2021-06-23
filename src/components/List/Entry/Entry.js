import React from "react";

const Entry = function ({ number, title, author, createdAt, comments }) {
  return (
    <div className="entry">
      <div className="titleContainer">
        <div className="titleFont">{`#${number} ${title}`}</div>
        <div>{`작성자: ${author}, 작성일: ${createdAt}`}</div>
      </div>
      <div>{`코멘트: ${comments}`}</div>
    </div>
  );
};

export default Entry;
