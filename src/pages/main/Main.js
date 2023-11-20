import React from "react";
import styled from "styled-components";
import Checklist from "../../components/Checklist";
const Main = () => {
  return (
    <MainContainer>
      <Checklist />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
