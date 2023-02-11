import React, { useState, useRef } from "react";

const UseRef = () => {
  const [render, setRender] = useState(0);
  const countRef = useRef(0);
  let couterVar = 0;

  const doRendering = () => {
    setRender(render + 1);
    console.log("랜더");
  };
  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref : ", countRef.current);
  };
  const increaseVar = () => {
    couterVar += 1;
    console.log("Var : ", couterVar);
  };

  return (
    <>
      <p>Ref : {countRef.current}</p>
      <p>Var : {couterVar}</p>
      <button onClick={doRendering}>렌더</button>
      <button onClick={increaseRef}>Ref 증가</button>
      <button onClick={increaseVar}>Var 증가</button>
    </>
  );
};
export default UseRef;
