import React from "react"

function CakeCard(props) {
  return (

    <div>
      <h1>{props.name}</h1>
      <img src={props.image}
        alt={props.name} />
      <p>{props.price}</p>
    </div>)

}
export default CakeCard