import React from "react";
import Header from "../Components/Header";
import GalleryImgTag from "../Components/GalleryImgTag";
const Gallery = () => {
  const imgData = [
    {
      id: 1,
      href: "img/portfolio/01-large.jpg",
      title: "Lorem Ipsum",
      src: "img/portfolio/01-small.jpg",
      type: "col-sm-6 col-md-4 lawn",
    },
    {
      id: 2,
      href: "img/portfolio/02-large.jpg",
      title: "Adipiscing Elit",
      src: "img/portfolio/02-small.jpg",
      type: "col-sm-6 col-md-4 planting",
    },
    {
      id: 3,
      href: "img/portfolio/03-large.jpg",
      title: "Lorem Ipsum",
      src: "img/portfolio/03-small.jpg",
      type: "col-sm-6 col-md-4 garden",
    },
    {
      id: 4,
      href: "img/portfolio/04-large.jpg",
      title: "Lorem Ipsum",
      src: "img/portfolio/04-small.jpg",
      type: "col-sm-6 col-md-4 planting",
    },
    {
      id: 5,
      href: "img/portfolio/05-large.jpg",
      title: "Adipiscing Elit",
      src: "img/portfolio/05-small.jpg",
      type: "col-sm-6 col-md-4 garden",
    },
    {
      id: 6,
      href: "img/portfolio/06-large.jpg",
      title: "Dolor Sit",
      src: "img/portfolio/06-small.jpg",
      type: "col-sm-6 col-md-4 lawn",
    },
  ];
  return (
    <div id="portfolio">
      <div class="container">
        <Header
          heading="Project Gallery"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec."
        />

        <div class="row">
          {imgData.map((val) => {
            return (
              <GalleryImgTag
                type={val["type"]}
                href={val["href"]}
                title={val["title"]}
                src={val["src"]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
