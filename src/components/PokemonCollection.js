import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({data}) {
  

  const displayCards = data.map((pokemon)=>{
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {displayCards}
    </Card.Group>
  );
}

export default PokemonCollection;
