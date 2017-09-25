import React from "react";
import "./DeleteBtn.css";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
    <DeleteForeverIcon />
  </span>
);

export default DeleteBtn;
