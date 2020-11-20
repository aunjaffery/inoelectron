import React from "react";
import styled from "styled-components";
import CustomerImage from "assets/customer-story.png";

const StyContainter = styled.div`
  background: ${(props) => props.theme.companybg};
  color: ${(props) => props.theme.textcolor};
`;
const HeaderDiv = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  text-align: center;
`;
const HeaderText = styled.h2`
  text-align: center;
  font-size: calc(2rem + (18 * (100vw - 400px) / 624));
  font-weight: 700;
  letter-spacing: -0.8px;
  margin-bottom: 1rem;
  padding: 0 20px;
`;
const StyComment = styled.p`
  font-weight: 300;
  font-style: italic;
  // font-size: 1.75rem;
  font-size: calc(1rem + (8 * (100vw - 400px) / 624));
  padding-right: 40px;
`;
const StyComName = styled.p`
  font-size: calc(1rem + (0 * (100vw - 400px) / 624));
`;

const Companies = () => {
  return (
    <StyContainter>
      <div className="px-0 px-xl-5" style={{ padding: "5rem 0" }}>
        <HeaderDiv>
          <HeaderText>
            Over 750,000 companies use Slack to get work done
          </HeaderText>
          <p>
            <a href="https://www.google.com">See all customer stories</a>
          </p>
        </HeaderDiv>
        <div className="row" style={{ paddingTop: "50px" }}>
          <div className="col-md-6">
            <StyComment className="pl-3 pl-sm-4">
              “I help to bring product from the wild to the kitchen, and all
              across the dining room,” Koseba explains. “[With Slack] there’s no
              wasted time or wasted product because you’re able to communicate
              things right away.”
            </StyComment>
            <StyComName className="pl-3 pl-sm-4">
              <strong>Katina Connaughton</strong>
              <br />
              Head Farmer, SingleThread
            </StyComName>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center h-100">
              <img src={CustomerImage} alt="CustomerImage" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </StyContainter>
  );
};
export default Companies;
