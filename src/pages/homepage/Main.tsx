import React, { useMemo } from "react";

import TableComponent from "../../components/TableComponent";
import { useStoreSelector } from "../../redux/hooks";
import { notes } from "../../redux/store/data/data";
import { INote } from "../../types/notes";

interface IMainPart {
  className: string;
}

function MainPart({ className }: IMainPart) {
  const notesState = useStoreSelector((state) => {
    return state.notes;
  });
  const filterState = useStoreSelector((state) => {
    return state.filter;
  });

  const filtred = () => {
    if (filterState.filter === "ACTIVE")
      return notesState.notes.filter((el) => el.archived === false);
    if (filterState.filter === "ARCHIVE")
      return notesState.notes.filter((el) => el.archived);
    return notesState.notes;
  };

  const colSpan: { [x: string]: string } = {
    id: "",
    title: "col-span-1",
    created_at: "col-span-2",
    category: "col-span-1",
    content: "col-span-4",

    dates: "col-span-2",
    archived: "",
  };

  return (
    <TableComponent
      className={className}
      table={filtred()}
      colSpan={colSpan}
      actions
    />
  );
}

export default MainPart;
