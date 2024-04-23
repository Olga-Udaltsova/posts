import { Search } from "../Search";
import { Sort } from "../Sort";
import * as SC from "./styles";

export const SortAndSearch = ({ ...props }) => (
  <SC.Sort>
    <Sort {...props} />
    <Search {...props} />
  </SC.Sort>
);
