import myPix from "../assets/images/myPix.jpg";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>
          <span>Hello!, This is </span>{" "}
          <span className="hero-name">Michael Taiwo</span>
        </h1>
        <div className="hero-images">
          <img src={myPix} alt="Michael Taiwo" />
        </div>
        <h3>Web Developer / Pentester</h3>
        <p>
          I am web developer and a cyber-security enthusaist. am confortable
          with using Frontend technology such as HTML, Javascript, CSS and the
          React Libray and Backend Technology such as Node.Js, MongoDb and Express.js
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
