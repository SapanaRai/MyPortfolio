import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
  margin-left: 250px; // Offset to make room for the sidebar
  padding: 20px;
  background-color: #f0f2f5;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 40px;
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  color: #333;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5em;
  color: #666;
  margin-top: 10px;
`;

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const SectionContent = styled.p`
  font-size: 1em;
  color: #444;
`;

const Homepage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <HeroSection>
          <HeroTitle>Welcome to My Portfolio</HeroTitle>
          <HeroSubtitle>Hi, I'm Sapana Rai, a Full Stack Developer</HeroSubtitle>
        </HeroSection>
        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SectionContent>
            - JavaScript / TypeScript<br />
            - React / Redux<br />
            - Node.js / Express<br />
            - HTML / CSS<br />
            - SQL / NoSQL Databases<br />
            - Mysql
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Contact</SectionTitle>
          <SectionContent>
            You can reach me at: <a href="mailto:your-email@example.com">your-email@example.com</a>
          </SectionContent>
        </Section>
      </Container>
    </>
  );
};

export default Homepage;
