import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav className="nav-bar">
      <div>
        <TagsHome href="#home">Home</TagsHome>
        <TagsTorturi href="#torturi">Torturi</TagsTorturi>
        {/* <Tags href="#torturi-animate">Torturi animate</Tags> */}
        <TagsPraji href="#prajituri">Prajituri</TagsPraji>
      </div>
      <Contact>
        <Mail>lory_dany80@yahoo.com</Mail>
        <Tel>07405796972</Tel>
      </Contact>
    </Nav>
  );
}
export default Header;
const Nav = styled.nav`
  display: flex;
  height: 10vh;
  font-size: 2rem;
  align-items: center;
 justify-content: space-between;

`;
const TagsHome = styled.a`
  color: #f79489;
  margin-right:1rem;
  margin-left:6rem;
  cursor: pointer;
   text-decoration: none;

`;
const TagsTorturi = styled.a`
  color: #f79489;
  margin-right:1rem;
  cursor: pointer;
   text-decoration: none;
`;
const TagsPraji = styled.a`
  color: #f79489;
  cursor: pointer;
   text-decoration: none;
`;
const Contact = styled.div`
 display: flex;

`;
const Mail = styled.p`
  color: #f79489;
font-size: 1rem;
   text-decoration: none;
   margin-right: 1rem;
`
const Tel = styled.p`
  color: #f79489;
font-size: 1rem;
   text-decoration: none;
   margin-right: 6rem;
`