import React, { useState, useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loading";
import { Sort } from "../../components/Sort";
import * as SC from "./styles.js";

const PAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
    dispatch(getPosts(currentPage));
  };

  useEffect(() => {
    if (!list) {
      dispatch(getPosts(currentPage));
    }
  }, [list, dispatch, currentPage]);

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
      <Sort />
      <Posts posts={list} />
      <SC.Pages>
        {PAGES.map((page) => (
          <SC.Button
            key={page}
            onClick={() => changeCurrentPage(page)}
            className={currentPage === page ? "active" : "noActive"}
          >
            {page}
          </SC.Button>
        ))}
      </SC.Pages>
    </Container>
  );
};
