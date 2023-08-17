import React from 'react'
import Section from './Section'
import { styled } from 'styled-components'

const Container=styled.div`
    height: 100vh;
    /* background-color: rebeccapurple; */
`

const Home = () => {
  return (
    <Container>
      <Section/>

    </Container>
  )
}

export default Home
