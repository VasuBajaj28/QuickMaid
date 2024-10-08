import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

function ContactUs() {
  return (
    <>
      <div className="contactUs">
        <h3 style={{ fontWeight: "bolder" }}>Contact Us</h3>
        <p style={{ marginTop: "18px" }}>
          <ImLocation2 />
          &nbsp;&nbsp; Room No. 512, 5th Floor, IIT Delhi Techno Park,
          Sector-130, Sonepat, Haryana - 247778
        </p>
        <p>
          <MdEmail />
          &nbsp;&nbsp; vasu.503bajaj@gmail.com
        </p>
        <p>
          <AiFillPhone />
          &nbsp;&nbsp; 9996755212
        </p>
      </div>
    </>
  );
}
export default ContactUs;
