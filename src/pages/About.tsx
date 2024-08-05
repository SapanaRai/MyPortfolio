import React from 'react';
import styled from 'styled-components';
import mypic from '../image/mypic.jpg';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #f7f9fc;
  color: #333;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #007bff;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #666;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #007bff;
`;

const Image = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const About: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>About Me</Title>
        <Description>
          Hello! I'm <Highlight>Sapana Rai</Highlight>, a passionate full stack developer with experience in various programming languages. 
          I have completed several projects, and I enjoy building web applications that are both functional and aesthetically pleasing.
        </Description>
        <Description>
          My journey as a developer began with a deep curiosity for technology and a desire to create solutions that can make a difference. 
          Over the years, I’ve honed my skills in front-end and back-end development, constantly learning and adapting to new technologies.
        </Description>
        <Description>
          When I’m not coding, you can find me exploring new tech trends, contributing to open source projects, or reading about the latest advancements in software development.
        </Description>
        <Image src={mypic} alt="MyApp Logo" />
      </ContentWrapper>
    </Container>
  );
};

export default About;
