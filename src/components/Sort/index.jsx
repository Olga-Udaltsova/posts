import React from "react";
import * as SC from "./styles";

export const Sort = ({ changeSort, changeTextSearch }) => {
  return (
    <SC.Sort>
      <SC.Select onChange={(event) => changeSort(event.target.value)}>
        <option value="asc">Сортировка по возрастанию</option>
        <option value="desc">Сортировка по убыванию</option>
      </SC.Select>

      <SC.Filter>
        <p>Введите заголовок для поиска:</p>
        <input
          type="text"
          onChange={(event) => changeTextSearch(event.target.value)}
        />
      </SC.Filter>
    </SC.Sort>
  );
};
