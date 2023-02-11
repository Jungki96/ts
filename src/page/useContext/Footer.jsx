import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <StFooter
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button onClick={toggleTheme}>다크모드</button>
    </StFooter>
  );
};

export default Footer;

const StFooter = styled.div`
  width: 100%;
  height: 80px;
  border-top: 2px solid gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .button {
    padding: 10px;
    margin-right: 30px;
  }
`;
