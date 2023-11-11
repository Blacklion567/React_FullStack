import { useState, useCallback } from "react";

import Title from './ReactCallBacks/Title';
import CountJs from "./ReactCallBacks/CountJs";
import CountBtn from "./ReactCallBacks/CountBtn";
import AgeBtn from "./ReactCallBacks/AgeBtn";
import Age from "./ReactCallBacks/Age";

const ReactUseCallback = () => {

  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);


  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const incrementAge = useCallback(() => {
    setAge(prevAge => prevAge + 1);
  }, [age]);

  return (
    <>
      <Title />
      <CountJs count={count} />
      <CountBtn handleCount={incrementCount} />
      <Age age={age} />
      <AgeBtn handleAge={incrementAge} />
    </>
  );
};

export default ReactUseCallback;
