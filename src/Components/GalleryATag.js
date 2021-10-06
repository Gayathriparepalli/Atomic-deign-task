import React from "react";
const GalleryATag = () => {
  const aData = [
    {
      data: "*",
      link: "All",
      class: "active",
    },
    {
      data: ".lawn",
      link: " Lawn Care",
    },
    {
      data: ".garden",
      link: "Garden Care",
    },
    {
      data: ".planting",
      link: "Planting",
    },
  ];
  return (
    <div class="categories">
      <ul class="cat">
        <li>
          <ol class="type">
            {aData.map((val) => {
              return (
                <li>
                  <a href="#" data-filter={val["data"]} class={val["class"]}>
                    {val["link"]}
                  </a>
                </li>
              );
            })}
          </ol>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
  );
};
export default GalleryATag;
