import "./styles.css";
import React, { useState, useMemo } from "react";

const square = (params) => {
  const testData = [...Array(1000).keys()];
  testData.forEach(() => {
    console.log("ループ処理中");
  });

  return params * params;
};

const Counter = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const countResultA = () => {
    setCountA((prevCount) => prevCount + 1);
    console.log("countA calculate");
  };

  const countResultB = () => {
    setCountB((prevCount) => prevCount + 1);
    console.log("countB calc");
  };

  const squrareArea = useMemo(() => square(countB), [countB]);

  return (
    <>
      <p>
        計算結果A：　{countA}　　
        <button onClick={countResultA}>計算：　A＋1</button>
      </p>
      <p>
        計算結果B：　{countB}　　
        <button onClick={countResultB}>計算：　B＋1</button>
      </p>
      <p>正方形の面積</p>
      <p>計算結果B　＊　計算結果B　＝　　{squrareArea}</p>
    </>
  );
};

export default function App() {
  return <Counter />;
}
