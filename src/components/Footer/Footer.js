import React from "react";
import styled from "styled-components";
const FootDiv = styled.div`
  background: ${(props) => props.theme.footerbg};
  padding: 20px 0;
`;
const Footer = () => {
  return (
    <FootDiv>
      <div className="container">
        <span className="pr-4 font-weight-bold">Status</span>
        <span className="pr-4 font-weight-bold">Privacy & Terms</span>
        <span className="pr-4 font-weight-bold">Contact Us</span>
        <span className="pr-4 font-weight-bold">Change Region</span>
      </div>
    </FootDiv>
  );
};
export default Footer;
