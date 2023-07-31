import { CategoryType } from "./notes";

export interface ITotal {
  id: string;
  category: CategoryType;
  active: number;
  archived: number;
}
