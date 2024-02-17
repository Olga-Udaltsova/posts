import React from "react";
import * as SC from "./styles";
import { Link } from "../../../Link";

export const Post = ({ post }) => {
  const image =
    post.image ||
    "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg";

  return (
    <SC.Post>
      <SC.Image src={image} alt={post.title} />
      <SC.Title>{post.title}</SC.Title>
      <Link to={`/posts/${post.id}`}>Читать далее...</Link>
    </SC.Post>
  );
};
