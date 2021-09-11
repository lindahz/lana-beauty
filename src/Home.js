import React from 'react'

import styled from 'styled-components'
import swal from 'sweetalert'

import { Services } from './components/Services'
import { About } from './components/About'
import { Header } from './components/Header'
import { Location } from './components/Location'

export const Home = () => {
  swal({
    title: 'Erbjudande',
    text: 'Just nu har vi 20% på alla laserbehandlingar.',
    timer: 9000,
    button: 'Stäng'
  })

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