import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const AboutContent = () => {
  const { name, image } = useGlobalContext();
  const [isReadMore, setIsReadMore] = useState(false);
  const navigate = useNavigate();

  const myFunction = () => {
    setIsReadMore(!isReadMore);
    if (!isReadMore) {
      // Navigate to a new route when "Read more" is clicked
      navigate("/about-more");
    }
  };

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">ENERGY & QUANTUM ELECTRONICS LAB, SRM IST</p>
          <h1 className="hero-heading">AI-Driven Energy Transition for Solar Industry</h1>
          <p className="hero-para">
            Making Industry-Ready R&D {isReadMore && "Test text line for read more"}
          </p>
          <Button className="btn readmore-btn" onClick={myFunction} id="myBtn">
            <NavLink to="/about"> {isReadMore ? "Read less" : "Read more"} </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

// ... (rest of the code remains unchanged)


const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    margin-top: 1.5rem;
    margin-bottom: 3 rem;
    max-width: 60rem;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default AboutContent;
