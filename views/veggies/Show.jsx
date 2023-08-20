import React from 'react'

function Show ({veggies}) {
  console.log(veggies)
  return (
    <div>
        <h1>The {veggies.name} is {veggies.color}</h1>
        {veggies.readyToEat ? 'It is ready to be eaten. Yummmy.' : 'Ewww...!'}

    </div>
  )
}

module.exports = Show;