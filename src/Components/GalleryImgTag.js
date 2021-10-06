import React from "react";
const GalleryATag = () => {
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
    <div>
      <div class="portfolio-items">
        {imgData.map((val) => {
          return (
            <div class={val["type"]}>
              <div class="portfolio-item">
                <div class="hover-bg">
                  <a
                    href={val["href"]}
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div class="hover-text">
                      <h4>{val["title"]}</h4>
                    </div>
                    <img
                      src={val["src"]}
                      class="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default GalleryATag;
