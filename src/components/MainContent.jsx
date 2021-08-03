import React from "react";
import CakeCard from "./CakeCard";
import tortMaria from ".././assets/images/tort-maria.jpg";
import bomboane from ".././assets/images/bomboane-asortate-cu-visine.jpg";
import mickeyMouse from "../assets/images/happy-birthday-mickeyMouse-deco.jpg";
import tortName from ".././assets/images/happy-birthday-name.jpg";
import muffin from "../assets/images/muffin-cu-smantana.jpg";
import prajiCapsuni from ".././assets/images/prajitura-cu-capsuni.jpg";
import prajiCiocoNuci from "../assets/images/prajitura-cu-ciocolata-si-nuci.jpg";
import tortCremaAfine from "../assets/images/tort-cu-crema-de-afine.jpg";
import tortDeco from "../assets/images/happy-birthday-deco.jpg";
import tortCioco from "../assets/images/tort-cu-crema-de-ciocolata.jpg";
import tortMascarpone from "../assets/images/tort-cu-crema-de-ciocolata-si-mascarpone.jpg";
import tortFructe from "../assets/images/tort-cu-fructe-si-ciocolata.jpg";
import tortCars from "../assets/images/tort-happy-birthday-cars-deco.jpg";
import tortMultiCream from "../assets/images/tort cu crema asortat.jpg";
import tortMultiCreams from "../assets/images/tort cu creme asortate.jpg";
import tortMinioni from "../assets/images/tort-minions-deco.jpg"

function MainContent() {
  return (
    <div className="box">
      <CakeCard name="Tort Maria" image={tortMaria} price="from 15£/kg" />
      <CakeCard
        name="Bomboane asortate cu visine"
        image={bomboane}
        price="from 15£/kg"
      />
      <CakeCard
        name="Tort Mickey Mouse"
        image={mickeyMouse}
        price="from 15£/kg"
      />
      <CakeCard
        name="Tort Minioni"
        image={tortMinioni}
        price="from 15£/kg"
      />
      <CakeCard
        name="Tort decorat cu mesaj"
        image={tortName}
        price="from 15£/kg"
      />
      <CakeCard name="Briose cu smantana" image={muffin} price="5£/12buc" />
      <CakeCard
        name="Prajitura cu capsuni"
        image={prajiCapsuni}
        price="from 15£/kg"
      />
      <CakeCard
        name="Prajitura ciocolata si nuci"
        image={prajiCiocoNuci}
        price="from 15£/kg"
      />
      <CakeCard
        name="Tort cu crema de afine"
        image={tortCremaAfine}
        price="from 15£/kg"
      />

      <CakeCard
        name="Tort multiple creme"
        image={tortMultiCreams}
        price="from 15£/kg"
      />
      <CakeCard
        name="Tort decorat fotbal"
        image={tortDeco}
        price="from 15£/kg"
      />
      <CakeCard
        name="Tort ciocolata si mascarpone"
        image={tortMascarpone}
        price="from 15£/kg"
      />
      <CakeCard
        name="Tort cu crema de ciocolata"
        image={tortCioco}
        price="from 15£/kg"
      />
      <CakeCard
        name="Tort cu fructe si ciocolata"
        image={tortFructe}
        price="from 15£/kg"
      />
      <CakeCard
        name="Tort decorat cu masini"
        image={tortCars}
        price="from 15£/kg"
      />
      <CakeCard
        name="Tort cu diferite creme"
        image={tortMultiCream}
        price="from 15£/kg"
      />


    </div>
  );
}
export default MainContent;
