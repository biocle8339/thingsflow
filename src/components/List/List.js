import React from "react";
import styled from "styled-components";

import Entry from "./Entry";

const List = function () {
  const listCount = new Array(7).fill({
    id: 123,
    number: 1,
    title: "title",
    author: "name",
    createdAt: "1234/01/01",
    commentsCount: 3,
  });

  return (
    <Container>
      {listCount.map((data, index) =>
        index === 4 ? (
          <div>
            <img className="entry" src="https://placehold.it/500x100?text=ad" />
          </div>
        ) : (
          <Entry key={data.id + index} {...data} />
        ),
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 5px;
  width: 100vw;

  .entry {
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 100px;
    border-bottom: 1px solid black;
    cursor: pointer;
  }

  .titleFont {
    font-size: 18px;
    font-weight: bold;
  }
`;

export default List;
