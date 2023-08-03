import React, { ReactNode } from "react";
import { INote } from "../types/notes";
import { ITotal } from "../types/total";
import TableField from "./TableField";
import TableActions from "./TableActions";
import { dateToString } from "../utils/dateToString";

interface ITableRow {
  rowdata: INote | ITotal;
  actions?: boolean;
  hat?: boolean;
  colSpan: { [x: string]: string };
  rowClassName?: string;
  colClassName?: string;
}

function TableRow({
  rowdata,
  colSpan,
  actions,
  hat,
  rowClassName,
  colClassName,
}: ITableRow) {
  const createBaseFields = (
    fieldSettings: { [x: string]: string },
    rowdata: INote | ITotal,
    hat: boolean = false
  ) => {
    const rows: ReactNode[] = [];
    Object.keys(fieldSettings).forEach((key) => {
      if (fieldSettings[key] !== "") {
        rows.push(
          <TableField
            key={hat ? "hat" + key : "" + rowdata.id + key}
            fieldText={
              hat ? key : dateToString(rowdata[key as keyof typeof rowdata])
            }
            className={
              colClassName +
              " truncate px-2 " +
              (hat === false ? "bg-white " : "") +
              fieldSettings[key]
            }
          />
        );
      }
    });
    return rows.map((el) => el);
  };
  return (
    <div
      className={
        rowClassName +
        (!hat && actions && rowdata.archived ? " opacity-50 line-through" : "")
      }
    >
      {createBaseFields(colSpan, rowdata, hat)}
      {actions &&
        (hat ? (
          <TableField
            key={"hatActions"}
            fieldText={"Actions"}
            className={colClassName + " col-span-2 " + (hat ? "" : "bg-white ")}
          />
        ) : (
          <TableActions
            key={rowdata.id + "Actions"}
            actionHolder={rowdata as INote}
            className={"col-span-2 flex"}
          />
        ))}
    </div>
  );
}

export default TableRow;
