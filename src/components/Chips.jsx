import React from "react";

export default function Chips({ todos, setOpen, noteId }) {
  return (
    <div
      className="fixed left-8 top-28 h-full overflow-x-scroll w-1/5 "
      style={{
        // position: "fixed",
        // left: "2rem",
        // top: "7rem",
        // height: "83vh",
        // overflowX: "scroll",
        // width: "20%",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {todos?.map((todosItem) => (
        <div
          key={todosItem.id}
          className={`flex mt-8 cursor-pointer p-2 rounded-lg
          }`}
          style={{
            backgroundColor: noteId == todosItem.id && "#F7ECDC",
          }}
          onClick={(e) => setOpen(todosItem.id)}
        >
          <div
            className={`p-3 rounded-full text-white `}
            style={{
              backgroundColor: `${todosItem.color}`,
            }}
          >
            {todosItem.shortName}
          </div>
          <div className="p-3">{todosItem.fullName}</div>
        </div>
      ))}
    </div>
  );
}
