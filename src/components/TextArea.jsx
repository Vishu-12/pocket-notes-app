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
  return (
    <div className="bottom-0 fixed bg-white w-4/5 h-1/5 border-8 border-solid border-[#E8E8E8] rounded-2xl">
      <div className="w-full h-full p-4 border-none rounded-2xl">
        <textarea
          name=""
          id=""
          className="w-full h-full text-2xl resize-none border-none outline-none"
          value={textareaValue}
          onChange={handleChange}
          placeholder="Enter your text here..........."
        ></textarea>
        <div onClick={handleSubmit} className="bottom-4 fixed right-4">
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
}
