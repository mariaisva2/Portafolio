"use client"
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  background: #000000;
  color: #ffffff;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 6rem 4rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 250px;
  height: 300px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 300px;
    height: 350px;
    margin-bottom: 0;
    margin-right: 4rem;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const ImageBorder = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: -10px;
  right: 10px;
  bottom: 10px;
  border: 3px solid #d03561;//ea516d
  border-radius: 15px;
  z-index: -1;
`;

const ContentContainer = styled.div`
  max-width: 500px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #d03561;
  font-family: var(--font-dancing-script);
`;

const Subtitle = styled(motion.h3)`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #e0e0e0;
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;



const AboutMe = () => {
  return (
    <AboutSection>
      <ImageContainer
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileImage src="/me.jpg" alt="Your Name" />
        <ImageBorder
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
      </ImageContainer>
      <ContentContainer>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Desarrolladora Frontend
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Soy una apasionada desarrolladora de frontend con un ojo agudo para el diseño y un amor por crear experiencias de usuario fluidas. Con experiencia en React, Next.js y técnicas CSS modernas, doy vida a mis ideas a través de un código limpio, eficiente y visualmente atractivo.
        </Description>
        
      </ContentContainer>
    </AboutSection>
  );
};

export default AboutMe;