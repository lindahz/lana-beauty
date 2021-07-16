import React from 'react'

import styled from 'styled-components'

import lash from '../assets/lash.svg'
import brow from '../assets/eyebrow.png'
import body from '../assets/body.svg'
import facial from '../assets/treatment.svg'
import massage from '../assets/massage.svg'
import beauty from '../assets/beauty.svg'

export const Services = () => {
  const treatments = [
    {
      name: 'Ansiktsbehandling',
      icon: facial,
      image: '#',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
    },
    {
      name: 'Microneedling',
      icon: beauty,
      image: '#',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
    },
    {
      name: 'Lashlift',
      icon: lash,
      image: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
    },
    {
      name: 'Massage',
      icon: massage,
      image: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
    },
    {
      name: 'Hårborttagning',
      icon: body,
      image: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
    },
    {
      name: 'Trådning',
      icon: brow,
      image: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
    }
  ]
  return (
    <Section
      id="services">
      <Heading>
        Våra behandlingar
      </Heading>
      <Container>
        {treatments.map((treatment) => {
          return (
            <SubContainer>
              <Icon
                src={treatment.icon} />
              <SubHeading>
                {treatment.name}
              </SubHeading>
              <Text>
                {treatment.description}
              </Text>
            </SubContainer>
          )
        })}
      </Container>
    </Section>
  )
}

/* ------- STYLING ------- */
const Section = styled.section`
  width: 100%;
  padding: 60px 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F9DAC6;
  color: #6A4442;

  @media (max-width: 768px) {
    padding: 30px;
  }
`
const Heading = styled.h3`
  margin: 0;
  padding: 14px 14px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  //background-color: #F9DAC6;
`
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 30%;
  //background-color: #F9DAC6;

  @media (max-width: 768px) {
    width: 100%;
  }
`
const SubHeading = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  //color: #ffffff;
`
const Text = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
`
const Icon = styled.img`
  width: 55px;
  margin: 10px;
  //background-color: #F9DAC6;
`