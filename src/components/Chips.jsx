import React from "react";

export default function Chips({ todos, setOpen, noteId }) {
  return (
    <div
      className="fixed left-8 top-28 sm:h-screen md:h-full overflow-x-scroll sm:w-full md:w-1/5 "
      style={{
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
