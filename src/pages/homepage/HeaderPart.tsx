import React from "react";
interface IHeaderPart {
  className: string;
}

function HeaderPart({ className }: IHeaderPart) {
  return (
    <header className={className}>
      <div className="my-2">NOTESAPP</div>

      <div className="basis-1/10 flex my-2">
        <label className="mx-2">New item:</label>
        <button
          data-open-modal
          className=" bg-sky-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96c-35.3 0-64 28.7-64 64v16 48V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM80 192H432V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V256c0-13.3-10.7-24-24-24z" />
          </svg>
        </button>
      </div>
      <div className="flex my-2">
        <label className="mx-2">Filter by:</label>
        <div className="select">
          <select className="form-select">
            <option value="active">
              <h2>Active</h2>
            </option>
            <option value="all">
              <h2>All</h2>
            </option>
            <option value="archive">
              <h2>Archive</h2>
            </option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default HeaderPart;
