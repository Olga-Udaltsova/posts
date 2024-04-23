import React from "react";
import * as SC from "./styles";

export const Sort = ({ changeSort, params }) => (
  <SC.Select value={params.order} onChange={(e) => changeSort(e.target.value)}>
    <option value="asc">Сортировка по возрастанию</option>
    <option value="desc">Сортировка по убыванию</option>
  </SC.Select>
);
