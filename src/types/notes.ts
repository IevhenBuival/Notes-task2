import { v4 as uuidv4 } from "uuid";
import { dateToString } from "../utils/dateToString";
import { datasRegExp } from "../utils/dates.helper";

export type CategoryType = "Idea" | "Task" | "Random Thought";

export interface INote {
  id: string;
  title: string;
  created_at: string;
  category: CategoryType;
  content: string;
  dates: string;
  archived: boolean;
}

export const defaultInote: INote = {
  id: "",
  title: "",
  created_at: dateToString(new Date()),
  category: "Task",
  content: "",
  dates: "",
  archived: false,
};

const newNote = (input: INote): INote => {
  const { title, category, content } = input;

  const dates = datasRegExp(content);
  return {
    id: uuidv4(),
    title: title,
    category: category,
    content: content,
    created_at: dateToString(new Date()),
    dates: dates,
    archived: false,
  };
};

export default newNote;
