import React from "react";
import "./About";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <div className="bio">
        <div className="title">LitBuild</div>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          deleniti quia aliquid ex praesentium explicabo totam soluta unde iure
          facere, dolorem maiores beatae cumque reiciendis doloribus ipsa odio
          dolores fugiat. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptates recusandae deleniti eaque voluptatem. At quam, itaque
          exercitationem quibusdam minus fugit id temporibus, esse ipsa, quo
          voluptas tempora libero impedit voluptatibus!lorem
        </p>
      </div>
      <div className="wrapper">
        <div className="title">TimeLine</div>
        <div className="contents">
          <div className="content">
            <div className="left">May 06 2023</div>
            <div className="right para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              corporis error ex excepturi accusantium ducimus expedita
              laudantium voluptates? Esse totam ipsa nisi iste ab quis, sapiente
              asperiores aut. Beatae, aspernatur!
            </div>
          </div>
          <div className="content">
            <div className="left">May 06 2023</div>
            <div className="right para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              corporis error ex excepturi accusantium ducimus expedita
              laudantium voluptates? Esse totam ipsa nisi iste ab quis, sapiente
              asperiores aut. Beatae, aspernatur!
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default About;
