import { useState } from "react";
import "../App.css";
import Chips from "./Chips";
export default function NewGroupPopup({
  open,
  onClose,
  setOpen,
  notes,
  setNotes,
  noteId,
}) {
  const [inputValue, setInputValue] = useState("");
  const [inputColor, setInputColor] = useState("");
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newNotes = [
      ...notes,
      {
        id: Math.floor(Math.random() * 90000) + 10000,
        shortName: inputValue
          ?.split(" ")
          ?.map((v) => v?.[0]?.toUpperCase())
          .join(""),
        fullName: inputValue,
        color: inputColor,
        notes: [],
      },
    ];
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    console.log("", todos);
    setInputValue("");
    setInputColor("");
    onClose(false);
  }
  return (
    <div className="flex justify-center w-screen">
      {open && (
        <div
          className="w-2/5 p-5 fixed bg-white rounded-xs leading-10"
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              onClose(false);
            }
          }}
        >
          <div>
            <h1 className="text-xl font-bold mb-4">Create New Notes group</h1>
            <div>
              <label htmlFor="" className="text-lg mr-7 font-semibold mb-6">
                Group Name
              </label>

              <input
                className="py-1 px-4 w-1/2 rounded-xl border-solid border-2 border-gray-700 mb-6"
                type="text"
                name=""
                id=""
                placeholder="Enter your group name... "
                value={inputValue}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="" className="text-lg mr-7 font-semibold">
                Choose colour
              </label>
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#B38BFA")}
                style={{ opacity: `${inputColor == "#B38BFA" ? "1" : ".2"}` }}
                className={`
                 mr-3 appearance-none border-solid border-8 size-6 rounded-2xl border-[#B38BFA] bg-[#B38BFA]`}
              />
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#FF79F2")}
                style={{ opacity: `${inputColor == "#FF79F2" ? "1" : ".2"}` }}
                className={` mr-3 appearance-none border-solid border-8 size-6 rounded-2xl  border-[#FF79F2] bg-[#FF79F2]`}
              />
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#F19576")}
                style={{ opacity: `${inputColor == "#F19576" ? "1" : ".2"}` }}
                className={` mr-3 appearance-none border-solid border-8 size-6 rounded-2xl  border-[#43E6FC] bg-[#43E6FC]`}
              />
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#F19576")}
                style={{ opacity: `${inputColor == "#F19576" ? "1" : ".2"}` }}
                className={`
                 mr-3 appearance-none border-solid border-8 size-6 rounded-2xl  border-[#F19576] bg-[#F19576]`}
              />
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#0047FF")}
                style={{ opacity: `${inputColor == "#0047FF" ? "1" : ".2"}` }}
                className={`
                 mr-3 appearance-none border-solid border-8 size-6 rounded-2xl  border-[#0047FF] bg-[#0047FF]`}
              />
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#6691FF")}
                style={{ opacity: `${inputColor == "#6691FF" ? "1" : ".2"}` }}
                className={`
                 mr-3 appearance-none border-solid border-8 size-6 rounded-2xl  border-[#6691FF] bg-[#6691FF]`}
                // style={{
                //   opacity: inputColor == "#6691FF" ? 1 : 0.3,
                //   marginRight: ".6rem",
                //   appearance: "none",
                //   border: "0.8rem solid #6691FF",
                //   borderRadius: "1rem",
                // }}
              />
            </div>
          </div>
          <button
            className="bg-black text-white py-1 px-8 border-none rounded-lg float-right "
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      )}
      <Chips todos={notes} setOpen={setOpen} noteId={noteId} />
    </div>
  );
}
