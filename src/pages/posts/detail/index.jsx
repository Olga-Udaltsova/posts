import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { Typo } from "../../../components/Posts/components/Typo";
import { Container } from "../../../components/Container";
import * as SC from "./styles";
import { Link } from "../../../components/Link";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
  const { id } = useParams();
  const postForView = useSelector((state) => state.posts.postForView);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(Number(id)));
  }, [id]);

  if (!postForView) {
    return <>Пост не найден</>;
  }
  return (
    <Container>
      <Typo>{postForView.title}</Typo>
      <SC.Image src={postForView.image} alt={postForView.title} />
      <SC.Text>{postForView.text}</SC.Text>
      <div style={{ clear: "both" }} />
      <SC.LinkWrapper>
        <Link to="/posts">Обратно к публикациям</Link>
      </SC.LinkWrapper>
    </Container>
  );
};
