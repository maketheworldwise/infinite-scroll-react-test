import { useState, useEffect } from "react";
import "./ScrollContainer.scss";

import Block from "./block/Block";
import { useInView } from "react-intersection-observer";

const one = addData(1, 50);
const two = addData(51, 100);

function ScrollContainer() {
  const [data, setData] = useState(one);
  const [ref, inView] = useInView();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("add: 1 ~ 50");
  }, []);

  useEffect(() => {
    if (inView && count === 0) {
      console.log("add: 51 ~ 100");
      setData(data.concat(two));
      setCount(count + 1);
    }
  }, [inView, count, data]);

  return (
    <>
      <div className="scroll-container">
        {data.map((el) => {
          return <Block key={el} name={el} />;
        })}
        <div ref={ref}></div>
      </div>
    </>
  );
}

function addData(i, j) {
  const arr = [];
  for (let n = i; n <= j; n++) {
    arr.push(n);
  }
  return arr;
}

export default ScrollContainer;
