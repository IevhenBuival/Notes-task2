import React, { ReactNode } from "react";
import { INote } from "../types/notes";
import { ITotal } from "../types/total";
import TableField from "./TableField";

interface ITableRow {
  rowdata: INote | ITotal;
  actions?: true;
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
            fieldText={hat ? key : "" + rowdata[key as keyof typeof rowdata]}
            className={
              colClassName +
              " " +
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
    <div className={rowClassName}>
      {createBaseFields(colSpan, rowdata, hat)}
      {actions && (
        <TableField
          key={hat ? "hatActions" : rowdata.id + "Action"}
          fieldText="Actions"
          className={colClassName + " col-span-2"}
        />
      )}
    </div>
  );
}

export default TableRow;
