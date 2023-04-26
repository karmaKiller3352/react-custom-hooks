import { useState } from "react";
import { useComponentUpdate } from "../hooks/useComponentUpdate";

type Section = {
  number: number;
};

const ShowSection = (props: Section) => {
  useComponentUpdate<Section>(props, (prev, next) => {
    console.log('Prev props', prev)
    console.log('Next props', next)
  });

  return <h3>{props.number}</h3>;
};

export const UseComponentUpdate = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <button onClick={() => setNumber(Math.round(Math.random() * 10))}>
        Generate number
      </button>
      <ShowSection number={number} />
    </div>
  );
};
