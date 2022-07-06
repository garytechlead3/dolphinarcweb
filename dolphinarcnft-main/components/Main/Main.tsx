import styled from "styled-components";
import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  background: url("/background.webp") no-repeat center #000;
  background-size: cover;
  @media screen and (max-width: 800px) {
    height: auto;
  }
`;

const IntroContainer = styled.div`
  max-width: 144rem;
  padding: 3rem;
  margin: 0 auto;
`;

const NewsletterContainer = styled(motion.div)`
  max-width: 60rem;
  bottom: 0;
  height: auto;
  border-radius: 1rem;
  padding: 8rem 5rem;
  margin: 5rem 0rem 10rem 0rem;
  background: linear-gradient(
    144.92deg,
    rgba(255, 255, 255, 0.74) 4.15%,
    #c498e5 95%
  );
  backdrop-filter: blur(4px);
  h2 {
    color: #fff;
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 5.25rem;
    padding-bottom: 1.75rem;
    &.gradient-text {
      background: linear-gradient(90deg, #e28cbe 1.56%, #6f445d 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  h3 {
    font-size: 2.4rem;
    font-weight: bold;
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 3.2rem;
    padding-top: 3rem;
    max-width: 40rem;
  }
  @media screen and (max-width: 500px) {
    h2 {
      font-size: 2.4rem;
      line-height: 3.4rem;
    }
  }
`;
const newsletter = `
    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
    <script>
    hbspt.forms.create({
        region: "na1",
        portalId: "21629815",
        formId: "2647525c-eb28-4fc5-9400-d7fe7720b8eb"
    });
    </script>
`;

const Form = styled.div`
  input {
    background-color: transparent;
  }
`;

const Main: React.FC = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(newsletter);
  }, [newsletter]);

  return (
    <StyledContainer>
      <Header />
      <IntroContainer>
        <NewsletterContainer
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.5 },
          }}
        >
          <h2 className="gradient-text">
            A Brand New definition of House, Human interaction, and exploration
            in the Metaverse
          </h2>
          <h3>Subscribe for a chance to join our Whitelist:</h3>
          <Form dangerouslySetInnerHTML={{ __html: newsletter }} />
        </NewsletterContainer>
      </IntroContainer>
    </StyledContainer>
  );
};

export default Main;
