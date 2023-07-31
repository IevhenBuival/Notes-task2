import React, { useEffect } from "react";
import TableComponent from "../../components/TableComponent";
import { useStoreDispatch, useStoreSelector } from "../../redux/hooks";
import { recalcTotal } from "../../redux/feature/total-slice";

interface IFooterPart {
  className: string;
}

function FooterPart({ className }: IFooterPart) {
  const totalState = useStoreSelector((state) => state.total);
  const noteState = useStoreSelector((state) => state.notes);

  const dispatch = useStoreDispatch();
  const colSpan: { [x: string]: string } = {
    id: "",
    category: "col-span-5",
    active: "col-span-4",
    archived: "col-span-3",
  };

  useEffect(() => {
    dispatch(recalcTotal(noteState.notes));
  }, []);
  return (
    <TableComponent
      className={className}
      table={totalState.total}
      colSpan={colSpan}
    />
  );
}

export default FooterPart;
