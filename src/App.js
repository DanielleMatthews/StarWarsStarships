import React, { useState, useEffect } from 'react'
import { allStarships } from './services/sw-api'
import './App.css'
// import Ship from './Ship.jsx'

export default function App() {
  const [ships, setShips] = useState([])

useEffect(() => {
  allStarships()
    .then(data => setShips(data.results))
}, [])
console.log(ships)

    return(
      
      <div id='app'> 
      <h1> Ships </h1>
      <ul id='ul'> 
        {ships.map((ship) => (
          <li id='li'>
            <div id='name'> 
            <h3>{ship.name}</h3>
            <br/> <br/> <br/>
            </div>
          </li> 
        )) 
        }
        
      </ul>
      
      </div>
      
    )
  }


// {/* <ul>
// {this.ships.map((ship, id) => {
//   return ( 
//     <li>
//       {ship.name}
//     </li>
//     )
//   })
// }
// </ul>
// </div> */}

