import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav className="nav-bar">
      <div>
        <TagsHome href="#home">Home</TagsHome>
        <TagsTorturi href="#torturi">Torturi</TagsTorturi>
        <TagsPraji href="#prajituri">Prajituri</TagsPraji>
      </div>
      <Contact className="contact">
        <Mail>lory_dany80@yahoo.com</Mail>
        <Tel>07405796972</Tel>
      </Contact>
    </Nav>
  );
}
export default Header;
const Nav = styled.nav`
  display: flex;
  height: 6rem;
  font-size: 2rem;
  align-items: center;
 justify-content: space-between;
 @media only screen and (max-width: 480px){
   display: flex;
   flex-direction: column;
  justify-content: center;
  align-items: center;
   margin-left: 0rem;
 }
 @media only screen and (max-width: 768px) and (min-width: 481px){
   display: flex;
   flex-direction: column;
  justify-content: center;
  align-items: center;
   margin-left: 0rem;

 }

`;
const TagsHome = styled.a`
  color: #f79489;
  margin-right:1rem;
  margin-left:6rem;
  cursor: pointer;
   text-decoration: none;
   &:hover {color:#C85250}
   @media only screen and (max-width: 480px){
     margin-left: 0rem;
   }
@media only screen and (max-width: 768px) and (min-width: 481px){
margin-left: 0rem;
}
`;
const TagsTorturi = styled.a`
  color: #f79489;
  margin-right:1rem;
  cursor: pointer;
   text-decoration: none;
   &:hover {color:#C85250}
`;
const TagsPraji = styled.a`
  color: #f79489;
  cursor: pointer;
   text-decoration: none;
   &:hover {color:#C85250}
`;
const Contact = styled.div`
 display: flex;

`;
const Mail = styled.p`
  color: #f79489;
font-size: 1.2rem;
   text-decoration: none;
   margin-right: 1rem;
   @media only screen and (max-width: 480px){
     text-align: center;
   }
   @media only screen and (max-width: 768px) and (min-width: 481px){
     text-align: center;
     font-size: 1.5rem;
   }
`
const Tel = styled.p`
  color: #f79489;
font-size: 1.2rem;
   text-decoration: none;
   margin-right: 6rem;
   @media only screen and (max-width: 480px){
     margin-right: 0rem;
     text-align: center;
   }
   @media only screen and (max-width: 768px) and (min-width: 481px){
     margin-right: 0rem;
     text-align: center;
     font-size: 1.5rem;
   }
`