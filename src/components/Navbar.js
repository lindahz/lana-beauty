import React from 'react'

import styled from 'styled-components'

import logotype from '../assets/logotype.png'

export const Navbar = () => {
  // const [prevScrollPos, setPrevScrollPos] = useState(0)
  // const [visible, setVisible] = useState(false)

  return (
    <Section>
      <Logo
        src={logotype} />
      <Container>
        <Link href="#about">
          Om oss
        </Link>
        <Link href="#services">
          Behandlingar
        </Link>
        {/* <Link>
          Vanliga frågor
        </Link> */}
        <Link href="#contact">
          Kontakta oss
        </Link>
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
  padding: 0 40px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F9DAC6;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
const Container = styled.div`
`
const Logo = styled.img`
  width: 100px;
  justify-self: start;
`
const Link = styled.a`
  padding: 0;
  margin: 0 30px;
  font-size: 12px;
  color: #6A4442;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const Btn = styled(Link)`
  background-color: #6A4442;
  padding: 14px 14px;
  color: #F9DAC6;
  display: inline;
  // border-radius: 5px;
`