"use client"
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  background: #000000;
  padding: 2rem;
  min-height: 100vh;
`;

const Title = styled(motion.h2)`
  color: #ffffff;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: var(--font-dancing-script);
  background: linear-gradient(45deg, #d03561, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: #2a2a2a;
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }
`;

const SkillImage = styled.img`
  width: 80px;
  height: 90px;
  margin-bottom: 1rem;
`;

const SkillName = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const SkillDescription = styled.p`
  color: #cccccc;
  font-size: 0.9rem;
`;

const skills = [
  { name: 'HTML5', image: '/HTML.jpg', description: 'Estructura semántica y accesible para la web' },
  { name: 'CSS3', image: '/CSS.jpg', description: 'Estilos modernos y responsivos' },
  { name: 'JavaScript', image: '/js.jpg', description: 'Interactividad y lógica del lado del cliente' },
  { name: 'React', image: '/React.jpg', description: 'Construcción de interfaces de usuario dinámicas' },
  { name: 'Python', image: '/Python.jpg', description: 'Lenguaje comprensible,implementación rápida' },
];

const SkillsGrid = () => {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </Title>
      <GridContainer>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <SkillImage src={skill.image} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </GridContainer>
    </Container>
  );
};

export default SkillsGrid;