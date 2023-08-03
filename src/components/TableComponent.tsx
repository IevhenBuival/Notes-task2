import React from "react";
import { INote } from "../types/notes";
import { ITotal } from "../types/total";

import TableRow from "./TableRow";

interface ITableComponent {
  className?: string;
  table: Array<INote | ITotal>;
  colSpan: { [x: string]: string };
  actions?: boolean;
}
function TableComponent({
  className,
  table,
  colSpan,
  actions,
}: ITableComponent) {
  const rowClass = "grid grid-cols-12 gap-4 border-slate-100";
  const colClass = "bold border radius rounded-2xl text-center shadow-md";

  const FiltredTable = table.map((item) => (
    <TableRow
      key={item.id}
      colSpan={colSpan}
      rowdata={item}
      actions={actions}
      rowClassName={rowClass + " my-2"}
      colClassName={colClass}
    />
  ));

  return (
    <div className={className}>
      {table.length > 0 && (
        <TableRow
          colSpan={colSpan}
          rowdata={table[0]}
          hat={true}
          actions={actions}
          rowClassName={rowClass + " my-2"}
          colClassName={colClass}
        />
      )}

      <div className="flex-1 h-max overflow-y-auto">{FiltredTable}</div>
    </div>
  );
}

export default TableComponent;
