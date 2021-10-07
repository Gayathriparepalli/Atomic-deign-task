import React from "react";
import Header from "../Components/Header";
import AboutImg from "../Components/Image";
const Services = () => {
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
    <div id="services">
      <div class="container">
        <Header
          heading="Our Services"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec."
        />
        <div class="row">
          {data.map((val) => {
            return <AboutImg src={val["src"]} title={val["title"]} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Services;
