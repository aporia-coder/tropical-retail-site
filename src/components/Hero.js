import React from "react";

const Hero = ({ hero, children }) => {
  return (
    <header className={hero}>
      <div className="centerMiddle">{children}</div>
    </header>
  );
};

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
