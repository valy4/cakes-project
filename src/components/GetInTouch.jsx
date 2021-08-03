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
        <SecPAragraf>
          Ne-ar
          plăcea să aflăm de la dumneavoastra, așa că nu ezitați să ne contactați astăzi.
        </SecPAragraf>
        <Lines>
          <p>Harlow</p>
          <p>lory_dany80@yahoo.com</p>
          <p><b>07440172711</b></p>
        </Lines>
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
      @media only screen and (max-width: 480px){
        margin-top: 0rem;
      }
       @media only screen and (max-width: 768px) and (min-width: 481px){
         font-size: 1.5rem;
       }


      `
const Image = styled.img`
height: 95vh;
width: 50vw;
border-radius:1%;
@media only screen and (max-width: 480px){

}


`
const Text = styled.div`
display: flex;
flex-direction: column;
width: 50vw;
justify-content: center;
align-items: center;
padding-right: 2rem;
@media only screen and (max-width: 480px){
padding-right: 0.8rem;

}
`
const Paragraf = styled.p`
text-align: start;
@media only screen and (max-width: 480px){
text-align: center;
}
`
const SecPAragraf = styled.p`
@media only screen and (max-width: 480px){
  text-align: center;
}
`
const Lines = styled.div`
text-align: center;
@media only screen and (max-width: 480px){
line-height: 0.5rem;
text-align: center;

}

`
