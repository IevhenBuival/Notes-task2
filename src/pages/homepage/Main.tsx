import React from "react";

import TableComponent from "../../components/TableComponent";
import { defaultInote } from "../../types/notes";
import { useStoreSelector } from "../../redux/hooks";

interface IMainPart {
  className: string;
}

function MainPart({ className }: IMainPart) {
  const notesState = useStoreSelector((state) => state.notes);

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
      table={notesState.notes}
      colSpan={colSpan}
      actions
    />
  );
}

export default MainPart;
