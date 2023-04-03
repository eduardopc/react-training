import React from "react";
import PropTypes from "prop-types";

import { Button } from "../Button";

import * as S from "./styles";

function Posts({ post, onRemove }) {
  return (
    <div style={{ maxWidth: "250px" }}>
      <article style={{ backgroundColor: "#25D1BF" }}>
        <p>{`#ID: ${post.id}`}</p>
        <strong style={{ marginRight: 5 }}>{post.title}</strong>
        <Button onClick={() => onRemove(post.id)}>Remover</Button>
        <br />
        <S.description>{post.description}</S.description>
        <S.likes>Likes: {post.likes}</S.likes>
      </article>
      <br />
    </div>
  );
}

Posts.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  onRemove: PropTypes.func.isRequired,
};

export default Posts;
