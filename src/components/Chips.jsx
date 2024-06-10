import React from "react";

export default function Chips({ todos, setOpen, noteId }) {
  return (
    <div
      style={{
        position: "fixed",
        left: "2rem",
        top: "7rem",
        height: "83vh",
        overflowX: "scroll",
        width: "20%",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {todos?.map((todosItem) => (
        <div
          key={todosItem.id}
          style={{
            display: "flex",
            marginTop: "2rem",
            cursor: "pointer",
            backgroundColor: noteId == todosItem.id && "#F7ECDC",
          }}
          onClick={(e) => setOpen(todosItem.id)}
        >
          <div
            style={{
              padding: ".7rem .7rem",
              borderRadius: "50%",
              backgroundColor: `${todosItem.color}`,
              color: "white",
            }}
          >
            {todosItem.shortName}
          </div>
          <div style={{ padding: ".7rem .7rem" }}>{todosItem.fullName}</div>
        </div>
      ))}
    </div>
  );
}
