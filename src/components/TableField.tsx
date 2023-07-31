import React from "react";
interface ITableField {
  fieldText: string;
  className: string;
}
function TableField({ className, fieldText }: ITableField) {
  return <div className={className}>{fieldText}</div>;
}

export default TableField;
