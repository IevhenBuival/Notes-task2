import React from "react";
import { useStoreDispatch, useStoreSelector } from "../redux/hooks";
import { setFilter } from "../redux/feature/filter-slice";
import { FilterType, IOptionType } from "../types/filter";
import Select from "./Select";

function Filter() {
  const filterState = useStoreSelector((state) => state.filter);
  const dispatch = useStoreDispatch();
  const handleChange = (e: { target: { value: string } }) => {
    const newValue = e.target.value as FilterType;
    if (filterState.filter !== newValue) dispatch(setFilter(newValue));
  };

  const optionList: IOptionType[] = [
    { title: "All", value: "ALL" },
    { title: "Active", value: "ACTIVE" },
    { title: "Archived", value: "ARCHIVE" },
  ];

  return (
    <div className="flex my-2 select justify-items-center">
      <label className="mx-3 my-auto">Filter by:</label>
      <Select
        optionList={optionList}
        value={filterState.filter}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Filter;
