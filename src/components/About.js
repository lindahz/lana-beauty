import React from 'react'

import styled from 'styled-components'

import avatar from '../assets/avatar.jpg'

export const About = () => {
  return (
    <Section id="about">
      <Heading>
        This is Lana Beauty & Esthetics
      </Heading>
      <Text>
        Med lång erfarenhet av skönhetsbehandlingar samt ett gediget kunnande borgar
        Lana Beauty & Esthetic för att ge sina kunder den bästa behandlingen och motsvara
        dennes förväntningar. LBE är marknadsledande i Sverige inom området skönhet där det
        används dem senaste metoderna. Mottot är kunskap och kvalité. Lana Beauty & Esthetic
        är specialister inom sina ramar av behandlingar. Kunden står i fokus och förtroende
        att känna sig trygg när man besöker salongen/kliniken betyder allt. Varmt välkommen!
      </Text>
      <Heading>
        Vi erbjuder
      </Heading>
      <Text>
        En säker miljö med kompetent personal som hjälper dig att skräddarsy dina behov,
        varje kund är unik! Om du är osäker på behandlingar kan du alltid kontakta oss för
        ett kostnadsfritt samråd. Säkerhet är viktigt! Med många nöjda kunder och rekommendationer
        känner vi oss mycket hedrade att vara tillgängliga för dig och dina behov.
      </Text>
      <Heading>
        Träffa våra behandlare
      </Heading>
      <Container>
        <Image
          src={avatar} />
        <Text>
          Namn Efternamn
        </Text>
        <Role>
          Hudterapeut
        </Role>
      </Container>
      <Container>
        <Image
          src={avatar} />
        <Text>
          Namn Efternamn
        </Text>
        <Role>
          Sjuksköterska
        </Role>
      </Container>
    </Section>
  )
}

/* ------- STYLING ------- */

const Section = styled.section`
  width: 100%;
  padding: 80px 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #6A4442;
  color: #F9DAC6;

  @media (max-width: 768px) {
    padding: 30px;
  }
`
const Heading = styled.h3`
  width: 100%;
  margin: 0;
  margin-top: 20px;
  font-size: 22px;
  text-align: center;
  //text-transform: uppercase;
  letter-spacing: 0.5px;
`
const Text = styled.p`
  font-size: 15px;
  line-height: 1.6;
  text-align: center;
`
const Role = styled.p`
  font-size: 13px;
  line-height: 0;
  text-align: center;
  text-transform: uppercase;
`
const Container = styled.div`
  margin: 30px;
`
const Image = styled.img`
  width: 200px;
  border-radius: 50%;
`