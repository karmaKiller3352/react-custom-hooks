import { useState, useEffect } from "react";

import { useDeepEffect } from "../hooks/useDeepEffect";

export const UseDeepEffect = () => {
  const [count, setCount] = useState(0);

  const obj = {
    foo: {
      bar: 22,
    },
  };

  useDeepEffect(() => {
    console.log(obj);
  }, [obj]);

  return <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>;
};
