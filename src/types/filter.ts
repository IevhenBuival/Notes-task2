import { CategoryType } from "./notes";

export type FilterType = "ALL" | "ACTIVE" | "ARCHIVE";

export interface IOptionType {
  title: string;
  value: FilterType | CategoryType;
}
