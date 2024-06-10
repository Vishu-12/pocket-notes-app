import { useState } from "react";
import "../App.css";
import Chips from "./Chips";
export default function NewGroupPopup({ open, onClose, setOpen, notes, setNotes, noteId }) {

  const [inputValue, setInputValue] = useState("");
  const [inputColor, setInputColor] = useState("");
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newNotes = [...notes, {
      id: Math.floor(Math.random()*90000) + 10000,
      shortName: inputValue?.split(" ")?.map((v)=>v?.[0]?.toUpperCase()).join(""),
      fullName: inputValue,
      color: inputColor,
      notes: []
    }]
    setNotes(newNotes)
    localStorage.setItem('notes', JSON.stringify(newNotes))
    console.log("", todos);
    setInputValue("");
    setInputColor("")
    onClose(false)
  }
  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        width: "100vw",
      }}
    >
      {open && <div
        style={{
          width: "30%",
          padding: "1rem",
          position: "fixed",
          margin: "auto",
          background: " #FFFFFF",
          borderRadius: "5px",
          lineHeight: "4rem",
        }}
        onBlur={(e)=>{
          if (!e.currentTarget.contains(e.relatedTarget)) {
            onClose(false)
          }
        }}
      >
        <div>
          <h2>Create New Notes group</h2>
          <div>
            <label
              htmlFor=""
              style={{ fontSize: "1.2rem", marginRight: "1rem" }}
            >
              Group Name
            </label>

            <input
              style={{
                padding: ".8rem",
                width: "60%",
                borderRadius: "1.6rem",
                border: "1px solid grey",
              }}
              type="text"
              name=""
              id=""
              placeholder="Enter your group name... "
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              htmlFor=""
              style={{ fontSize: "1.2rem", marginRight: "1rem" }}
            >
              Choose colour
            </label>
            <input
            id="colorBtn"
              type="radio"
              name=""
              value={inputColor}
              onClick={()=>setInputColor("#B38BFA")}
              style={{
                opacity: inputColor == "#B38BFA" ? 1 : 0.3,
                marginRight: ".6rem",
                appearance: "none",
                border: "0.8rem solid  #B38BFA",
                borderRadius: "1rem",
              }}
            />
            <input
            id="colorBtn"
              type="radio"
              name=""
              value={inputColor}
              onClick={()=>setInputColor("#FF79F2")}
              style={{
                opacity: inputColor == "#FF79F2" ? 1 : 0.3,
                marginRight: ".6rem",
                appearance: "none",
                border: "0.8rem solid #FF79F2",
                borderRadius: "1rem",
              }}
            />
            <input
            id="colorBtn"
              type="radio"
              name=""
              value={inputColor}
              onClick={()=>setInputColor("#43E6FC")}
              style={{
                opacity: inputColor == "#43E6FC" ? 1 : 0.3,
                marginRight: ".6rem",
                appearance: "none",
                border: "0.8rem solid #43E6FC",
                borderRadius: "1rem",
              }}
            />
            <input
            id="colorBtn"
              type="radio"
              name=""
              value={inputColor}
              onClick={()=>setInputColor("#F19576")}
              style={{
                opacity: inputColor == "#F19576" ? 1 : 0.3,
                marginRight: ".6rem",
                appearance: "none",
                border: "0.8rem solid #F19576",
                borderRadius: "1rem",
              }}
            />
            <input
            id="colorBtn"
              type="radio"
              name=""
              value={inputColor}
              onClick={()=>setInputColor("#0047FF")}
              style={{
                opacity: inputColor == "#0047FF" ? 1 : 0.3,
                marginRight: ".6rem",
                appearance: "none",
                border: "0.8rem solid #0047FF",
                borderRadius: "1rem",
              }}
            />
            <input
            id="colorBtn"
              type="radio"
              name=""
              value={inputColor}
              onClick={()=>setInputColor("#6691FF")}
              style={{
                opacity: inputColor == "#6691FF" ? 1 : 0.3,
                marginRight: ".6rem",
                appearance: "none",
                border: "0.8rem solid #6691FF",
                borderRadius: "1rem",
              }}
            />
          </div>
        </div>
        <button
          style={{
            background: "black",
            color: "white",
            padding: ".3rem 2rem",
            border: "none",
            borderRadius: "5px",
            float: "right",
          }}
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>}
      <Chips todos={notes} setOpen={setOpen} noteId={noteId} />
    </div>
  );
}
