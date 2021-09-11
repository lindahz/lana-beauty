import React from 'react'

import styled from 'styled-components'

import background from '../assets/header-background.jpg'

export const Header = () => {
  return (
    <Section>
      <Container>
        <Title>
          Välkommen till Lana Beauty & Esthetic
        </Title>
        <Subtitle>
          - Ditt första val inom skönhet och hudvård
        </Subtitle>
        <Btn
          href="#services">
          Behandlingar
        </Btn>
        <Btn
          href="https://www.bokadirekt.se/places/lana-beauty-&-esthetics--24419"
          target="_blank"
          rel="noopener noreferrer">
          Boka tid
        </Btn>
      </Container>
    </Section>
  )
}

/* ------- STYLING ------- */

const Section = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #F9DAC6;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    background-image: none;
  }
`

const Container = styled.div`
  height: inherit;
  padding: 15%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  //background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 30px;
  }
`
const Title = styled.h1`
  width: 60%;
  margin-bottom: 0;
  color: #6A4442;
  font-size: 58px;
  font-style: normal;
  font-weight: 600;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 32px;
  }
`
const Subtitle = styled.h2`
  width: 100%;
  color: #6A4442;
  font-weight: 400;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 20px;
  }
`
const Btn = styled.a`
  padding: 12px 12px;
  margin-right: 10px;
  border: 1px solid;
  color: #6A4442;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #6A4442;
    border: 1px solid #6A4442;
    color: #F9DAC6;
  }

  @media (max-width: 768px) {
    display: none;
  }
`