import React from "react";
const ContactInfo = () => {
  const cData = [
    {
      title: "Address",
      para1: "4321 California St,",
      para2: "San Francisco, CA 12345",
    },
    {
      title: "Working Hours",
      para1: "Monday-Saturday: 07:00 - 18:00",
      para2: "Sunday: CLOSED",
    },
    {
      title: "Contact Info",
      para1: "Phone: +1 123 456 1234",
      para2: "Email: info@company.com",
    },
  ];
  return (
    <div class="col-md-10 col-md-offset-1 contact-info">
      {cData.map((val) => {
        return (
          <div class="col-md-4">
            <h3>{val["title"]}</h3>
            <hr />
            <div class="contact-item">
              <p>{val["para1"]}</p>
              <p>{val["para2"]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ContactInfo;
