import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import Hero from "assets/hero-image.png";

const StyDiv = styled.div`
  background: ${(props) => props.theme.sliderbg};
`;
const Heading = styled.h1`
  font-weight: 700;
  font-size: 50px;
`;
const Para = styled.p`
  color: black;
  font-size: 1.25rem;
  font-weight: 450;
  max-width: 26rem;
  margin-top: 20px;
`;
const StyButton = styled(Button)`
  padding: 12px 30px;
  font-weight: 600;
`;
const Slider = () => {
  return (
    <StyDiv>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6">
            <Heading>Welcome to your new HQ</Heading>
            <Para>
              Teamwork can be hard, messy, complicated… and still the best way
              to work. That’s why we made Slack — a place where people get work
              done, together.{" "}
            </Para>
            <StyButton variant="primary">TRY FOR FREE</StyButton>
          </div>
          <div className="col-md-6">
            <img src={Hero} alt="hero" className="image-fluid" width="100%" />
          </div>
        </div>
      </div>
    </StyDiv>
  );
};
export default Slider;
