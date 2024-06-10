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
            <h2>Create New Notes group</h2>
            <div>
              <label htmlFor="" className="text-lg mr-4">
                Group Name
              </label>

              <input
                className="p-1 w-[3/5] rounded-xl border-solid border-2 border-gray-700"
                type="text"
                name=""
                id=""
                placeholder="Enter your group name... "
                value={inputValue}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="" className="text-lg mr-4">
                Choose colour
              </label>
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#B38BFA")}
                className={`opacity-${
                  inputColor == "#B38BFA" ? "100" : "20"
                } mr-3 appearance-none border-solid border-4 rounded-2xl  border-[#B38BFA]`}
              />
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#FF79F2")}
                className={`opacity-${
                  inputColor == "#FF79F2" ? "100" : "20"
                } mr-3 appearance-none border-solid border-4 rounded-2xl  border-[#FF79F2]`}
              />
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#F19576")}
                className={`opacity-${
                  inputColor == "#43E6FC" ? "100" : "20"
                } mr-3 appearance-none border-solid border-4 rounded-2xl  border-[#43E6FC]`}
              />
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#F19576")}
                className={`opacity-${
                  inputColor == "#F19576" ? "100" : "20"
                } mr-3 appearance-none border-solid border-4 rounded-2xl  border-[#F19576]`}
              />
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#0047FF")}
                className={`opacity-${
                  inputColor == "#0047FF" ? "100" : "20"
                } mr-3 appearance-none border-solid border-4 rounded-2xl  border-[#0047FF]`}
              />
              <input
                id="colorBtn"
                type="radio"
                name=""
                value={inputColor}
                onClick={() => setInputColor("#6691FF")}
                className={`opacity-${
                  inputColor == "#6691FF" ? "100" : "20"
                } mr-3 appearance-none border-solid border-4 rounded-2xl  border-[#6691FF]`}
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
            className="bg-black text-white py-2 px-8 border-none rounded-sm float-right"
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
