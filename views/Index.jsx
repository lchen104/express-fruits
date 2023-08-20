import React from 'react'

function Index ({fruits}) {
  return (
    <div>
      <h1>Fruits Index Page</h1>
      <ul>
          {
            fruits.map((fruit, i) => {
              return (
                  <li key={i}>
                      <a href={`/fruits/${i}`}>{fruit.name}</a>&nbsp;is {fruit.color} <br/>
                      and
                      {fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat`}
                    
                  </li>
              );
            })
          }
      </ul>
    </div>
  )
}

module.exports = Index;