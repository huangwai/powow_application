import React from "react";
// JSX
import HeroSlider, {
  Slide,
  ButtonsNav,
  Nav,
  OverlayContainer
} from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";

// Images
const hallstatt = "https://i.imgur.com/Yszno5e.jpg";
const hvitserkur = "https://i.imgur.com/ZBzbir7.jpg";
const jacksonville = "https://i.imgur.com/xpeJkkR.jpg";
const moraineLake = "https://i.imgur.com/0NAc45h.jpg";

const Hero = () => {
  return (
    <HeroSlider
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "#000"
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh"
      }}
    >
      <OverlayContainer>
        <Wrapper>
          <Title>Zoom Slider</Title>
          <Subtitle>
            Slides' backgroundAnimation prop set to 'zoom' (you may reload the
            page if it's already over)
          </Subtitle>
        </Wrapper>
      </OverlayContainer>

      <Slide
        navDescription="Hallstatt - Austria"
        background={{
          backgroundImage: hallstatt,
          backgroundAnimation: "zoom"
        }}
      />

      <Slide
        navDescription="Hvitserkur - Iceland"
        background={{
          backgroundImage: hvitserkur,
          backgroundAnimation: "zoom"
        }}
      />

      <Slide
        navDescription="Jacksonville - USA"
        background={{
          backgroundImage: jacksonville,
          backgroundAnimation: "zoom"
        }}
      />

      <Slide
        navDescription="Moraine Lake - Canada"
        background={{
          backgroundImage: moraineLake,
          backgroundAnimation: "zoom"
        }}
      />

      <ButtonsNav
        isNullAfterThreshold
        position={{
          top: 0,
          left: "50%",
          transform: "translateX(-50%)"
        }}
      />
      <Nav />
    </HeroSlider>
  );
};

export default Hero;
