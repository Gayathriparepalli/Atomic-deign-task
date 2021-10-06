import React from "react";
import Header from "../Components/Header";
import GalleryImgTag from "../Components/GalleryImgTag";
import GalleryATag from "../Components/GalleryATag";
const Gallery = () => {
  return (
    <div id="portfolio">
      <div class="container">
        <Header
          heading="Project Gallery"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec."
        />
        <GalleryATag />
        <div class="row">
          <GalleryImgTag />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
