import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
const Header = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <StHeader
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welecome !</h1>
    </StHeader>
    //
  );
};

export default Header;

const StHeader = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
