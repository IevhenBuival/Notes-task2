import React, { useEffect, useRef, useState } from "react";
import newNote, { CategoryType, INote } from "../types/notes";
import InputArea from "./InputArea";
import Select from "./Select";
import { IOptionType } from "../types/filter";
import { useForm } from "react-hook-form";
import { useStoreDispatch } from "../redux/hooks";
import {
  addNote,
  editNote,
  recalcTotalNote,
} from "../redux/feature/notes-slice";
import { datasRegExp } from "../utils/dates.helper";

interface IDialog {
  data: INote;
  hideDialog: () => void;
}

function Dialog({ data, hideDialog }: IDialog) {
  const dispatch = useStoreDispatch();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedValue, setSelectedValue] = useState<CategoryType>(
    data.category
  );

  const { register, handleSubmit } = useForm<INote>({
    defaultValues: {
      title: data.title,
      content: data.content,
    },
  });

  function dialogClose() {
    if (dialogRef.current) dialogRef.current.close();
    hideDialog();
  }
  useEffect(() => {
    if (!dialogRef.current) return;
    const dialog = dialogRef.current;
    dialog.showModal();
    dialog.addEventListener("click", (e) => {
      const dialogBounding = dialog.getBoundingClientRect();
      if (
        dialogBounding.left !== 0 &&
        dialogBounding.right !== 0 &&
        dialogBounding.top !== 0 &&
        dialogBounding.bottom !== 0 &&
        (e.clientX < dialogBounding.left ||
          e.clientX > dialogBounding.right ||
          e.clientY < dialogBounding.top ||
          e.clientY > dialogBounding.bottom)
      ) {
        dialogClose();
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(inputData: INote) {
    try {
      const dates = datasRegExp(inputData.content);
      const newData: INote = {
        ...data,
        title: inputData.title,
        content: inputData.content,
        category: selectedValue,
        dates: dates,
      };
      if (data.id === "") {
        dispatch(addNote(newNote(newData)));
      } else {
        dispatch(editNote(newData));
      }
      dispatch(recalcTotalNote());
      dialogClose();
    } catch (e) {
      console.log("Error" + JSON.stringify(e));
    }
  }

  const optionList: IOptionType[] = [
    { title: "Task", value: "Task" },
    { title: "Idea", value: "Idea" },
    { title: "Random Thought", value: "Random Thought" },
  ];

  const handleChange = (e: { target: { value: string } }) => {
    const newValue = e.target.value as CategoryType;
    setSelectedValue(newValue);
  };

  return (
    <dialog
      ref={dialogRef}
      data-modal
      className="flex flex-col justify-center mx-auto border text-blue-800 border-sky-400 rounded p-5 shadow-md"
    >
      <div className="w-full">
        <div className="text-center">
          <h3> {data.title ? "Edit note" : "Add new note"}</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputArea title="Title: ">
          <input
            type="text"
            {...register("title")}
            required
            placeholder="Enter note name"
            className="border rounded border-sky-400 py-2 px-4 w-full mb-2 shadow-md focus:outline-none focus:ring focus:ring-violet-300"
          />
        </InputArea>
        <InputArea title="Category: ">
          <Select
            className="form-select w-full py-2 border rounded border-sky-400 mb-2 shadow-md focus:outline-none focus:ring focus:ring-violet-300"
            optionList={optionList}
            value={selectedValue}
            handleChange={handleChange}
          />
        </InputArea>
        <InputArea title="Note: ">
          <textarea
            className="w-full px-3 py-1 border rounded border-sky-400 mb-2 shadow-md focus:outline-none focus:ring focus:ring-violet-300"
            placeholder="Write your note here"
            {...register("content")}
          />
        </InputArea>
        {data.title && (
          <div className="flex flex-col">
            <label className="col-auto">
              {data.archived ? "This note is archived" : "This note is active"}
            </label>
            <label className="col-auto">
              {"created at: " + data.created_at}
            </label>
          </div>
        )}
        <div className="flex gap-2 mt-4">
          <button
            type="submit"
            className="rounded-full bg-sky-400 border border-sky-400 text-white basis-1/2"
          >
            Save
          </button>
          <button
            type="button"
            className="rounded-full border border-sky-400 text-sky-400 basis-1/2 "
            onClick={() => {
              dialogClose();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default Dialog;
