import React from "react";
import Avatar from "@mui/material/Avatar";
import { Image, ContactWrapper } from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">
          <div
            style={{
              fontSize: "40px",
              fontFamily: "'Trebuchet MS', sans-serif",
            }}
          >
            About Me
          </div>
          <hr
            style={{
              marginLeft: "5px",
              width: "177px",
              background: "#d24d57",
            }}
          />
        </div>
        <div className="BigCard">
          <Image>
            <Avatar
              alt="Remy Sharp"
              src="/images/avatar.jpg"
              sx={{ width: 150, height: 150 }}
            />
          </Image>
          <div className="AboutBio">
            <div
              style={{
                fontSize: "28px",
                fontFamily: "'Trebuchet MS', sans-serif",
              }}
            >
              Hello! I am Shaik Shakeer
            </div>
            who enjoys coding and solving problems.As an aspiring Full Stack Web
            developer, I like the impact it creates on the world. <br></br>One
            of my strongest skills is creativity and it helps me a lot in web
            designs I have created various end to end website clone using{" "}
            <strong>MERN stack</strong>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
