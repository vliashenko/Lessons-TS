import React, { FC, useState } from "react";

const EventsExamples: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG!");
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("Drop")
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  return (
    <div style={{ margin: "20px auto" }}>
      <input value={value} onChange={changeHandler} type="text" />
      <button onClick={clickHandler}>Click</button>
      <div
        draggable
        onDrag={dragHandler}
        style={{
          width: "200px",
          height: "200px",
          background: "teal",
          margin: "20px auto",
        }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: "200px",
          height: "200px",
          background: isDrag? "red" : "teal",
          margin: "20px auto",
        }}
      ></div>
    </div>
  );
};

export default EventsExamples;
