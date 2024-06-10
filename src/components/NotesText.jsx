import React from "react";

export default function NotesText({ date, time, text }) {
  return (
    <div>
      <div
        style={{
          padding: "2rem 7rem ",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ flexBasis: "50%" }}>
          <p>{time}</p>
          <p>{date}</p>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
