"use client"
import React from 'react';
import styled from 'styled-components';

// Estilos usando styled-components
const Section = styled.section`
  background-color: #413f3f;
  padding: 3rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div<{ imageUrl: string }>`
  position: relative;
  height: 20rem;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #9ca3af;
`;

const Button = styled.button`
  color: #fff;
  border: 1px solid #fff;
  padding: 0.5rem 1.5rem;
  background: transparent;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #d03561;
    color: #000;
  }
`;


const projects = [
  {
    title: 'Recoleccion de datos',
    subtitle: 'Research',
    imageUrl: '/csv.png',
  },
  {
    title: 'Tecnova',
    subtitle: 'Tienda de tecnología',
    imageUrl: '/Tecnova.png',
  },
  {
    title: 'ParchingApp',
    subtitle: 'Aplicación de turismo',
    imageUrl: '/Parching.jpeg',
  },
  {
    title: 'Tienda de ropa',
    subtitle: 'Productos',
    imageUrl: '/Registro.png',
  },
];

const ProjectsGrid: React.FC = () => {
  return (
    <Section>
      <Container>
        {projects.map((project, index) => (
          <Card key={index} imageUrl={project.imageUrl}>
            <CardContent>
              <div>
                <Title>{project.title}</Title>
                <Subtitle>{project.subtitle}</Subtitle>
              </div>
              <Button>EXPLORE</Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default ProjectsGrid;

