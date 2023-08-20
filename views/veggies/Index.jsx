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
                      The <a href={`/veggies/${i}`}>{veggie.name}</a> is {veggie.color} <br/>
                      and 
                      {veggie.readyToEat ? `It is ready to be eaten. Yummy` : `It is not ready to be eaten!`}
                    
                  </li>
              );
            })
          }
      </ul>
    </div>
  )
}

module.exports = Index;