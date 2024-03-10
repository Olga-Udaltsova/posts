import React, { useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getFreshPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loading";

export const MainPage = () => {
  const { post } = useSelector((state) => state.posts.postForView);
  const { posts, loading } = useSelector((state) => state.posts.freshPosts);
  const { list } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) {
      dispatch(getFreshPosts());
    }
  }, [list, dispatch]);

  return (
    <>
      <Container>
        {loading && <Loader />}
        {(list || posts) && (
          <>
            <Typo>Свежие публикации</Typo>
            <Posts posts={list || posts} />
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
