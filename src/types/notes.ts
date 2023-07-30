export type CategoryType = "Idea" | "Task" | "Random Thought";

export interface INote {
  id: string;
  title: string;
  content: string;
  created_at: Date;
  category: CategoryType;
  dates: string;
  archived: boolean;
}

export const defaultInote: INote = {
  id: "",
  title: "",
  content: "",
  created_at: new Date(),
  category: "Task",
  dates: "",
  archived: false,
};
