import React from "react";
import NewspaperIcon from "mdi-react/NewspaperIcon"

const Nav = () =>
  <div className="text-center" style={{ backgroundColor: "#20315A", height: "15rem", paddingTop: "2.5rem" }}>
    <h1 style={{ color: "white" }}><NewspaperIcon className="mdi-light" height="64" width="64" /> New York Times Article Scrubber</h1>
  </div>;
export default Nav;
