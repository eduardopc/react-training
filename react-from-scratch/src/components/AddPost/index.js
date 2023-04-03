import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../../context/ThemeContext";

import * as S from "./styles";

export function AddPost({ disabled, handleAddPost }) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    function handleScroll() {
      console.debug("scroll");
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      console.log("unmount and remove scroll event listener");
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <S.Header as="h2">Header h2 - importado do componente Title</S.Header>
      <button
        style={{
          color: theme === "dark" ? "#fff" : "#000",
          backgroundColor: theme === "dark" ? "#000" : "#fff",
          cursor: disabled ? "not-allowed" : "default",
        }}
        disabled={disabled}
        onClick={handleAddPost}
      >
        Adicionar Post
      </button>
    </>
  );
}

AddPost.propTypes = {
  handleAddPost: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
