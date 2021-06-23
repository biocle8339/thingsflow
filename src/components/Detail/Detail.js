import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Detail = function ({ list }) {
  const { detailId } = useParams();
  const data = list.find((el) => el.id === Number(detailId));
  const { number, title, comments, body } = data;
  const createdAt = data.created_at;
  const userImageURL = data.user.avatar_url;
  const author = data.user.login;
  return (
    <Container>
      <div className="upperContainer">
        <div>
          <img className="userImage" src={userImageURL}></img>
        </div>
        <div className="titleContainer">
          <div className="titleFont">{`#${number} ${title}`}</div>
          <div>{`작성자: ${author}, 작성일: ${createdAt}`}</div>
        </div>
        <div className="countContainer">{`코멘트: ${comments}`}</div>
      </div>
      <div>
        <ReactMarkdown children={body} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 600px;

  .upperContainer {
    display: flex;
    justify-content: space-between;
    padding: 2px;
    height: 100px;

    .userImage {
      height: 50px;
      margin: 5px;
    }

    .titleFont {
      font-weight: bold;
    }
  }
`;

export default Detail;
