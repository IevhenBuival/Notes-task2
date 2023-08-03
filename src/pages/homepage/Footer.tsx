import React from "react";
import TableComponent from "../../components/TableComponent";
import { useStoreSelector } from "../../redux/hooks";

interface IFooterPart {
  className: string;
}

function FooterPart({ className }: IFooterPart) {
  const noteState = useStoreSelector((state) => state.notes);

  const colSpan: { [x: string]: string } = {
    id: "",
    category: "col-span-5",
    active: "col-span-4",
    archived: "col-span-3",
  };

  return (
    <TableComponent
      className={className}
      table={noteState.total}
      colSpan={colSpan}
    />
  );
}

export default FooterPart;
