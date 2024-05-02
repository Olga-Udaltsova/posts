import React, { useState, useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getPostsByParameters } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loading";
import { Pages } from "../../components/Pagination";
import { Search } from "../../components/Posts/components/Search";
import { Sort } from "../../components/Posts/components/Sort";
import useDebounce from "../../hooks/useDebounce";
import * as SC from "./styles";

export const PostsPage = () => {
  const [params, setParams] = useState({
    page: 1,
    order: "asc",
    search: "",
  });
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const { debouncedValue } = useDebounce(params.search, 500);

  const changeCurrentPage = (page) => {
    dispatch(getPostsByParameters({ ...params, page }));
    setParams({ ...params, page });
  };

  const changeSort = (value) => {
    dispatch(getPostsByParameters({ ...params, order: value }));
    setParams({ ...params, order: value });
  };

  useEffect(() => {
    if (debouncedValue.length >= 0) {
      dispatch(getPosts({ ...params, page: 1, search: debouncedValue }));
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (!list) {
      dispatch(getPosts(params));
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
      <SC.Filters>
        <Sort changeSort={changeSort} params={params} />
        <Search params={params} setParams={setParams} />
      </SC.Filters>
      <Posts posts={list} />
      <Pages changeCurrentPage={changeCurrentPage} currentPage={params.page} />
    </Container>
  );
};
