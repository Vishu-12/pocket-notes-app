import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import NewGroupPopup from "./NewGroupPopup";
// import Chips from "./Chips";

export default function SideBar({ setOpen, notes, setNotes, noteId }) {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div
      className="SideBar"
      style={{
        flexBasis: "20%",
        padding: "1.4rem 0rem 1.4rem 1.4rem",
        background: "white",
        width: "20%",
        height: "100%",
        position: "fixed",
        overflowX: "hidden",
      }}
    >
      <div>
        <h2>Pocket Notes</h2>
        <button
          style={{
            width: "80%",
            marginTop: "1.3rem",

            padding: ".4rem 1rem",
            borderRadius: "20px",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            background: "black",
            color: "white",
          }}
          onClick={() => setOpenPopup(true)}
        >
          <GrAdd style={{ marginRight: ".3rem" }} />
          Create Notes group
        </button>
        <NewGroupPopup
          open={openPopup}
          onClose={setOpenPopup}
          setOpen={setOpen}
          notes={notes}
          setNotes={setNotes}
          noteId={noteId}
        />
      </div>
    </div>
  );
}
