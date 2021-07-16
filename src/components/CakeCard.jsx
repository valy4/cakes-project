import React from "react"
import styled from "styled-components";

function CakeCard(props) {
  return (

    <Card  >

      <Image src={props.image}
        alt={props.name} />
      <h3>{props.name}</h3>
      <Price>{props.price}</Price>
    </Card >)

}
export default CakeCard

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:300px;
margin: 1.5rem;

`


const Image = styled.img`
height: 250px;
width: 250px;
border-radius:10%;
pointer-events:auto;
transition: transform .5s ease;
overflow: hidden;
&:hover {transform:scale(1.1)}`

const Price = styled.p`
margin: 0;
`
