import React from "react";
import * as SC from "./styles";

export const Sort = ({ onSort, handleInputChange }) => {
  return (
    <SC.Sort>
      <SC.Select onChange={(event) => onSort(event)}>
        <option value="TITLE_ASC">Сортировка от A до Z</option>
        <option value="TITLE_DESC">Сортировка от Z до A</option>
        <option value="ID_ASC">Сортировка от 1 до 100</option>
        <option value="ID_DESC">Сортировка от 100 до 1</option>
      </SC.Select>

      <SC.Filter>
        <p>Введите заголовок для поиска:</p>
        <input onChange={handleInputChange} />
      </SC.Filter>
    </SC.Sort>
  );
};
