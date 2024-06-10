import React from "react";
import Chips from "./Chips";

export default function TopBar({ note }) {
  return (
    <div className="bg-[rgb(232,232,232)] h-20 w-full pl-4 pb-4">
      <div className="flex mt-4 pb-4">
        <div
          className="p-3 rounded-full text-white"
          style={{
            backgroundColor: `${note.color}`,
          }}
        >
          {note.shortName}
        </div>
        <div className="p-3">{note.fullName}</div>
      </div>
    </div>
  );
}
