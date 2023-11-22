import React, { useState } from "react";
import styled from "styled-components";
import KakaoLoginButton from "../../assets/images/kakao_login_large_narrow.png";
const Login = () => {
  const Rest_api_key = "01edef910fa2573903206bddf92be765";
  const redirect_uri = "http://localhost:3000/";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <LoginContainer>
        <img
          src={KakaoLoginButton}
          alt="카카오 로그인"
          onClick={handleLogin}
          style={{ cursor: "pointer" }}
        />
      </LoginContainer>
    </>
  );
};
export default Login;
// const KakaoLoginButton = styled.button`
//   background-color: #fee500;
//   color: #391b1b;
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   &:hover {
//     background-color: #f7d600;
//   }
// `;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
