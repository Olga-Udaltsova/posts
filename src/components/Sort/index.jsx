import React from "react";
import * as SC from "./styles";

export const Sort = ({ changeSort, params, setParams }) => (
  <SC.Sort>
    <SC.Select
      value={params.order}
      onChange={(e) => changeSort(e.target.value)}
    >
      <option value="asc">Сортировка по возрастанию</option>
      <option value="desc">Сортировка по убыванию</option>
    </SC.Select>

    <SC.Filter>
      <p>Введите текст для поиска:</p>
      <input
        type="search"
        value={params.search}
        onChange={(e) =>
          setParams({ ...params, search: e.target.value.toLowerCase() })
        }
        placeholder="Поиск"
      />
    </SC.Filter>
  </SC.Sort>
);
