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
          className={`flex mt-8 cursor-pointer bg-${
            noteId == todosItem.id && "#F7ECDC"
          }`}
          // style={{
          //   display: "flex",
          //   marginTop: "2rem",
          //   cursor: "pointer",
          //   backgroundColor: noteId == todosItem.id && "#F7ECDC",
          // }}
          onClick={(e) => setOpen(todosItem.id)}
        >
          <div
            className={`p-3 rounded-full bg-${todosItem?.color} text-white `}
            // style={{
            //   padding: ".7rem .7rem",
            //   borderRadius: "50%",
            //   backgroundColor: `${todosItem.color}`,
            //   color: "white",
            // }}
          >
            {todosItem.shortName}
          </div>
          <div className="p-3">{todosItem.fullName}</div>
        </div>
      ))}
    </div>
  );
}
