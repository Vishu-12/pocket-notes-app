import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import NotesText from "./NotesText";
import TextArea from "./TextArea";

export default function ParticularNotesPage({notes, noteId, setNotes}) {

  return (
    <div
      style={{
        marginLeft: "23%",
        height: "100vh",
        width: "75%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopBar note={notes[findIdxFromId(noteId, notes)]} />
      <div style={{ marginTop: "2rem", marginBottom: "25rem" }}>
      {notes?.[findIdxFromId(noteId, notes)]?.notes?.map((todosItem) => {
        return (
            <NotesText key={todosItem.id} date={todosItem.date} time={todosItem.time} text={todosItem.text} />
            );
          })}
          </div>
      <TextArea todos={notes} setTodos={setNotes} noteIdx={findIdxFromId(noteId,notes)} />
    </div>
  );
}

function findIdxFromId(id, notes) {
  for (let index = 0; index < notes?.length; index++) {
    const element = notes[index];
    if (element?.id == id) {
      return index;
    }
  }
}