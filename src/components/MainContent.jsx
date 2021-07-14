import React from "react"
import CakeCard from "./CakeCard"
import tortMaria from ".././assets/images/tort-maria.jpg"
import bomboane from ".././assets/images/bomboane-asortate-cu-visine.jpg"
import mickeyMouse from "../assets/images/happy-birthday-mickeyMouse-deco.jpg"
import tortName from ".././assets/images/happy-birthday-name.jpg"
import muffin from "../assets/images/muffin-cu-smantana.jpg"
import prajiCapsuni from ".././assets/images/prajitura-cu-capsuni.jpg"
import prajiCiocoNuci from "../assets/images/prajitura-cu-ciocolata-si-nuci.jpg"
import tortCremaAfine from "../assets/images/tort-cu-crema-de-afine.jpg"
import tortDeco from "../assets/images/happy-birthday-deco.jpg"

function MainContent() {
  return <div>
    <CakeCard
      name="Tort Maria"
      image={tortMaria}
      price="50£"
    />
    <CakeCard
      name="Bomboane-asortate-cu-visine"
      image={bomboane}
      price="50£" />
    <CakeCard
      name="Bomboane-asortate-cu-visine"
      image={mickeyMouse}
      price="50£" />
    <CakeCard
      name="Bomboane-asortate-cu-visine"
      image={tortName}
      price="50£" />
    <CakeCard
      name="Bomboane-asortate-cu-visine"
      image={muffin}
      price="50£" />
    <CakeCard
      name="Bomboane-asortate-cu-visine"
      image={prajiCapsuni}
      price="50£" />
    <CakeCard
      name="Bomboane-asortate-cu-visine"
      image={prajiCiocoNuci}
      price="50£" />
    <CakeCard
      name="Bomboane-asortate-cu-visine"
      image={tortCremaAfine}
      price="50£" />
    <CakeCard
      name="Bomboane-asortate-cu-visine"
      image={tortDeco}
      price="50£" />
  </div>
}
export default MainContent
