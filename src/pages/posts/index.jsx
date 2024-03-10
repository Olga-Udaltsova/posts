import React, { useState, useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredPosts,
  getPosts,
  getSortedPosts,
} from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loading";
import { Sort } from "../../components/Sort";
import { Pages } from "../../components/Pagination";

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState("asc");
  const [textSearch, setTextSearch] = useState("");

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
    dispatch(getPosts(currentPage));
  };

  const changeSort = (value) => {
    setOrder(value);
    dispatch(getSortedPosts(order));
  };

  const changeTextSearch = (text) => {
    setTextSearch(text);
    dispatch(getFilteredPosts(textSearch));
  };

  useEffect(() => {
    if (!list) {
      dispatch(getPosts(currentPage));
      dispatch(getSortedPosts(order));
      dispatch(getFilteredPosts(textSearch));
    }
  }, [list, dispatch, currentPage, order, textSearch]);

  if (!list && loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (!list) {
    return <>404</>;
  }

  return (
    <Container>
      <Typo>Публикации</Typo>
      <Sort changeSort={changeSort} changeTextSearch={changeTextSearch} />
      <Posts posts={list} />
      <Pages changeCurrentPage={changeCurrentPage} currentPage={currentPage} />
    </Container>
  );
};
