import { useState } from "react";
import ArrayCreator from "./ArrayCreator";

// eslint-disable-next-line react/prop-types
export default function ObjectCreator({ object }) {
  const [obj, setObj] = useState({ ...object });
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  console.log(object);
  console.log(Object.entries(obj));

  const addProperty = (key, value) => {
    setObj({ ...obj, [key]: value });
  };

  const addNestedObject = (objName) => {
    setObj({ ...obj, [objName]: {} });
  };
  const addNestedArray = () => {};

  const mapProperties = () => {
    return Object.entries(obj).map((val, i) => {
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
    <div className="ObjectCreator">
      <div className="propertyInput">
        <input
          type="text"
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addProperty(key, value);
          }}
        >
          add this property
        </button>
        <br />
        <button>Nested Object</button>
        <button>Nested Array</button>
      </div>
      <p>{"{"}</p>
      {mapProperties()}
      <p>{"}"}</p>
      <button>Add to Data Base</button>
    </div>
  );
}
