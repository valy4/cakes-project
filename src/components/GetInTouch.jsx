import React from "react";
import styled from "styled-components";
import tortMinioni from "../assets/images/tort-minions-deco.jpg"

function GetInTouch() {
  return (
    <Contact>
      <Text>
        <h1>Contact</h1>
        <Paragraf>
          Torturile de casă executate de Lory's Homemade Cakes se angajează să vă
          depășească nevoile. Întrebări, comentarii sau solicitări speciale? </Paragraf>
        <p>
          Ne-ar
          plăcea să aflăm de la dumneavoastra, așa că nu ezitați să ne contactați astăzi.
        </p>
        <p>Harlow</p>
        <p>lory_dany80@yahoo.com</p>
        <p>07405796972</p>
      </Text>
      <div>
        <Image src={tortMinioni}></Image>
      </div>
    </Contact>
  );
}
export default GetInTouch

const Contact = styled.div`
      display: flex;
      margin: 2rem;
      color: #C85250;
      font-size: 1.2rem;


      `
const Image = styled.img`
height: 95vh;
width: 50vw;
border-radius:1%;


`
const Text = styled.div`
display: flex;
flex-direction: column;
width: 50vw;
justify-content: center;
align-items: center;
padding-right: 2rem;
`
const Paragraf = styled.p`
text-align: start
`