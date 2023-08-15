import React from 'react'
import { styled } from 'styled-components'

const Container=styled.div`
height: 70%;
background-color: #f2f2f2;
border-radius: 20px;
margin-right: 40px;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;

-webkit-box-shadow: 11px 11px 41px -2px rgba(56,49,56,1);
-moz-box-shadow: 11px 11px 41px -2px rgba(56,49,56,1);
box-shadow: 11px 11px 41px -2px rgba(56,49,56,1);
`
const Pricecard=styled.div`
display: flex;
align-items: center;

`
const Pricecontent=styled.span`
font-weight: bold;
font-size: 60px;

`
const Type=styled.button`
margin-top: 20px;
padding:15px;
font-size: 20px;
font-weight: bold;
border-radius: 20px;
background-color: blueviolet;
border: none;
color: white;
cursor: pointer;
`

const List=styled.ul`
margin-top: 20px;

`

const Listitem=styled.li`
margin-top: 20px;
font-size: 20px;
list-style: none;


`
const Button=styled.button`
margin-top: 20px;
padding: 20px 40px;
font-size: 20px;
font-weight: bold;
border-radius: 20px;
background-color: blueviolet;
border: none;
color: white;
cursor: pointer;
`

const Price = () => {
  return (
    <Container>
        <Pricecard>
            $<Pricecontent>20</Pricecontent>/month
        </Pricecard>
            <Type>
                Basic Plan
            </Type>
        <List>
            <Listitem>Lorem ipsum dolor sit amet.</Listitem> 
            <Listitem>Lorem ipsum dolor sit amet.</Listitem> 
            <Listitem>Lorem ipsum dolor sit amet.</Listitem> 
            <Listitem>Lorem ipsum dolor sit amet.</Listitem> 
            
        </List>
        <Button>
            Join
        </Button>
      
    </Container>
  )
}

export default Price
