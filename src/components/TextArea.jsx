import React, { useState } from "react";
import arrow from "/assets/arrow.png";

export default function TextArea({ todos, setTodos, noteIdx }) {
  const [textareaValue, setTextareaValue] = useState("");
  function handleChange(e) {
    setTextareaValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const now = new Date();
    const currentTime = now.toLocaleTimeString("en-US");
    const currentDate = now.toLocaleDateString(undefined);
    const _newNotes = [...todos];
    _newNotes?.[noteIdx]?.["notes"]?.push({
      id: Math.floor(Math.random() * 90000) + 10000,
      time: currentTime,
      date: currentDate,
      text: textareaValue,
    });
    localStorage.setItem("notes", JSON.stringify(_newNotes));
    setTodos(_newNotes);

    setTextareaValue("");
  }
  // EnterPress = (e) => {
  //   if (e.keyCode == 13 && e.shiftKey == false) {
  //     e.preventDefault();
  //     // addData();
  //   }
  // };
  return (
    <div
      style={{
        bottom: "0",
        position: "fixed",
        background: "white",
        width: "75%",
        height: "20%",
        border: "1rem solid #E8E8E8",
        borderRadius: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "78%",
          padding: "1rem",
          border: "none",
          borderRadius: "1rem",
        }}
      >
        <textarea
          name=""
          id=""
          style={{
            width: "98%",
            height: "78%",
            fontSize: "1.4rem",
            resize: "none",
            border: "none",
            outline: "none",
          }}
          value={textareaValue}
          onChange={handleChange}
          placeholder="Enter your text here..........."
          // onKeyDown={EnterPress}
        ></textarea>

        <button
          onSubmit={handleSubmit}
          style={{ border: "none", background: "transparent", float: "right" }}
        >
          <img
            src={arrow}
            alt=""
            style={{ float: "right", marginRight: "2rem" }}
          />
        </button>
      </div>
    </div>
  );
}
