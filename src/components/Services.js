import React from 'react'

import styled from 'styled-components'

import lash from '../assets/lash.svg'
import brow from '../assets/eyebrow.png'
import body from '../assets/body.svg'
import cream from '../assets/cream.png'
import massage from '../assets/massage.svg'
import beauty from '../assets/beauty.svg'
import heart from '../assets/heart.png'
import flower from '../assets/flower.png'

export const Services = () => {
  const treatments = [
    {
      name: 'Ansiktsbehandling',
      icon: cream,
      image: '#',
      description: 'Vi erbjuder ansiktsbehandling och kemisk peeling för olika hudtyper. Beroende på din hudtyp anpassar vi behandlingen just för dig.'
    },
    {
      name: 'Microneedling',
      icon: beauty,
      image: '#',
      description: 'Microneedling är en avancerad behandling som på ett naturligt sätt ökar hudens kollagentillväxt och förbättrar hudens struktur och lyster.'
    },
    {
      name: 'Laser',
      icon: body,
      image: '',
      description: 'Vi erbjuder permanent hårreducering med diod laser. Inför första behandlingen kommer du på en konsultation där vi går igenom behandlingsförloppet.'
    },
    {
      name: 'Lashlift',
      icon: lash,
      image: '',
      description: 'Lashlift är en permanent böjning av ögonfransarna som håller ca 4-10 veckor beroende på hur fort dina fransar växer.'
    },
    {
      name: 'Massage',
      icon: massage,
      image: '',
      description: 'Vi erbjuder flera olika typer av massage som ansikts- och huvudmassage, massage för rygg och nacke, benmassage och helkroppsmassage.'
    },
    {
      name: 'LPG',
      icon: heart,
      image: '',
      description: 'LPG, lipomassage, minskar celluliter och envisa fettdepåer från mage, lår och rumpa samt stramar upp slapp hud med en skön, djupgående massage.'
    },
    {
      name: 'Vaxning',
      icon: flower,
      image: '',
      description: 'Vaxning är en effektiv och skonsam hårborttagningsmetod som ger ett slätt och hårfritt resultat som håller i veckor. Vi har även brasiliansk vaxning.'
    },
    {
      name: 'Bryn och frans',
      icon: brow,
      image: '',
      description: 'Vi erbjuder färgning av både bryn och fransar samt trådning och formning av dina bryn.'
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