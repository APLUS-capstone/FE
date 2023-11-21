import React, { useState } from "react";
import styled from "styled-components";
import WrongIcon from "../../assets/images/wrongIcon.png"; //wrongIcon은 svg 변환 안돼서 그냥 png로
import { ReactComponent as CorrectIcon } from "../../assets/images/answerGrade.svg";
import { CustomBtn } from "../../components/CustomButtons";
const dummy_questions = [
  {
    question:
      "1. Which of the following statements about static typing is correct?\nA) Static typing means type errors are detected after the program has executed.\nB) Static typing can still sometimes allow for type errors at runtime due to unsafe type conversions.\nC) Static typing guarantees no type errors will occur, regardless of the language's type system.\nD) In static typing, type errors are typically caught during the lexical analysis phase.\nE) Static typing is a feature where types are determined and fixed at runtime.",
    answer: "B",
    solution:
      "Static typing aims to detect type errors before runtime, usually at compile time. However, certain languages, like C, allow for unsafe type conversions (e.g., pointer casting), which means that type errors can still occur at runtime. Therefore, option B is correct.",
  },
  {
    question:
      "2. Which of the following best describes the difference between implicit and explicit typing?\nA) Implicit typing occurs at compile-time, whereas explicit typing occurs at runtime.\nB) Explicit typing requires types to be explicitly declared, like in C.\nC) Implicit typing allows for more type errors than explicit typing.\nD) Explicit typing refers to automatic type inference, whereas implicit typing requires manual type specification.\nE) Implicit typing is another term for dynamic typing.",
    answer: "B",
    solution:
      "Explicit typing requires that the type of each variable or function is explicitly declared by the programmer. This is contrasted with implicit typing, where the types are inferred by the compiler or interpreter. Thus, option B is the correct choice.",
  },
  {
    question:
      "3. In Prof. Jaeseung Choi's lecture notes, which of the following is mentioned as an advantage of static typing?\nA) Programs with static typing are always error-free.\nB) Static typing allows a program to be more flexible and less restrictive.\nC) Static typing eliminates the need for a symbol table in the compilation process.\nD) A program that passes static type checking is safe from type errors if the language has a sound and strong type system.\nE) Explicitly typed languages are inherently slower due to the overhead of type checking.",
    answer: "D",
    solution:
      "One of the advantages of static typing is that it can guarantee safety from type errors if a program passes type checking, assuming that the language in question has a sound and strong type system. This is not to say that the program will be entirely error-free, but rather that type errors, specifically, are less likely to occur. This is detailed in option D.",
  },
  {
    question:
      "4. In the context of the lecture notes, which of the following would be flagged as a type mismatch error?\nA) 'int x; x = true;'\nB) 'bool flag = false; flag = 0;'\nC) 'int sum = 0; sum = sum + 1;'\nD) 'float pi = 3.14; pi = pi + 0.0016;'\nE) 'char letter = 'a'; letter = 'b';'",
    answer: "A",
    solution:
      "In the lecture notes, we know that types should match between variable declarations and assignments. Since 'int x' declares 'x' to be an integer, assigning it a boolean value 'true' is a type mismatch error. Therefore, option A is correct.",
  },
  {
    question:
      "5. What does the scope of an identifier refer to?\nA) The scope is the part of the program where its value is retained.\nB) The scope of an identifier indicates its lifetime in memory.\nC) The scope is the range in which an identifier's type can be inferred.\nD) The scope signifies the portions of a program where the identifier is valid and accessible.\nE) The scope outlines the functions where the identifier can be redeclared without errors.",
    answer: "D",
    solution:
      "The scope of an identifier refers to the portions of a program where that particular name is valid and can be used to refer to the variable or function it represents. This is outlined in option D of the multiple-choice question.",
  },
];

const Chatroom = () => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  //객관식 문제가 오면 a,b,c,d 기준으로 띄어쓰기 해줘야함
  const formatQuestionText = (text) => {
    return text.replace(/([ABCDE]\))/g, "\n$1) ");
  };

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    setAnswers({ ...answers, [questionIndex]: selectedAnswer });
  };

  const handleSubmit = () => {
    const evaluatedResults = dummy_questions.map((q, index) => ({
      ...q,
      userAnswer: answers[index],
      isCorrect: answers[index] === q.answer,
    }));
    setResults(evaluatedResults);
  };

  const isOptionCorrect = (questionIndex, option) => {
    return dummy_questions[questionIndex].answer === option;
  };

  return (
    <ChatroomContainer>
      {dummy_questions.map((q, index) => (
        <QuestionContainer key={index}>
          <QuestionHeader>
            {results && (
              <IconContainer>
                {results[index].isCorrect ? (
                  <CorrectIcon />
                ) : (
                  <img
                    src={WrongIcon}
                    width="30px"
                    height="40px"
                    alt="Wrong Icon"
                  />
                )}
              </IconContainer>
            )}
            <span>Question {index + 1}</span>
          </QuestionHeader>
          <div>
            {formatQuestionText(q.question)
              .split("\n")
              .map((line, key) => (
                <React.Fragment key={key}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </div>
          {["A", "B", "C", "D", "E"].map((choice) => (
            <Label
              key={choice}
              isCorrect={isOptionCorrect(index, choice)}
              isSelected={answers[index] === choice}
              isAnswered={results != null}
            >
              <input
                type="radio"
                name={`question-${index}`}
                value={choice}
                onChange={() => handleAnswerChange(index, choice)}
                disabled={results != null}
              />
              {choice}
              {results &&
                !results[index].isCorrect &&
                isOptionCorrect(index, choice) && <span> (정답)</span>}
            </Label>
          ))}
        </QuestionContainer>
      ))}
      <CustomBtn onClick={handleSubmit} text="채점하기" />

      {results && (
        <div>
          {results.map((result, index) => (
            <div key={index}>
              {
                <p>
                  Question {index + 1} explanation: <br />
                  {result.solution}
                </p>
              }
            </div>
          ))}
        </div>
      )}
    </ChatroomContainer>
  );
};
const ChatroomContainer = styled.div`
  position: fixed;
  width: 75vw;
  height: 90vh;
  left: 20rem;
  top: 3rem;
  overflow-y: auto;
`;
const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;
const IconContainer = styled.div`
  position: absolute;
  left: -3px;
  top: -10px;
`;
const Label = styled.label`
  color: ${(props) =>
    props.isCorrect && props.isAnswered && !props.isSelected ? "red" : "black"};
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
`;

export default Chatroom;
