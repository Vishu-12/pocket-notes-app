import React from "react";

export default function NotesText({ date, time, text }) {
  return (
    <div>
      <div className="px-28 py-8 flex justify-center items-center">
        <div className="basis-1/2">
          <p>{time}</p>
          <p>{date}</p>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
