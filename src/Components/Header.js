import React from "react";
import NavBar from "../pages/NavBar";
const Heading = (props) => {
  return (
    <div class="section-title text-center center">
      <NavBar />
      <h2> {props.heading}</h2>
      <hr />
      <p>{props.paragraph}</p>
    </div>
  );
};
export default Heading;
