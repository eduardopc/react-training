import React from "react";
import PropTypes from "prop-types";

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        color: "#000",
        backgroundColor: "#fff",
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
