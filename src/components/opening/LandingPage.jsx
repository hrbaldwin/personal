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

const LandingPage = () => {
  const FadeUp = batch(Fade(), Move(), Sticky(25, 45));
  const ZoomInScrollOut = batch(StickyIn(25, 45), FadeIn(), ZoomIn());
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
          {" "}
          <div id="opening">
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
      <ScrollPage page={1}>
        <div className="secondDiv">
          <h2>second page</h2>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default LandingPage;
