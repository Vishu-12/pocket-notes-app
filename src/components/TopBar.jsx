import React from "react";
import Chips from "./Chips";

export default function TopBar({note}) {
  return (
    <div
      style={{
        background: "#E8E8E8",
        height: "5rem",
        width: "100%",
        paddingLeft: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <div
          style={{ display: "flex", marginTop: "2rem"}}       >
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
