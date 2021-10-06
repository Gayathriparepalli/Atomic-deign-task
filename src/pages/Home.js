import React from "react";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="row">
      <div className="medium-12 columns">
        <NavBar />
        {/* <!-- Header --> */}
        <header id="header">
          <div class="intro">
            <div class="overlay">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2 intro-text">
                    <h1>Landscaping Services</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <br />
                      Duis sed dapibus leo nec ornare diam.
                    </p>
                    <a href="/about" class="btn btn-custom btn-lg page-scroll">
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Home;
