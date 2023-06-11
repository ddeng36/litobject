import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import "./Contact.scss"
const Contact = () => {
  return (
    <div className="contact">
      <div className="title">Contact</div>
      <div className="list">
        <EmailIcon />
        <div className="info">Email: dingchaodeng@ust.hk</div>
      </div>
      <div className="list">
        <PhoneAndroidIcon />
        <div className="info">Tel: +86 15798487845</div>
      </div>
      <div className="list">
        <HomeIcon />
        <div className="info">Add: Nanshan, Shenzhen, Guangdong, China</div>
      </div>
    </div>
  );
};

export default Contact;
