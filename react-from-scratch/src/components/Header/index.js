import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Button } from "../Button";

import styles from "./Header.css"; // gera hash unico - verificar h1 abaixo

export function Header({ title, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h1 className={styles.title}>{title}</h1>
      <Button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Alterar tema
      </Button>
      {children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
