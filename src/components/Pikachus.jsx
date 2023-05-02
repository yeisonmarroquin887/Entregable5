import React, { useEffect } from "react";
import usefetch from "../hooks/useFetch";

const Pikachus = ({ url }) => {
  const [getpokemones, pokemon] = usefetch(url);
  useEffect(() => {
    getpokemones();
  }, []);
  console.log(pokemon);
  return (
    <div>
      <article>
        <section>
          <header>
            <img
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </header>
          <section>
            <nav>
             <h1>{pokemon?.species.name}</h1>
             {
              pokemon?.types.map(ability => (
                <p key={ability.url}>/{ability.type.name}</p> 
              ))
             }
            <span>Tipo</span>
            </nav>
             <hr />
             <nav>
              <ul>
                {
                  pokemon?.stats.map(power => (
                    <li key={power.stat.url}>
                      <span>{power.stat.name}</span>
                      <span>{power.base_stat}</span>
                      </li>
                  ))
                }
              
              </ul>
             </nav>
          </section>
        </section>
      </article>
      <hr />
    </div>
  );
};

export default Pikachus;
