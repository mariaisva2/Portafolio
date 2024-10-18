"use client"

import React from 'react'
import styled from 'styled-components'
import { MapPin, Mail, Phone } from 'lucide-react'

const ContactSection = styled.section`
  background-color: #000000;
  color: #ffffff;
  padding: 2rem;
  font-family: Arial, sans-serif;
`

const Title = styled.h2`
  font-size: 1rem;
  color: #d03561;
  text-align: center;
  margin-bottom: 0.5rem;
  font-family: var(--font-dancing-script);
`

const Subtitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`

const Input = styled.input`
  background-color: #1a1a1a;
  border-radius:20px;
  padding: 0.75rem;
  color: #ffffff;
`

const TextArea = styled.textarea`
  background-color: #1a1a1a;
  border-radius:20px;
  padding: 0.75rem;
  color: #ffffff;
  height: 150px;
`

const SubmitButton = styled.button`
  background-color: #d03561;
  color: #ffffff;
  border-radius:20px;
  padding: 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f67eda;
  }
`

const ContactInfo = styled.div`
  flex: 1;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const IconWrapper = styled.div`
  background-color: #d03561;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius:20px;
`

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
`

const ContactLabel = styled.span`
  font-weight: bold;
  margin-bottom: 0.25rem;
`

export default function ContactForm() {
  return (
    <ContactSection>
      <Title>CONTACTO</Title>
      <Subtitle>CONTÁCTAME</Subtitle>
      <FormContainer>
        <Form>
          <Input type="text" placeholder="Nombre" />
          <Input type="tel" placeholder="Teléfono" />
          <Input type="email" placeholder="Correo electrónico" />
          <TextArea placeholder="Mensaje" />
          <SubmitButton type="submit">Enviar mensaje</SubmitButton>
        </Form>
        <ContactInfo>
          <ContactItem>
            <IconWrapper>
              <MapPin color="white" size={24} />
            </IconWrapper>
            <ContactText>
              <ContactLabel>DIRECCIÓN</ContactLabel>
              <span>Ciudad-Medellin,municipio Envigado.</span>
            </ContactText>
          </ContactItem>
          <ContactItem>
            <IconWrapper>
              <Mail color="white" size={24} />
            </IconWrapper>
            <ContactText>
            
              <span>mariac20160@gmail.com</span>
            </ContactText>
          </ContactItem>
          <ContactItem>
            <IconWrapper>
              <Phone color="white" size={24} />
            </IconWrapper>
            <ContactText>
              <ContactLabel>Teléfono</ContactLabel>
              <span>+57 312 650 1820</span>
            </ContactText>
          </ContactItem>
        </ContactInfo>
      </FormContainer>
    </ContactSection>
  )
}