import React from "react";
import styled from "styled-components";

const Header = function ({ owner, repo }) {
  return (
    <Container>
      <h1>{`${owner} / ${repo}`}</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export default Header;
