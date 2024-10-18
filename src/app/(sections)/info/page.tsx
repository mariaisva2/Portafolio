"use client";
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('/descarga.jpg');
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
font-family: var(--font-pacifico);
  font-size: 4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

const Subtitle = styled(motion.h2)`
 font-family: var(--font-montserrat);
  font-size: 2rem;
  font-weight: 300;
  color: #ffd1dc;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Name = styled(motion.h3)`
font-family: var(--font-dancing-script);
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff;
  margin-top: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const HomeHero = () => {
  return (
    <HeroSection>
      <ContentWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
         Software Developer
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Bringing visions to life through code and creativity
        </Subtitle>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Maria Isabel Vanegas Casas
        </Name>
      </ContentWrapper>
    </HeroSection>
  );
};

export default HomeHero;