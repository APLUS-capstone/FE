import styled from "styled-components";
const CustomBtn = ({ text, textAfter }) => {
  return (
    <StyledButton style={{ verticalAlign: "middle" }}>
      <ButtonSpan>{text}</ButtonSpan>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  /* position: absolute; */
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
  width: 13rem;
  padding: 1em;
  transition: all 0.4s;
  cursor: pointer;

  &:hover span {
    padding-right: 3.55em;
  }

  &:hover span:after {
    opacity: 4;
    right: 0;
  }
`;

const ButtonSpan = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.4s;

  &:after {
    content: "{textAfter}";
    /* position: absolute; */
    opacity: 0;
    top: 0;
    right: -50px;
    transition: 0.7s;
  }
`;
export default CustomBtn;
