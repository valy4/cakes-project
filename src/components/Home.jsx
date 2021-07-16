import React from "react";
// import homePicture from "../assets/images/home-picture.jpg"
import styled from "styled-components";

function Home() {
  return (
    <div>
      <div className="home">
        <Title>Lory's Homemade Cakes Welcomes You</Title>
      </div>
    </div>
  );
}
export default Home;
const Title = styled.h1`
  text-align: center;
  vertical-align: middle;
  color: #F8AFA6;
  background-color: rgba(251, 251, 251, 0.8);
  border-radius: 10px;
  text-align: center;
  line-height: 1.25em;
  font-size: 72px;
  margin: 2rem;
  padding: 2rem;
  width: 50rem;
  font-style:italic;

`;
