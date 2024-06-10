import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import MainPage from "../components/MainPage";
import ParticularNotesPage from "../components/ParticularNotesPage";
import notesJSON from '../../constants.json'

export default function Notes() {
  const [notes, setNotes] = useState();
  const [open, setOpen] = useState(null);

  useEffect(()=>{
    let notes = localStorage.getItem('notes')
    if (notes) {
      notes = JSON.parse(notes)
      setNotes(notes)
    } else {
      localStorage.setItem('notes', JSON.stringify(notesJSON))
      setNotes(notesJSON)
    }
  },[])

  return (
    <div className="flex bg-[#F7ECDC] w-screen h-screen" >
      <SideBar setOpen={setOpen} notes={notes} setNotes={setNotes} noteId={open} />
      {open ? <ParticularNotesPage noteId={open} notes={notes} setNotes={setNotes} /> : <MainPage /> }
    </div>
  );
}
