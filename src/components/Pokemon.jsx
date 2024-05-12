import React, { useState } from 'react'
import axios from 'axios'

export function Pokemon () {

    const [data, setData] = useState({})
    const [name, setName] = useState('')
    
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  
    const searchPokemon = (event) => {
      if (event.key === 'Enter') {
        axios.get(url).then((response) => {
          setData(response.data)
        }).catch((err) => {
            console.error(err);
        });
        setName('')
      }
    }
  
    return (
      <div className="app appPokemon">
        <div className="search">
          <input
            value={name}
            onChange={event => setName(event.target.value)}
            onKeyUp={(event) => {
              searchPokemon(event);
            }}
            placeholder='Nom pokemon ou numéro'
            type="text" />
        </div>
        <div className="containerPokemon">
            {data.name !== undefined && <div className="topPokemon">
                <div className="col">
                    <div className="name">
                        <h1>{data.name}</h1>
                    </div>
                    <img src={data.sprites ? data.sprites.other.dream_world.front_default : ''} alt="pokemon"/>
                </div>
                
                <div className="col">
                    <div>
                        <p>
                            Compétences
                        </p>
                        {data.abilities ? data.abilities.map((value, key) =>  {
                            return (
                                <div key={key}>
                                    {value.ability.name}
                                </div>
                            )
                        }):""}
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p>
                            Statistiques
                        </p>
                        {data.stats ? data.stats.map((value, key) =>  {
                            return (
                                <div key={key}>
                                    {value.stat.name} = {value.base_stat}
                                </div>
                            )
                        }):""}
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p>
                            Types
                        </p>
                        {data.types ? data.types.map((value, key) =>  {
                            return (
                                <div key={key}>
                                    {value.type.name}
                                </div>
                            )
                        }):""}
                    </div>
                </div>
            </div>
        }
        </div> 
      </div>
    );
}