import React from "react";
const AboutImg = (props) => {
  return (
    <div>
      <div class="col-xs-12 col-md-3">
        <div class="about-media">
          <img src={props.src} alt=" " />
        </div>
        <div class="about-desc">
          <h3>{props.title}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            dapibus leo nec ornare diam sedasd commodo nibh ante facilisis.
          </p>
        </div>
      </div>
      );
    </div>
  );
};
export default AboutImg;
