import { useState, useEffect, useRef } from "react";
import ObjectCreator from "./components/ObjectCreator";
import ArrayCreator from "./components/ArrayCreator";
import "./App.css";

export default function App() {
  const [model, setModel] = useState([]);
  const [start, setStart] = useState(false);

  const addObject = (obj) => {
    setModel([...model, obj]);
  };

  const addArray = () => {
    setModel([...model, []]);
  };

  const renderModel = (array) => {
    return array.map((obj, i) => {
      if (obj.constructor.name === "Object") {
        return <ObjectCreator key={i} object={obj} />;
      } else if (Array.isArray(obj)) {
        return <ArrayCreator key={i} />;
      }
    });
  };

  return (
    <div className="App">
      {start == false && (
        <button
          onClick={() => {
            setStart(true);
          }}
        >
          Create model
        </button>
      )}
      {start && (
        <div>
          <button onClick={addArray}> [ ] </button>
          <button
            onClick={() => {
              addObject({ id: model.length + 1 });
            }}
          >
            {" "}
            {`{ }`}{" "}
          </button>
        </div>
      )}
      {renderModel(model)}
    </div>
  );
}

let obj1 = { id: 1 };

console.log(typeof obj1 === "object");
