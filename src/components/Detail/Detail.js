import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = function () {
  const { detailId } = useParams();
  console.log(detailId);
  return <Container>detail</Container>;
};

const Container = styled.div`
  width: 70vw;
`;

export default Detail;
