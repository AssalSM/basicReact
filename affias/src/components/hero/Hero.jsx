import "./Hero.css";
import Lottie from "lottie-react";
import addanimation from "../../../public/inmt/add.json";

function Hero() {
  return (
    <section id="hero" className=" flex part">
      <Lottie className="attt" animationData={addanimation} />
      <div className="assal">
        <h1>Welcome to my services!</h1>
        <p>
          I will design and develop a dynamic and responsive website or landing
          page for you that will be eye-catching, secure, SEO friendly and
          affordable.
        </p>
        <p>
          {" "}
          My focus is customer satisfaction, quality and innovation, hence you
          have endless reviews and guaranteed satisfaction with my service. I am
          a website designer from Morocco with professional experience.
        </p>
        <p>
        Our page also contains some products that we need in our daily lives with free delivery 🚚 to your home .
If you are looking for any product, send us a name or it is description in gmail and we will search for it and put it in the list under 24 hours
        </p>
      </div>
    </section>
  );
}

export default Hero;
