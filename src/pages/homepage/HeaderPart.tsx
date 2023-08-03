import React from "react";
import Filter from "../../components/Filter";
import SvgButton from "../../components/SvgButton";
import { AddIcon } from "../../components/icons";

import { INote, defaultInote } from "../../types/notes";
interface IHeaderPart {
  className: string;
  onShowAddDialog: (note: INote) => void;
}

function HeaderPart({ className, onShowAddDialog }: IHeaderPart) {
  function onClick() {
    onShowAddDialog(defaultInote);
  }
  return (
    <header className={className}>
      <div className="my-auto">NOTESAPP</div>

      <div className="basis-1/10 flex m-2">
        <label className="mx-2 my-auto">New item:</label>
        <SvgButton
          className={
            " bg-sky-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 rounded-full"
          }
          handleClick={() => onClick()}
        >
          <AddIcon />
        </SvgButton>
      </div>
      <Filter />
    </header>
  );
}

export default HeaderPart;
