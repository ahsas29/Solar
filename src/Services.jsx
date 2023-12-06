import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Services = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const handleReadMore1 = () => {
    setShowMore1(!showMore1);
  };

  const handleReadMore2 = () => {
    setShowMore2(!showMore2);
  };

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-two-column">
        {/* Service 1 */}
        <div className="card">
          <figure>
            <img src="path/to/image1.jpg" alt="Service 1" />
          </figure>
          <div className="card-data">
            <h3>Design Hub</h3>
            <p>
              {showMore1
                ? "We design dedicated R&D tools forSolar Cell Manufacturers and make it easy to connect with the production line and future R&D work at a very low cost. Our tool can be operated by anyone with less technical knowledge."
                : "About Design Hub."}
            </p>
            <NavLink to="/service">
              <Button className="btn" onClick={handleReadMore1}>
                {showMore1 ? "Read Less" : "Read More"}
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Service 2 */}
        <div className="card">
          <figure>
            <img src="path/to/image2.jpg" alt="Service 2" />
          </figure>
          <div className="card-data">
            <h3>Service Hub</h3>
            <p>
              {showMore2
                ? "Our customized software includes a full suite of tools to boost any solar cell R&D productivity. Regular maintenance and upgradation of tool with more features."
                : "About Service Hub."}
            </p>
            <NavLink to="/service">
              <Button className="btn" onClick={handleReadMore2}>
                {showMore2 ? "Read Less" : "Read More"}
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// ... styling


const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
