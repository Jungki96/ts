import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
const Header = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <StContent
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>정기 화이팅</p>
    </StContent>
  );
};

export default Header;

const StContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
