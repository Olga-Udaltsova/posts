import React from "react";
import { Post } from "./components/Post";
import { Typo } from "../ui/Typo";
import * as SC from "./styles";

export const Posts = ({ posts, title }) => (
  <>
    <Typo>{title}</Typo>
    {posts?.length !== 0 ? (
      <SC.Posts>
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </SC.Posts>
    ) : (
      <SC.NoPosts>Посты не найдены</SC.NoPosts>
    )}
  </>
);
