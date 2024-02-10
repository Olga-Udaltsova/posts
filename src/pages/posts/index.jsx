import React from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Posts/components/Typo";

export const INITIAL_POSTS = [
  {
    id: 1,
    title: "Post 1",
    image:
      "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia quasi soluta tenetur facere magni facilis tempora id? Perferendis in at minus quia porro quaerat veniam numquam molestias animi sit.",
  },
  {
    id: 2,
    title: "Post 2",
    image:
      "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia quasi soluta tenetur facere magni facilis tempora id? Perferendis in at minus quia porro quaerat veniam numquam molestias animi sit.",
  },
  {
    id: 3,
    title: "Post 3",
    image:
      "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia quasi soluta tenetur facere magni facilis tempora id? Perferendis in at minus quia porro quaerat veniam numquam molestias animi sit.",
  },
  {
    id: 4,
    title: "Post 4",
    image:
      "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia quasi soluta tenetur facere magni facilis tempora id? Perferendis in at minus quia porro quaerat veniam numquam molestias animi sit.",
  },
  {
    id: 5,
    title: "Post 5",
    image:
      "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia quasi soluta tenetur facere magni facilis tempora id? Perferendis in at minus quia porro quaerat veniam numquam molestias animi sit.",
  },
];

export const PostsPage = () => (
  <>
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={INITIAL_POSTS} />
    </Container>
  </>
);
