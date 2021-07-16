import React from 'react'

import styled from 'styled-components'

import { Services } from './components/Services'
import { About } from './components/About'
import { Header } from './components/Header'
import { Location } from './components/Location'

export const Home = () => {
  return (
    <Section>
      <Header />
      <About />
      <Services />
      <Location />
    </Section>
  )
}

const Section = styled.section`
  background-color: #F9DAC6;
`