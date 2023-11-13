import React, { useState } from "react";
import styled from "styled-components";
const Checklist = () => {
  const [questionTypeRadio, setQuestionTypeRadio] = useState("multipleChoice"); //문제유형
  const [languageType, setLanguageType] = useState("kor"); // 언어
  const [optionsCount, setOptionsCount] = useState(0); // 보기 수
  const [questionsCount, setQuestionsCount] = useState(""); //문제수

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
      <h3>문제 유형 선택</h3>
      <div>
        <RadioInputs>
          <Radio>
            <input
              type="radio"
              name="questionType"
              value="multipleChoice"
              onChange={handleQuestionTypeChange}
              checked={questionTypeRadio === "multipleChoice"}
            />
            <span className="name">객관식</span>
          </Radio>
          <Radio>
            <input
              type="radio"
              name="questionType"
              value="essayQuestion"
              onChange={handleQuestionTypeChange}
              checked={questionTypeRadio === "essayQuestion"}
            />
            <span className="name">주관식</span>
          </Radio>
          <Radio>
            <input
              type="radio"
              name="questionType"
              value="shortAnswer"
              onChange={handleQuestionTypeChange}
              checked={questionTypeRadio === "shortAnswer"}
            />
            <span className="name">단답형</span>
          </Radio>
        </RadioInputs>
      </div>
      {questionTypeRadio === "multipleChoice" && (
        <div>
          <h3>보기 개수</h3>
          <InputText
            type="number"
            placeholder="선지 개수 입력"
            value={optionsCount}
            onChange={handleOptionsCountChange}
          />
        </div>
      )}

      <h3>문제수 입력</h3>
      <InputText
        type="text"
        placeholder="10"
        value={questionsCount}
        onChange={handleQuestionsCountChange}
      />

      <h3>언어 선택</h3>
      <RadioInputs>
        <Radio>
          <input
            type="radio"
            name="languageType"
            value="kor"
            onChange={handleLanguageTypeChange}
            checked={languageType === "kor"}
          />
          <span className="name">한국어</span>
        </Radio>
        <Radio>
          <input
            type="radio"
            name="languageType"
            value="eng"
            onChange={handleLanguageTypeChange}
            checked={languageType === "eng"}
          />
          <span className="name">영어</span>
        </Radio>
      </RadioInputs>
      {/* <select name="languageType" id="languageType">
        <option value="kor">한국어</option>
        <option value="en">영어</option>
      </select> */}

      {/* <h3>PDF 강의 자료 업로드</h3>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {file && <p>{file.name}</p>} */}
      <Form>
        <FormTitle>Upload your file</FormTitle>
        <FormParagraph>PDF file</FormParagraph>
        <DropContainer htmlFor="file-input">
          <DropTitle>Drop files here</DropTitle>
          or
          <FileInput type="file" accept=".pdf" required id="file-input" />
        </DropContainer>
      </Form>
      <StyledButton style={{ verticalAlign: "middle" }}>
        <ButtonSpan>Submit</ButtonSpan>
      </StyledButton>
    </ChecklistContainer>
  );
};

const ChecklistContainer = styled.form`
  position: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 27rem;
  //객관식일때는 선지 개수 옵션이 늘어나니까, 화면 크기를 늘린다
  height: ${(props) => (props.isMultipleChoice ? "50rem" : "45rem")};
  padding: 10px 50px;
  border-radius: 20px;
  position: absolute;
  top: 2rem;
  left: 20rem;
  border: 1px solid rgb(159, 159, 160);
`;

const RadioInputs = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #eee;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 300px;
  font-size: 14px;
`;

const Radio = styled.label`
  flex: 1 1 auto;
  text-align: center;

  input {
    display: none;
  }

  .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 0;
    color: rgba(51, 65, 85, 1);
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: #f3f3f3;
    }
  }

  input:checked + .name {
    background-color: #fff;
    font-weight: 600;
  }
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

const StyledButton = styled.button`
  position: absolute;
  margin-top: 1rem;
  left: 30%;
  display: inline-block;
  border-radius: 7px;
  border: none;
  background: #1875ff;
  color: white;
  font-family: inherit;
  text-align: center;
  font-size: 13px;
  box-shadow: 0px 14px 56px -11px #1875ff;
  width: 10em;
  padding: 1em;
  transition: all 0.4s;
  cursor: pointer;

  &:hover span {
    padding-right: 3.55em;
  }

  &:hover span:after {
    opacity: 4; /* This should likely be 1 instead of 4 as opacity ranges from 0 to 1 */
    right: 0;
  }
`;

const ButtonSpan = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.4s;

  &:after {
    /* content: "for free"; */
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.7s;
  }
`;

export default Checklist;
