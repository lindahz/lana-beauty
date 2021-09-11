import React from 'react'

import styled from 'styled-components'

import location from '../assets/location.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import ig from '../assets/ig.svg'

export const Footer = () => {
  return (
    <>
      <Section id="contact">
        <Container>
          <Wrapper>
            <Icon
              src={location} />
            <Heading>
              Besöksadress
            </Heading>
            <Text>
              Tomtebogatan 21A
            </Text>
            <Text>
              113 39 Stockholm
            </Text>
          </Wrapper>
          <Wrapper>
            <Icon
              src={phone} />
            <Heading>
              Telefonnummer
            </Heading>
            <Text>
              +46 76 199 83 80
            </Text>
          </Wrapper>
          <Wrapper>
            <Icon
              src={email} />
            <Heading>
              E-post
            </Heading>
            <Text>
              lana-hs@hotmail.com
            </Text>
          </Wrapper>
          <Wrapper
            href="https://www.instagram.com/lanabeautyesthetic/">
            <Icon
              src={ig} />
            <Heading>
              Instagram
            </Heading>
            <Text>
              @lanabeautyesthetic
            </Text>
          </Wrapper>
        </Container>
        <Text>
          Lana Beauty & Esthetics © 2021
        </Text>
      </Section>
    </>
  )
}

/* ------- STYLING ------- */

const Section = styled.footer`
  width: 100%;
  background-color: #6A4442;
  color: #F9DAC6;
`
const Container = styled.div`
  width: 100%;
  padding: 40px 140px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 40px;
  }
`
const Wrapper = styled.a`
  width: 100%;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: #F9DAC6;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 0;
  }
`
const Icon = styled.img`
  width: 40px;
`
const Heading = styled.h3`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  //text-transform: uppercase;
`
const Text = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 3px;

  &:nth-child(2) {
      padding: 0 0 20px 20px;
      font-family:'Playfair Display', serif;

      @media (max-width: 768px) {
        text-align: center;
        padding: 10px;
      }
    }
`
