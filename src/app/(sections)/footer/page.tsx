"use client"

import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; 
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

// Estilos usando styled-components
const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 1rem 0;
  position: relative;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CopyrightText = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  a {
    color: #d03561;
    transition: color 0.3s ease;

    &:hover {
      color: #fb8dde;
    }
  }
`;

const DevelopedBy = styled.div`
  font-size: 0.875rem;

  a {
    color: #f67eda;
    transition: color 0.3s ease;

    &:hover {
      color: #ff4d4d;
    }
  }
`;



const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText>
          Copyright @2024 Todos los derechos reservados.
        </CopyrightText>

        <SocialLinks>
          <a href="#">
            <Facebook size={24} />
          </a>
          <a href="#">
            <Instagram size={24} />
          </a>
          <a href="#">
            <Twitter size={24} />
          </a>
          <a href="#">
            <Linkedin size={24} />
          </a>
        </SocialLinks>

        <DevelopedBy>
          Desarrollado por <a href="#">Isa</a>
        </DevelopedBy>
      </FooterContent>

    </FooterContainer>
  );
};

export default Footer;
