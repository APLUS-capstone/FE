import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as DownButton } from "../assets/images/downArrow.svg";
const PdfString = ({ string }) => {
  return (
    <Wrapper>
      <DownButton />
      <CardContainer>{string}</CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2rem;
  left: 28.1rem;
  /* width: 320px; */
  /* height: 22rem; */
`;
const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 10px 60px rgb(218, 229, 255);
  border: 1px solid rgb(159, 159, 160);
  border-radius: 20px;
  padding: 2rem 0.7rem 0.7rem 0.7rem;
  text-align: center;
  font-size: 1.125rem;
  width: 320px;
  height: 20rem;
  /* position: fixed;
  bottom: 2rem; */
  /* left: 28.1rem; */
  overflow-y: auto;
`;

export default PdfString;
