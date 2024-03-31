import React from "react";
import * as SC from "./styles";
import { getPosts } from "../../redux/slices/postsSlice";
import { useDispatch } from "react-redux";

export const Sort = ({ order, changeSort, search, onSearch, params }) => {
  const dispatch = useDispatch();
  return (
    <SC.Sort>
      <SC.Select value={order} onChange={(e) => changeSort(e.target.value)}>
        <option value="asc">Сортировка по возрастанию</option>
        <option value="desc">Сортировка по убыванию</option>
      </SC.Select>

      <SC.Filter>
        <p>Введите текст для поиска:</p>
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value.toLowerCase())}
          placeholder="Поиск"
        />
        <button onClick={() => dispatch(getPosts(params))}>Поиск</button>
      </SC.Filter>
    </SC.Sort>
  );
};
