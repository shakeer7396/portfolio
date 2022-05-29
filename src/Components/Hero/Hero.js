import React from "react";
import Avatar from "@mui/material/Avatar";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Link } from "react-router-dom";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
} from "./HeroElements";
function Hero() {
  return (
    <div className="heroMain">
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Shaik Shakeer</h1>
            <h5>I'm a Full Stack Web Developer</h5>
            <p style={{ fontWeight: "500" }}>I come from Anantapur, Andhra pradesh.</p>
            <p style={{ fontWeight: "500" }}>Phone - 7396089610</p>
            <p style={{ fontWeight: "500" }}>Email - shaikshakeerss123@gmail.com</p>
            <div className="download">
              <Link
                to="/files/ShaikShakeer_Resume.pdf"
                className="btn btn--outline"
                target="_blank"
                download
              >
                Resume
              </Link>
            </div>
            <div className="download">
              <a href={`mailto:shaikshakeerss123@gmail.com`}>
                <span type='button' className='btn btn--outline'>
                  Email me
                </span>
              </a>
            </div>

            <SocialIcon />
          </HeroLeft>
          <HeroRight>
            <Avatar
              alt="Remy Sharp"
              src="/images/avatar.jpg"
              sx={{ width: 300, height: 300 }}
            />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </div>
  );
}

export default Hero;
