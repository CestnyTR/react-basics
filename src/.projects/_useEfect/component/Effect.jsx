import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("Mounting Effect + updating Effect");
  //     setTimeout(() => {
  //       console.log("Data fetched");
  //     }, 1000);
  //   }, [count]);
  //       console.log("Render");
  const fetchData = () => {
    console.log("Cleaning up Effect");
  };
  useEffect(() => {
    console.log("Mounting Effect");
    const timerId = setInterval(fetchData, 1000);
    return () => {
      console.log("Cleaning up Effect");
      clearInterval(timerId);
      console.log("Unmounting Effect");
    };
  }, []);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default Effect;
