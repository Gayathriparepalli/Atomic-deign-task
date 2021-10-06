import React from "react";
const AboutImg = () => {
  const aboutImg = [
    {
      src: "img/about-1.jpg",
      title: "Garden Care",
    },
    {
      src: "img/about-2.jpg",
      title: "Lawn Care",
    },
  ];
  return (
    <div>
      {aboutImg.map((val) => {
        return (
          <div class="col-xs-12 col-md-3">
            <div class="about-media">
              <img src={val["src"]} alt=" " />
            </div>
            <div class="about-desc">
              <h3>{val["title"]}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam sedasd commodo nibh ante
                facilisis.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AboutImg;
