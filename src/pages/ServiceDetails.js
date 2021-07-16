import React from 'react'

import styled from 'styled-components'

export const ServiceDetails = () => {
  return (
    <Section>
      <Container>
        <Title>
          Massage
        </Title>
        <Text>
          Behandling
        </Text>
        <Span>
          ..........
        </Span>
      </Container>
    </Section>
  )
}

/* ------- STYLING ------- */

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  background-color: #6A4442;
  padding: 50px;
`
const Title = styled.h2`
  color: #F9DAC6;
`
const Text = styled.p`
  color: #F9DAC6;
`
const Span = styled.span`
  color: #F9DAC6;
`