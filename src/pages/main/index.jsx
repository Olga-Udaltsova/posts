import React, { useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getFreshPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loading/styles";

export const MainPage = () => {
  const { post } = useSelector((state) => state.posts.postForView);
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFreshPosts());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading && <Loader />}
        {list && (
          <>
            <Typo>Свежие публикации</Typo>
            <Posts posts={list} />
          </>
        )}

        {post && (
          <>
            <Typo>Последний просмотренный пост</Typo>
            <Posts posts={[post]} />
          </>
        )}
      </Container>
    </>
  );
};
