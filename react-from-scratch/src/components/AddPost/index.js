import React, { useEffect } from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

export function AddPost({ handleAddPost }) {
  return (
    <>
      <S.Header as="h2">Header h2 - importado do componente Title</S.Header>
      <button onClick={handleAddPost}>Adicionar Post</button>
    </>
  );
}

AddPost.propTypes = {
  handleAddPost: PropTypes.func.isRequired,
};
