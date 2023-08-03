import React, { useContext } from "react";
import { INote, defaultInote } from "../types/notes";

import SvgButton from "./SvgButton";
import { ArchiveIcon, EditIcon, RemoveIcon } from "./icons";
import { useStoreDispatch } from "../redux/hooks";
import {
  changeArchived,
  recalcTotalNote,
  removeNote,
} from "../redux/feature/notes-slice";
import { dialogContext } from "../utils/dialog.context";

interface ITableAction {
  className: string;
  actionHolder: INote;
}

function TableActions({ className, actionHolder }: ITableAction) {
  const myContext = useContext(dialogContext);

  const dispatch = useStoreDispatch();

  function onEdit() {
    if (myContext) myContext.onShowDialog(actionHolder);
  }

  function onRemove() {
    dispatch(removeNote(actionHolder));

    dispatch(recalcTotalNote());
  }
  function onArchive() {
    dispatch(changeArchived(actionHolder));
    dispatch(recalcTotalNote());
  }

  const classname =
    "basis-1/3  bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 text-center";
  return (
    <div className={className}>
      <SvgButton
        className={classname + " rounded-l"}
        handleClick={() => onEdit()}
      >
        <EditIcon />
      </SvgButton>
      <SvgButton className={classname} handleClick={onArchive}>
        <ArchiveIcon />
      </SvgButton>
      <SvgButton className={classname + " rounded-r"} handleClick={onRemove}>
        <RemoveIcon />
      </SvgButton>
    </div>
  );
}

export default TableActions;
