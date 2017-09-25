import React from "react";
import "./SaveBtn.css";
import ContentSaveIcon from "mdi-react/ContentSaveIcon";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
  <span className="save-btn" {...props}>
    <ContentSaveIcon />
  </span>
);

export default SaveBtn;