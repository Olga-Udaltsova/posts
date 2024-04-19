import React, { useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { useDispatch, useSelector } from "react-redux";
import { getFreshPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loading";

export const MainPage = () => {
  const { postForView } = useSelector((state) => state.posts.postForView);
  const { freshPost, loading } = useSelector((state) => state.posts.freshPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!freshPost) {
      dispatch(getFreshPosts());
    }
  }, [freshPost, dispatch]);

  return (
    <Container>
      {loading && <Loader />}
      {freshPost && <Posts posts={freshPost} title="Свежие публикации" />}

      {postForView && (
        <Posts posts={[postForView]} title="Последний просмотренный пост" />
      )}
    </Container>
  );
};
