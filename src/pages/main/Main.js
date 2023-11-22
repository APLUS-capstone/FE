import React, { useState } from "react";
import styled from "styled-components";
import PdfString from "../../components/PdfString";
import Loader from "../loader/Loader";
import FileUpload from "../../components/main/FileUpload";
import Checklist from "../../components/main/Checklist";

//백에서 String 받아온 부분,
const StringReturned = ({ fileUploaded }) => {
  const exampleString =
  "Type Checking: Wrap-up\n■ As we have seen, a program can be decomposed into \nsmaller subcomponents\n■ Therefore, the basic idea is to traverse into those \nsubcomponents\n▪ If all the subcomponent are free from errors, then the whole \nprogram is also free from errors\n■ Although not explicitly explained, other semantic errors \ncan be easily detected during this process as well\n▪ Ex) Use of undeclared identifier\n▪ Ex) Redeclaration of identifier\n18\n";
  return fileUploaded && <PdfString string={exampleString} />;
};

const Main = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = () => {
    setFileUploaded(true);
  };
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <MainContainer>
          <FileUpload onFileUpload={handleFileUpload} />
          <Checklist fileUploaded={fileUploaded} setIsLoading={setIsLoading} />
        </MainContainer>
      )}
      <StringReturned fileUploaded={fileUploaded} />
    </div>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  width: 60rem;
  //객관식일때는 선지 개수 옵션이 늘어나니까, 화면 크기를 늘린다
  height: ${(props) => (props.isMultipleChoice ? "50rem" : "45rem")};
  padding: 10px 50px;
  border-radius: 20px;
  position: absolute;
  top: 2rem;
  left: 25rem;
  /* border: 1px solid rgb(159, 159, 160); */
`;

export default Main;
