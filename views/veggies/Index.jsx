import React from 'react'

function Index ({veggies}) {
  return (
    <div>
      <h1>Fruits Index Page</h1>
      <ul>
          {
            veggies.map((veggie, i) => {
              return (
                  <li key={i}>
                      <a href={`/veggies/${i}`}>{veggie.name}</a>&nbsp;is {veggie.color} <br/>
                      and 
                      {veggie.readyToEat ? `It is ready to eat` : `It is not ready to eat`}
                    
                  </li>
              );
            })
          }
      </ul>
    </div>
  )
}

module.exports = Index;