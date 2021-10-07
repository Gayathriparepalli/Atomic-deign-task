import React from "react";
const ContactLink = ({ name }) => {
  return (
    <li>
      <a href="#">
        <i class={name}></i>
      </a>
    </li>
  );
};
export default ContactLink;
