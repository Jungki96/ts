import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Pagination from "./Pagination";

const List = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const fetchList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`http://localhost:3001/userList`);
      setLists(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      console.error(error);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          {lists.slice(offset, offset + limit).map(({ url, name }) => (
            <OneDog>
              <StDog style={{ backgroundImage: `url(${url})` }}>
                <StName>{name}</StName>
              </StDog>
              <Space />
            </OneDog>
          ))}
        </Container>
      )}
      <Space />
      <Pagination total={lists.length} limit={limit} page={page} setPage={setPage} />
    </>
  );
};
export default List;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;
const StDog = styled.div`
  position: relative;
  width: 230px;
  padding: 10px;
  max-width: 45vw;
  height: 45vh;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
`;

const StName = styled.h3`
  position: absolute;
  font-size: medium;
  bottom: 30px;
  color: beige;
`;

const OneDog = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Space = styled.div`
  padding-left: 10px;
`;
