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
color: #C85250;;

`


const Image = styled.img`
height: 250px;
width: 250px;
border-radius:10%;
pointer-events:auto;
/* transition: transform .5s ease;
overflow: hidden; */
transform-origin: 65% 75% ;
transition: transform 1s, filter .5s ease-out;
&:hover {transform:scale(1.2)}`

const Price = styled.p`
margin: 0;
font-size: 1.5rem;
`
