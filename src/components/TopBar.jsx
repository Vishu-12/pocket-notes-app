import React from "react";
import Chips from "./Chips";

export default function TopBar({ note }) {
  return (
    <div className="bg-[#E8E8E8] h-20 w-full pl-4 pb-4">
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <div
          style={{
            padding: ".7rem .7rem",
            borderRadius: "50%",
            backgroundColor: `${note.color}`,
            color: "white",
          }}
        >
          {note.shortName}
        </div>
        <div style={{ padding: ".7rem .7rem" }}>{note.fullName}</div>
      </div>
    </div>
  );
}
