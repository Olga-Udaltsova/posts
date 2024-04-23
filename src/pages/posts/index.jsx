import React, { useState, useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByParameters, getPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loading";
import { Pages } from "../../components/Pagination";
import { useDebounce } from "../../hooks/useDebounce";
import { SortAndSearch } from "../../components/Posts/components/SortAndSearch";

export const PostsPage = () => {
  const [params, setParams] = useState({
    page: 1,
    order: "asc",
    search: "",
  });
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const debounce = useDebounce(params.search, 500);
  const changeCurrentPage = (page) => {
    dispatch(getPostsByParameters({ ...params, page }));
    setParams({ ...params, page });
  };

  const changeSort = (value) => {
    dispatch(getPostsByParameters({ ...params, order: value }));
    setParams({ ...params, order: value });
  };

  const onSearch = () => {
    dispatch(getPostsByParameters(params));
    setParams({ ...params, search: debounce });
  };

  useEffect(() => {
    if (!list) {
      dispatch(getPosts());
      dispatch(getPostsByParameters(params));
    }
  }, []);

  if (!list && loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container>
      <Typo>Публикации</Typo>
      <SortAndSearch
        params={params}
        setParams={setParams}
        changeSort={changeSort}
        onSearch={onSearch}
      />
      <Posts posts={list} />
      <Pages changeCurrentPage={changeCurrentPage} currentPage={params.page} />
    </Container>
  );
};
