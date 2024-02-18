import React, { useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  sortPostsByIdASC,
  sortPostsByIdDESC,
  sortPostsByTitleASC,
  sortPostsByTitleDESC,
  filterPosts,
} from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loading";
import { Sort } from "../../components/Sort";

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) {
      dispatch(getPosts());
    }
  }, [list, dispatch]);

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

  const onSort = (event) => {
    switch (event.target.value) {
      case "TITLE_ASC":
        dispatch(sortPostsByTitleASC());
        break;
      case "TITLE_DESC":
        dispatch(sortPostsByTitleDESC());
        break;
      case "ID_ASC":
        dispatch(sortPostsByIdASC());
        break;
      case "ID_DESC":
        dispatch(sortPostsByIdDESC());
        break;
    }
  };

  const handleInputChange = (e) => {
    dispatch(filterPosts(e.target.value));
  };

  return (
    <Container>
      <Typo>Публикации</Typo>
      <Sort onSort={onSort} handleInputChange={handleInputChange} />
      <Posts posts={list} />
    </Container>
  );
};
