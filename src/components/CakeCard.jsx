import React from "react"
import styled from "styled-components";

function CakeCard(props) {
  return (

    <div>
      <h1>{props.name}</h1>
      <Image src={props.image}
        alt={props.name} />
      <Price>{props.price}</Price>
    </div>)

}
export default CakeCard


const Image = styled.img`
height: 250px;
width: 250px;
`
const Price = styled.p`
font-size: large;
color:red;
`