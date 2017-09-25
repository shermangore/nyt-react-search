import React from "react";
import "./ShowSavedBtn.css";
import { Link } from "react-router-dom";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
  <span className="show-saved-btn" {...props}>
    <Link to={"/saved/"}>View Saved Articles</Link>
  </span>
);

export default SaveBtn;