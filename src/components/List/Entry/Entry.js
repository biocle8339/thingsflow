import React from "react";

const Entry = function ({ number, title, author, createdAt, commentsCount }) {
  return (
    <div className="entry">
      <div>
        <div className="titleFont">{`#${number} issue ${title}`}</div>
        <div>{`작성자: ${author}, 작성일: ${createdAt}`}</div>
      </div>
      <div>{`코멘트: ${commentsCount}`}</div>
    </div>
  );
};

export default Entry;
