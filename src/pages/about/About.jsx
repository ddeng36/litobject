import React from "react";
import "./About";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <div className="sub-title">LitBuild</div>
        <div className="contents">
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            aspernatur nostrum, delectus veritatis consectetur laboriosam optio
            magnam debitis, minus incidunt quia veniam tempora amet facere, iure
            molestias itaque. Animi, aliquid!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati quo quasi, perspiciatis modi qui veritatis,
              exercitationem animi cum, expedita culpa doloribus voluptate eos
              quaerat officiis earum. Officia libero eum odio.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati quo quasi, perspiciatis modi qui veritatis,
              exercitationem animi cum, expedita culpa doloribus voluptate eos
              quaerat officiis earum. Officia libero eum odio.

          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="sub-title">Important Timeline</div>
        <div className="contents">
          <div className="content">
            <div className="content-left">May 06 2023</div>
            <div className="content-right">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati quo quasi, perspiciatis modi qui veritatis,
              exercitationem animi cum, expedita culpa doloribus voluptate eos
              quaerat officiis earum. Officia libero eum odio.
            </div>
          </div>
          <div className="content">
            <div className="content-left">May 05 2023</div>
            <div className="content-right">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati quo quasi, perspiciatis modi qui veritatis,
              exercitationem animi cum, expedita culpa doloribus voluptate eos
              quaerat officiis earum. Officia libero eum odio.
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="about-contact">
          
        <div className="sub-title">Contact</div>
        <div className="contents">
        <div className="content">
            <div className="content-left">Email:</div>
            <div className="content-right">
              dingchaodeng@ust.hk
            </div>
          </div>
          <div className="content">
            <div className="content-left">Phone:</div>
            <div className="content-right">
              dingchaodeng@ust.hk
            </div>
            
          </div>
          <div className="content">
            <div className="content-left">Address:</div>
            <div className="content-right">
              Xili, Nanshan, Shenzhen, Guangdong, China
            </div>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
