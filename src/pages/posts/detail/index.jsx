import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Typo } from "../../../components/ui/Typo";
import { Container } from "../../../components/ui/Container";
import * as SC from "./styles";
import { Link } from "../../../components/ui/Link";
import { BlackButton } from "../../../components/ui/BlackButton";
import { PinkButton } from "../../../components/ui/PinkButton";
import { Modal } from "../../../components/ui/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostById,
  showPost,
  deletePost,
} from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.posts.posts);
  const postForView = useSelector((state) => state.posts.postForView);
  const { user } = useSelector((state) => state.auth);
  const [postForDelete, setPostForDelete] = useState(null);
  const navigate = useNavigate();

  const showEditAndDeleteBtn = list && user;

  const onDeletePost = () => {
    dispatch(deletePost(postForDelete));
    setPostForDelete(null);
    return navigate("/posts");
  };

  useEffect(() => {
    const intId = Number(id);
    const findedPosts = list
      ? list.find((item) => item.id === intId)
      : undefined;
    if (findedPosts) {
      dispatch(showPost(findedPosts));
    } else {
      dispatch(getPostById(intId));
    }
  }, [id, list, dispatch]);

  if (postForView.loading) {
    return <Container>Loading...</Container>;
  }

  if (!postForView.post || !postForView.post.hasOwnProperty("id")) {
    return <>Пост не найден</>;
  }
  const { post } = postForView;

  const image =
    post.image ||
    "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg";

  return (
    <Container>
      {postForDelete && (
        <SC.ModalWrapper>
          <Modal>
            <SC.ModalText>
              Вы точно уверены, что хотите удалить публикацию с ID -{" "}
              {postForDelete.id}?
            </SC.ModalText>
            <SC.ModalContent>
              <PinkButton onClick={onDeletePost}>Да</PinkButton>
              <BlackButton onClick={() => setPostForDelete(null)}>
                Нет
              </BlackButton>
            </SC.ModalContent>
          </Modal>
        </SC.ModalWrapper>
      )}
      <Typo>{post.title}</Typo>
      <SC.Image src={image} alt={post.title} />
      <SC.Text>{post.body}</SC.Text>
      <div style={{ clear: "both" }} />
      <SC.LinkWrapper>
        <Link to="/posts">Обратно к публикациям</Link>
        {showEditAndDeleteBtn && (
          <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>
        )}
        {showEditAndDeleteBtn && (
          <BlackButton onClick={() => setPostForDelete(post)}>
            Удалить
          </BlackButton>
        )}
      </SC.LinkWrapper>
    </Container>
  );
};
