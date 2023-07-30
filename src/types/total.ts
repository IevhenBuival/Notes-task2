import { CategoryType } from "./notes";

export interface ITotal {
  category: CategoryType;
  active: number;
  archived: number;
}
