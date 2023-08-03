import { CategoryType } from "./notes";

export interface ITotal {
  id: string;
  category: CategoryType;
  active: number;
  archived: number;
}

export interface INoteTotal {
  category: CategoryType;
  archived: boolean;
}
