import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const UseContext = () => {
  return (
    <Page>
      <Header />
      <Content />
      <Footer />
    </Page>
  );
};

export default UseContext;

const Page = styled.div`
  box-sizing: border-box;
  margin: 0;
  font-family: sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
