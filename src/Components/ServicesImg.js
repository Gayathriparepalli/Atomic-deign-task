import React from "react";
const ServicesImg = (props) => {
  const data = [
    {
      id: 1,
      src: "img/services/service-1.jpg",
      title: "Lawn Care",
    },
    {
      id: 2,
      src: "img/services/service-2.jpg",
      title: "Landscape Design",
    },
    {
      id: 3,
      src: "img/services/service-3.jpg",
      title: "Tree Care",
    },
    {
      id: 4,
      src: "img/services/service-4.jpg",
      title: "Spring & Fall Cleanup",
    },
  ];
  return (
    <div>
      {data.map((val) => {
        return (
          <div class="col-md-3 text-center" key={val["id"]}>
            <div class="service-media">
              <img src={val["src"]} alt=" " />
            </div>
            <div class="service-desc">
              <h3>{val["title"]}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam sedasd commodo nibh ante
                facilisis bibendum dolor feugiat at.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ServicesImg;
