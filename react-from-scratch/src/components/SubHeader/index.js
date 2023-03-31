import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Button } from "../Button";
import { ThemeContext } from "../../context/ThemeContext";

import styles from "./SubHeader.css";

export function SubHeader({
  buttonTitle,
  headingContent = "Default Header Value",
}) {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ marginBottom: 20 }}>
      <h1 className={styles.title}>{headingContent}</h1>
      <Button onClick={toggleTheme}>{buttonTitle}</Button>
    </div>
  );
}

SubHeader.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  headingContent: PropTypes.string,
};
