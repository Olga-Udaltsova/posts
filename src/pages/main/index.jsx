import React from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Posts/components/Typo";

const INITIAL_POSTS = [
  {
    id: 1,
    title: "Post 1",
    image:
      "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image:
      "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image:
      "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
  },
];

export const MainPage = () => (
  <>
    <Container>
      <Typo>Свежие публикации</Typo>
      <Posts posts={INITIAL_POSTS} />
    </Container>
  </>
);
