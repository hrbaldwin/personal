import React from "react";
import "./landingPage.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  batch,
  Fade,
  FadeIn,
  ZoomIn,
  Move,
  MoveOut,
} from "react-scroll-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const FadeUp = batch(Fade(), Move(), Sticky(25, 45));
  const ZoomInScrollOut = batch(StickyIn(25, 45), FadeIn(), ZoomIn());
  return (
    <ScrollContainer>
      <ScrollPage className="image1">
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
          {" "}
          <div id="openingPage">
            <h2 id="name">rebecca baldwin</h2>
            <p id="title">frontend web developer with fullstack training</p>

            <div className="bio">
              <p>
                hi, i'm becca. i have a love for coding and <br /> creating
                beautiful, efficient web designs.
              </p>
              <p>lets work together.</p>
            </div>
            <p id="arrow">↓</p>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1} className="image2">
        <div id="secondPage">
          <div className="portfolioSection">
            <h3>my portfolio</h3>
            <a
              href="https://capstone-frontend-9o2e.onrender.com/"
              target="_blank"
            >
              <img
                src="https://i.imgur.com/YgZzcVO.png"
                alt="image of GuitarStop"
                className="guitarStop"
              />
            </a>
          </div>
          <div className="middleDiv">
            <div className="connectSection">
              <h3>connect with me</h3>
              <a
                href="https://www.linkedin.com/in/haileyrebeccabaldwin/"
                className="connectLine"
              >
                <img
                  src="https://i.imgur.com/JEkjver.png"
                  className="connectIcon"
                />

                <p>LinkedIn</p>
              </a>
              <a href="https://github.com/hrbaldwin" className="connectLine">
                <img
                  src="https://i.imgur.com/fQQArZr.png"
                  className="connectIcon"
                />
                <p>GitHub</p>
              </a>
              <p className="connectLine">haileyrebeccabaldwin@gmail.com</p>
            </div>
            <div className="aboutSection">
              <img src="https://i.imgur.com/WtY8VHN.png" className="becPic" />
              <h3 className="aboutHeader">about me</h3>
              <p>
                I am a recent graduate from the Colorado State University
                Professional Certification software engineering program
                partnered with Fullstack Academy. This project-based learning
                sparked my passion for creating web applications and sharpened
                my skillset. I enjoy and thrive in the ever-constant learning
                that comes with being a developer. My past in customer service
                has flourished my communication skills in the working
                environment. I am able to learn on my own, but also know when to
                ask for help from the rest of my team. I appreciate
                collaborating with others and sharing my unique perspective.
              </p>
            </div>
          </div>
          <div className="thanks">
            <p>thanks for stopping by.</p>
          </div>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default LandingPage;
