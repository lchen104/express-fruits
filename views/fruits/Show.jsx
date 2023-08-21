import React from 'react'

function Show ({fruits}) {
  console.log(fruits)
  return (
    <div>
        <h1>The {fruits.name} is {fruits.color}</h1>
        {fruits.readyToEat ? 'It is ready to be eaten. Yummy.' : 'Ewww...!' }

    </div> 
  )
}

module.exports = Show;