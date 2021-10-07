import React from "react";
import Header from "../Components/Header";
import ContactInfo from "../Components/ContactInfo";
import ContactLink from "../Components/ContactLink";
import InputField from "../Components/InputField";
const Contact = () => {
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
  const social = [
    {
      id: 1,
      name: "fa fa-facebook",
    },
    {
      id: 2,
      name: "fa fa-twitter",
    },
    {
      id: 3,
      name: "fa fa-google-plus",
    },
  ];
  const form = [
    {
      id: "name",
      placeholder: "Name",
    },
    {
      id: "email",
      placeholder: "Email",
    },
  ];
  return (
    <div id="contact" class="text-center">
      <div class="container">
        <Header
          heading="Contact Us"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec."
        />
        <div class="col-md-10 col-md-offset-1 contact-info">
          {cData.map((val) => {
            return (
              <ContactInfo
                title={val["title"]}
                para1={val["para1"]}
                para2={val["para2"]}
              />
            );
          })}
        </div>
        <div class="col-md-8 col-md-offset-2" style={{ marginBottom: 50 }}>
          <h3>Leave us a message</h3>
          <form name="sentMessage" id="contactForm" novalidate>
            <div class="row">
              {form.map((val) => {
                return <InputField name={val["placeholder"]} id={val["id"]} />;
              })}
            </div>
            <div class="form-group">
              <textarea
                name="message"
                id="message"
                class="form-control"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
              <p class="help-block text-danger"></p>
            </div>
            <div id="success"></div>
            <button type="submit" class="btn btn-custom btn-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div id="footer">
        <div class="container text-center" style={{ marginBottom: 0 }}>
          <div class="col-md-8 col-md-offset-2">
            <div class="social">
              <ul>
                {social.map((val) => {
                  return <ContactLink name={val["name"]} />;
                })}
              </ul>
            </div>
            <p>
              &copy; 2016 Landscaper. Designed by{" "}
              <a href="http://www.templatewire.com" rel="nofollow">
                TemplateWire
              </a>
            </p>
          </div>
        </div>{" "}
        *
      </div>
    </div>
  );
};
export default Contact;
