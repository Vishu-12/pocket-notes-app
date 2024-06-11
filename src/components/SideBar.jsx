import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import NewGroupPopup from "./NewGroupPopup";
// import Chips from "./Chips";

export default function SideBar({ setOpen, notes, setNotes, noteId }) {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="p-5 bg-white w-1/5 h-full fixed overflow-x-hidden basis-1/5">
      <div>
        <h2 className="font-bold text-2xl">Pocket Notes</h2>
        <button
          className="mt-5 p-3 px-5 rounded-full border-none flex justify-center items-center text-lg bg-black text-white"
          onClick={() => setOpenPopup(true)}
        >
          <GrAdd className="mr-2" />
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
