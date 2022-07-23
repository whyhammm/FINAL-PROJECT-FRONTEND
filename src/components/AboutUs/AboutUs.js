import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import heroimg from "../../images/undraw_breakfast_psiw.svg"
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="hero">
        <img src={heroimg} alt="breakfast" />
      </div>
      <div className="about">
        <h3>
          Cooking is one of the best creative hobbies for stress-relief. If you
          are an experienced cook or a beginner, these five sites will help you
          approach your recipes in unique ways. Cooking is chemistry, only
          delicious. You might think this traditionally domestic pursuit isn't
          geeky, but you're wrong: combining cheap ingredients into a delicious
          meal is the ultimate life hack.{" "}
        </h3>
        <br />
        <h3>
          Today YouCanDoIt Websites and Apps is looking at five sites with a
          wide array of recipes, teaching you to make everything from pad Thai
          to pizza. Whether you're looking for easy healthy recipes, soup
          recipes or anything else, one of these sites has you covered.
        </h3>
        <br />
        <Link to="/">
          <button className="btn">Back to Home</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
