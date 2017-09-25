import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 150, paddingTop: 5, marginTop: 5 }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
