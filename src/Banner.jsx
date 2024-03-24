import { ParallaxBanner } from "react-scroll-parallax";

const Banner = (props) => {
  return (
    <ParallaxBanner
      layers={[{ image: "./assets/background.jpg", speed: -15 }]}
    ></ParallaxBanner>
  );
};

export default Banner;
