import React from "react";
import styled from "styled-components";


function GetInTouch() {
  return (
    <Contact>
      <h1>Contact</h1>
      <p>
        Torturile de casă executate de Lory's Homemade Cakes se angajează să vă
        depășească nevoile. Întrebări, comentarii sau solicitări speciale? </p>
      <p>
        Ne-ar
        plăcea să aflăm de la dumneavoastra, așa că nu ezitați să ne contactați astăzi.
      </p>
    </Contact>
  );
}
export default GetInTouch

const Contact = styled.div`
position: absolute;
display: flex;
`