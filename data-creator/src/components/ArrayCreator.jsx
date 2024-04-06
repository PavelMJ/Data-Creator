/* eslint-disable react/prop-types */
import { useState } from "react";
import ObjectCreator from "./ObjectCreator";

export default function ArrayCreator({ array }) {
  const [arr, setArr] = useState([...array]);
  const [inputVal, setInputVal] = useState("");

  const mapElements = () => {
    return arr.map((val, i) => {
      if (val[1].constructor.name === "Object") {
        return <ObjectCreator key={i} />;
      } else if (Array.isArray(val[1])) {
        return <ArrayCreator key={i} />;
      } else {
        return (
          <>
            <div>
              {val[0]}:{val[1]}
            </div>
          </>
        );
      }
    });
  };
  return (
    <div className="ArrayCreator">
      <input type="text" />
      <button>add value</button>
      <button>add Object</button>
      {mapElements()}
    </div>
  );
}
