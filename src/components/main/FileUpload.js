import React, { useState,useContext } from "react";
import styled from "styled-components";
import { CustomBtnText } from "../CustomButtons";
import ChatRoomsContext from "../../ChatRoomsContext"; 

//파일 업로드 하는 부분

const FileUpload = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { setChatId } = useContext(ChatRoomsContext);
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      e.preventDefault();
      setSelectedFile(e.target.files[0]);
      // onFileUpload(true);
    }
  };

  const handleSendFile = async (e) => {
    //여기서 이제 파일을 백으로 보냄
    //FormData 객체에 담아서 보낸다-> 일단 예시 내용 담아둠
    e.preventDefault();
    if (selectedFile) {
      //선텍된 파일이 있는 경우에만
      // e.preventDefault();
      
      const tempChatId = Date.now();//임시 chatid생성
      setChatId(tempChatId);

      onFileUpload(true);
      // console.log(selectedFile);
      // const formData = new FormData();
      // formData.append("userId", userID);
      // formData.append("file", selectedFile);

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
  return (
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

        <CustomBtnText
          text="Send File"
          textAfter="📨"
          onClick={handleSendFile}
        />
      </Form>
    </ChecklistItem>
  );
};

//////
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
const ChecklistItem = styled.div`
  display: flex;
  flex-direction: column;

  /* border: 1px solid rgb(159, 159, 160); */
`;
export default FileUpload;
