import React, { useState, useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loading";
import { Sort } from "../../components/Sort";
import { Pages } from "../../components/Pagination";
import * as SC from "./styles";

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const [params, setParams] = useState({
    page: 1,
    order: "asc",
    search: "",
  });

  const changeCurrentPage = (page) => {
    setParams({ page });
    dispatch(getPosts(params));
  };

  const changeSort = (value) => {
    setParams({ order: value });
    dispatch(getPosts(params));
  };

  const onSearch = (value) => {
    setParams({ search: value });
  };

  useEffect(() => {
    if (!list) {
      dispatch(getPosts(params));
    }
  }, [list, dispatch, params]);

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
      <Sort
        order={params.order}
        changeSort={changeSort}
        search={params.search}
        onSearch={onSearch}
        params={params}
      />
      <Posts posts={list} />
      {list?.length < 10 ? (
        <SC.Button>1</SC.Button>
      ) : (
        <Pages
          changeCurrentPage={changeCurrentPage}
          currentPage={params.page}
        />
      )}
    </Container>
  );
};
