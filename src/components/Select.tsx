import React from "react";
import { CategoryType } from "../types/notes";
import { FilterType, IOptionType } from "../types/filter";
import { UseFormRegisterReturn } from "react-hook-form";

interface ISelect {
  value: CategoryType | FilterType;
  optionList: IOptionType[];
  className?: string;
  register?: UseFormRegisterReturn<"category">;
  handleChange: (e: {
    target: {
      value: string;
    };
  }) => void;
}
function Select({
  value,
  optionList,
  className,
  handleChange,
  register,
}: ISelect) {
  return (
    <select
      className={"form-select" + className ? " " + className : ""}
      value={String(value)}
      {...register}
      onChange={handleChange}
    >
      {optionList.map((el) => (
        <option key={el.title} value={el.value}>
          {el.title}
        </option>
      ))}
    </select>
  );
}

export default Select;
