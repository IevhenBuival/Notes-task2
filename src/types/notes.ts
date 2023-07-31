export type CategoryType = "Idea" | "Task" | "Random Thought";

export interface INote {
  id: string;
  title: string;
  created_at: Date;
  category: CategoryType;
  content: string;
  dates: string;
  archived: boolean;
}

export const defaultInote: INote = {
  id: "",
  title: "",
  created_at: new Date(),
  category: "Task",
  content: "",
  dates: "",
  archived: false,
};
