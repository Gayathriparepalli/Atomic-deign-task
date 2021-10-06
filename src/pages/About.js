import React from "react";
import NavBar from "./NavBar";
import AboutImg from "../Components/AboutImg";
const About = () => {
  return (
    <div id="about">
      <div class="container">
        <NavBar />
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <div class="about-text">
              <h2>
                Welcome to <span>Landscaper</span>
              </h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis
                bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam
                commodo nibh.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis
                bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam
                commodo nibh.
              </p>
              <a href="/services" class="btn btn-custom btn-lg page-scroll">
                View All Services
              </a>
            </div>
          </div>
          <AboutImg />
        </div>
      </div>
    </div>
  );
};
export default About;
