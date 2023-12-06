// AboutMore.jsx
import React from "react";
import styled from "styled-components";

const AboutMore = () => {
  return (
    <Wrapper>
      <Quarter>
        <h2>Contact Information</h2>
        <p>
          Website: <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer">www.srmist.edu.in</a>
        </p>
        <p>Email: soumyars@srmist.edu.in</p>
        <p>Phone: +91-8093919822</p>
        <p>Location: Kattankulathur, Chennai</p>
      </Quarter>

      <Quarter>
        <h2>Why Choose Us</h2>
        <p>
          Our R&D tool makes it easy for your entire production line and R&D to work together.
        </p>
        <p>Experienced and dedicated team of researchers</p>
        <p>Simulation of electrical, optical, and environmental parameters</p>
        <p>Addition of new technology (Ex. Si/Perovskite).</p>
      </Quarter>

      <Quarter>
        <h2>Our Product</h2>
        <DesignMission>
          <h3><strong>DESIGN HUB</strong></h3>
          <p>It is low cost + High efficiency + 100% accuracy.</p>
          <p>We provide new design as well as upgrade your existing design</p>
          <p>Use of top generative AI Tool</p>
        </DesignMission>

        <Mission>
          <h3><strong>SERVICE HUB</strong></h3>
          <p>Our customized software includes a full suite of tools to boost any solar cell R&D productivity. Regular maintenance and upgradation of the tool with more features</p>
        </Mission>
      </Quarter>

      <HeroImage>
        <img src="./images/about.jpg" alt="Energy & Quantum Electronics Lab" />
      </HeroImage>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 2rem;
  }
`;

const Quarter = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DesignMission = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Mission = styled.div`
  margin-bottom: 2rem;
`;

const HeroImage = styled.div`
  width: 50%;
  margin-top: 2rem;

  img {
    width: 50%;
    height: auto;
  }
`;

export default AboutMore;
