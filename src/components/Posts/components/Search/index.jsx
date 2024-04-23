import * as SC from "./styles";

export const Search = ({ params, setParams, onSearch }) => (
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
    <button onClick={onSearch}>Поиск</button>
  </SC.Filter>
);
