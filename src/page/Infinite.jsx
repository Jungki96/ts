import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useObserver } from "mobx-react-lite";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: row;
  margin-top: 5vh;
`;

const StOnePage = styled.div`
  display: flex;
  flex-direction: column;
`;

const StDog = styled.div`
  position: relative;
  width: 400px;
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
  justify-content: center;
`;

const InfiniteScroll = () => {
  //   const [list, setList] = useState([]);
  //   const [page, setPage] = useState(1);
  //   const [isFetching, setIsFetching] = useState(false);
  //   const [error, setError] = useState(null);
  //   const loader = useRef(null);

  //   const fetchData = async () => {
  //     setIsFetching(true);

  //     try {
  //       const response = await axios.get(`http://localhost:3001/userList`);
  //       setList(list.concat(response.data));
  //     } catch (error) {
  //       setError(error);
  //     }

  //     setIsFetching(false);
  //   };

  //   useEffect(() => {
  //     const observer = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && !isFetching) {
  //         setPage(page + 1);
  //       }
  //     });
  //     observer.observe(loader.current);
  //   }, [isFetching, page]);

  //   useEffect(() => {
  //     fetchData();
  //   }, [page]);

  //   return useObserver(() => (
  //     <Container>
  //       <StOnePage>
  //         {list.map(({ url, name }) => (
  //           <OneDog key={name}>
  //             <StDog style={{ backgroundImage: `url(${url})` }}>
  //               <StName>{name}</StName>
  //             </StDog>
  //           </OneDog>
  //         ))}
  //         {error && <p>Error!</p>}
  //         {isFetching && <p>Loading...</p>}
  //         <div ref={loader} />
  //       </StOnePage>
  //     </Container>
  //   ));
  // };
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const loader = useRef(null);

  const fetchData = async () => {
    setIsFetching(true);
    try {
      const response = await axios.get("http://localhost:3001/userList");
      setList(list.concat(response.data));
    } catch (e) {
      setError(true);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchData();
      }
    });
    observer.observe(loader.current);
  }, [loader]);

  return useObserver(() => (
    <Container>
      <StOnePage>
        {list.map(({ id, name, url }) => (
          <OneDog key={id}>
            <StDog style={{ backgroundImage: `url(${url})` }}>
              <StName>{name}</StName>
            </StDog>
          </OneDog>
        ))}
        {error && <p>Error!</p>}
        {isFetching && <p>Loading...</p>}
        <div ref={loader} />
      </StOnePage>
    </Container>
  ));
};

export default InfiniteScroll;
