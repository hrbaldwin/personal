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
          <div>
            <h3>connect with me</h3>
            <p>LinkedIn</p>
            <p>GitHub</p>
          </div>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default LandingPage;
