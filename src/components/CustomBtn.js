import styled from "styled-components";
const CustomBtn = ({ text, onClick }) => {
  return (
    <StyledButton
      type="button"
      style={{ verticalAlign: "middle" }}
      onClick={onClick}
    >
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
`;

const ButtonSpan = styled.span`
  display: inline-block;
  position: relative;
`;
export default CustomBtn;
