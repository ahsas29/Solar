import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import AboutContent from "./components/AboutContent";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <AboutContent />;
};
const Button = () => {
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";

      // Scroll to the bottom of the page when "Read less" is clicked
      
    }
  }
};

export default About;
