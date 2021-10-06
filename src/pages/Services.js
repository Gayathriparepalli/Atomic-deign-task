import React from "react";
import Header from "../Components/Header";
import ServicesImg from "../Components/ServicesImg";
const Services = () => {
  return (
    <div id="services">
      <div class="container">
        <Header
          heading="Our Services"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec."
        />
        <div class="row">
          <ServicesImg />
        </div>
      </div>
    </div>
  );
};
export default Services;
