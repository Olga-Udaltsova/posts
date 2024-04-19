import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Typo } from "../../../components/ui/Typo";
import { Container } from "../../../components/ui/Container";
import * as SC from "./styles";
import { Link } from "../../../components/ui/Link";
import { Button } from "../../../components/ui/Button";
import { Modal } from "../../../components/ui/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostById,
  showPost,
  deletePost,
} from "../../../redux/slices/postsSlice";
import { Loader } from "../../../components/ui/Loading";

export const DetailPostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.posts.posts);
  const post = useSelector((state) => state.posts.postForView);
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

  if (post.loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (!post.postForView || !post.postForView.hasOwnProperty("id")) {
    return <>Пост не найден</>;
  }
  const { postForView } = post;

  const image =
    postForView.image ||
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
              <Button onClick={onDeletePost}>Да</Button>
              <Button $black onClick={() => setPostForDelete(null)}>
                Нет
              </Button>
            </SC.ModalContent>
          </Modal>
        </SC.ModalWrapper>
      )}
      <Typo>{postForView.title}</Typo>
      <SC.Image src={image} alt={postForView.title} />
      <SC.Text>{postForView.body}</SC.Text>
      <div style={{ clear: "both" }} />
      <SC.LinkWrapper>
        <Link to="/posts">Обратно к публикациям</Link>
        {showEditAndDeleteBtn && (
          <Link to={`/posts/${postForView.id}/edit`}>Редактировать</Link>
        )}
        {showEditAndDeleteBtn && (
          <Button $black onClick={() => setPostForDelete(postForView)}>
            Удалить
          </Button>
        )}
      </SC.LinkWrapper>
    </Container>
  );
};
