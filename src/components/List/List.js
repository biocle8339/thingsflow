import React from "react";
import styled from "styled-components";

import Entry from "./Entry";

const bannerURL = "https://thingsflow.com/ko/home";

const List = function ({ list }) {
  return (
    <Container>
      {list.map((data, index) =>
        index === 4 ? (
          <a key={data.id} className="entry" href={bannerURL}>
            <img src="https://placehold.it/500x100?text=ad" alt="banner" />
          </a>
        ) : (
          <Entry
            key={data.id}
            id={data.id}
            number={data.number}
            title={data.title}
            author={data.user.login}
            createdAt={data.created_at}
            comments={data.comments}
          />
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
    padding: 2px;
    width: 500px;
    height: 100px;
    border-bottom: 1px solid black;
    text-decoration: none;
    color: black;
    cursor: pointer;

    .titleContainer {
      width: 83%;
    }

    .countContainer {
      width: 17%;
    }
  }

  .titleFont {
    font-weight: bold;
  }
`;

export default List;
