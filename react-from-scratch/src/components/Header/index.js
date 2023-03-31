import React, { useContext } from "react";
import PropTypes from "prop-types";

import { SubHeader } from "../SubHeader";

export function Header({ buttonTitle, headingContent, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <SubHeader buttonTitle={buttonTitle} headingContent={headingContent} />
      {children}
    </div>
  );
}

Header.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  headingContent: PropTypes.string,
  children: PropTypes.node,
};
