import React from "react";
const ContactInfo = (props) => {
  return (
    <div>
      <div class="col-md-4">
        <h3>{props.title}</h3>
        <hr />
        <div class="contact-item">
          <p>{props.para1}</p>
          <p>{props.para2}</p>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
