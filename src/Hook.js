import React, { useState, useEffect, createContext, useContext } from 'react';

        // useState
    export function SetFavoriteSong() {
    const [rapper, setRapper] = useState({
        name: "J Cole",
        age: 27,
        album: "Forest Hills Drive",
        address: "DNC"
    });

    const updateRapper = () => {
    setRapper(() => {
      return { name: "Tuan Pham", age: "20", album: "not", address: "111/21 duong 2/9" }
    });
  }

    return(
        <>
            <h1>My favorite rapper is {rapper.name}</h1>
            <h1>{rapper.name} was {rapper.age}.</h1>
            <h1>His the best album is {rapper.album}. He was made it in {rapper.address}</h1>

            <button
            style={{
                color: 'red',
            }}
            onClick={(updateRapper)}
            >
                Change Information
            </button>
        </>
    )
}


        // useEffect
  export function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

        // useEffect
export function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return(
    <>
    <h1>Count: {count}</h1>
    <h1>Calculation: {calculation}</h1>
    <button
    onClick={() => setCount((count) => count + 1)}
    >Click to x2 count</button>
    </>
  )
}

