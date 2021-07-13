import React from "react"
import CakeCard from "./CakeCard"
import tortMaria from ".././assets/images/tort-maria.jpg"

function MainContent() {
  return <div>
    <CakeCard
      name="Tort Maria"
      image={tortMaria}
    />
  </div>
}
export default MainContent
