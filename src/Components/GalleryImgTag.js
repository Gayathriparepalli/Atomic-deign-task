import React from "react";
const GalleryImgTag = (props) => {
  return (
    <div>
      <div class={props.type}>
        <div class="portfolio-item">
          <div class="hover-bg">
            <a
              href={props.href}
              title="Project Title"
              data-lightbox-gallery="gallery1"
            >
              <div class="hover-text">
                <h4>{props.title}</h4>
              </div>
              <img src={props.src} class="img-responsive" alt="Project Title" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GalleryImgTag;
