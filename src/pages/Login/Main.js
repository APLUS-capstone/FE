import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
      <div>hi</div>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;