import { createContext } from "react";
import { INote } from "../types/notes";

export const dialogContext = createContext<{
  onShowDialog: (note: INote) => void;
} | null>(null);
