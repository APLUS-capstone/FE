import React, { useState } from "react";
import styled from "styled-components";
import CustomBtn from "./CustomBtn";
import RadioGroup from "./RadioGroup";

const Checklist = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [questionTypeRadio, setQuestionTypeRadio] = useState("multipleChoice"); //문제유형
  const [languageType, setLanguageType] = useState("kor"); // 언어
  const [optionsCount, setOptionsCount] = useState(0); // 보기 수
  const [questionsCount, setQuestionsCount] = useState(""); //문제수

  const FormSection = ({ title, children }) => {
    return (
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    );
  };

  const handleQuestionTypeChange = (e) => {
    setQuestionTypeRadio(e.target.value);
  };
  const handleLanguageTypeChange = (e) => {
    setLanguageType(e.target.value);
  };
  const handleOptionsCountChange = (e) => {
    setOptionsCount(e.target.value);
  };

  const handleQuestionsCountChange = (e) => {
    setQuestionsCount(e.target.value);
  };

  const handleFileChange = (e) => {
    //파일 선택됨
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setFileUploaded(true);
    }
  };

  const handleSendFile = async () => {
    //여기서 이제 파일을 백으로 보냄
    //FormData 객체에 담아서 보낸다
    if (selectedFile) {
      //선텍된 파일이 있는 경우에만

      const formData = new FormData();
      // formData.append("userId", userID);
      formData.append("file", selectedFile);

      // axios({
      //   method: "post",
      //   url: "여기에 백 api 주소",
      //   data: formData,
      // })
      //   .then((result) => {
      //     console.log("요청성공");
      //     console.log(result);
      //   })
      //   .catch((error) => {
      //     console.log("요청실패");
      //     console.log(error);
      //   });
    } else {
      //선택된 파일이 없음
      console.log("No file selected");
    }
  };

  //각각 입력받은 form 을 확인하는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      questionType: questionTypeRadio,
      optionsCount:
        questionTypeRadio === "multipleChoice" ? parseInt(optionsCount, 10) : 0,
      questionsCount: parseInt(questionsCount, 10) || 0, //정수값
      language: languageType,
    };
    console.log(formData); //나중에 DB에 보내야하는 부분이 될것임 (사용자가 입력한 문제 폼)
  };

  return (
    <ChecklistContainer
      onSubmit={handleSubmit}
      isMultipleChoice={questionTypeRadio === "multipleChoice"}
    >
      <ChecklistItem>
        <Form>
          <FormTitle>Upload your file</FormTitle>
          <FormParagraph>PDF file</FormParagraph>
          <DropContainer htmlFor="file-input">
            <DropTitle>Drop files here</DropTitle>
            or
            <FileInput
              type="file"
              accept=".pdf"
              required
              id="file-input"
              onChange={handleFileChange}
            />
          </DropContainer>
          <CustomBtn
            text="Send File"
            textAfter=" to String"
            onClick={handleSendFile}
          />
        </Form>
        {/* 파일 선택이 되면, 이걸 백에 보내서 string 변환해옴 */}
      </ChecklistItem>

      {fileUploaded && (
        <ChecklistItem>
          <FormSection title="문제 유형 선택">
            <RadioGroup
              name="questionType"
              options={[
                { value: "multipleChoice", label: "객관식" },
                { value: "essayQuestion", label: "주관식" },
                { value: "shortAnswer", label: "단답형" },
              ]}
              selectedValue={questionTypeRadio}
              onChange={handleQuestionTypeChange}
            />
          </FormSection>

          {questionTypeRadio === "multipleChoice" && (
            <FormSection title="보기 개수">
              <InputText
                type="number"
                placeholder="선지 개수 입력"
                value={optionsCount}
                onChange={handleOptionsCountChange}
              />
            </FormSection>
          )}

          <FormSection title="문제수 입력">
            <InputText
              type="text"
              placeholder="10"
              value={questionsCount}
              onChange={handleQuestionsCountChange}
            />
          </FormSection>

          <FormSection title="언어 선택">
            <RadioGroup
              name="languageType"
              options={[
                { value: "kor", label: "한국어" },
                { value: "eng", label: "영어" },
              ]}
              selectedValue={languageType}
              onChange={handleLanguageTypeChange}
            />
          </FormSection>

          <CustomBtn text="Create Question" textAfter=" to String" />
        </ChecklistItem>
      )}
    </ChecklistContainer>
  );
};

const ChecklistContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
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
const ChecklistItem = styled.div`
  display: flex;
  flex-direction: column;

  /* border: 1px solid rgb(159, 159, 160); */
`;
const InputText = styled.input`
  max-width: 190px;
  background-color: #f5f5f5;
  color: #242424;
  padding: 0.15rem 0.5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;
  border-radius: 0.5rem;
  input:focus {
    border-bottom: 2px solid #5b5fc7;
    border-radius: 4px 4px 2px 2px;
  }

  input:hover {
    outline: 1px solid lightgrey;
  }
`;

const Form = styled.form`
  background-color: #fff;
  box-shadow: 0 10px 60px rgb(218, 229, 255);
  border: 1px solid rgb(159, 159, 160);
  border-radius: 20px;
  padding: 2rem 0.7rem 0.7rem 0.7rem;
  text-align: center;
  font-size: 1.125rem;
  max-width: 320px;
  margin-top: 2rem;
`;

const FormTitle = styled.span`
  color: #000000;
  font-size: 1.8rem;
  font-weight: 500;
`;

const FormParagraph = styled.p`
  margin-top: 10px;
  font-size: 0.9375rem;
  color: rgb(105, 105, 105);
`;

const DropContainer = styled.label`
  background-color: #fff;
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 2.1875rem;
  border-radius: 10px;
  border: 2px dashed rgb(171, 202, 255);
  color: #444;
  cursor: pointer;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;

  &:hover {
    background: rgba(0, 140, 255, 0.164);
    border-color: rgba(17, 17, 17, 0.616);
  }
`;

const DropTitle = styled.span`
  color: #444;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: color 0.2s ease-in-out;

  ${DropContainer}:hover & {
    color: #222;
  }
`;

const FileInput = styled.input`
  width: 350px;
  max-width: 100%;
  color: #444;
  padding: 2px;

  background: #fff;
  border-radius: 10px;
  border: 1px solid rgba(8, 8, 8, 0.288);
  &::-webkit-file-upload-button {
    margin-right: 20px;
    border: none;
    background: #084cdf;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    &:hover {
      background: #0d45a5;
    }
  }
`;

export default Checklist;
