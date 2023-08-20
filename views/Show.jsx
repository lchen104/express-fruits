import React from 'react'

function Show ({fruits}) {
  console.log(fruits)
  return (
    <div>
        <h1>The {fruits.name}is {fruits.color}</h1>
        {fruits.readyToEat ? 'its ready to eat' : 'ew yuck!' }

    </div> 
  )
}

module.exports = Show;