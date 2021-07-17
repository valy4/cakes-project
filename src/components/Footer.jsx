
import React from "react"
import styled from "styled-components";


function Footer() {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <FooterContainer>
      <Par>©{year} by Valy</Par></FooterContainer>
  )
}
export default Footer

const FooterContainer = styled.div`
height: 2rem;
margin: 1rem;
color: #f79489;;
`
const Par = styled.p`
text-align: center;
`