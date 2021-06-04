import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [data, setData] = useState([])
  const [search, setSearch]=useState("")

  useEffect(() =>{
    fetch(`http://localhost:3001/pokemon`)
      .then(r => r.json())
      .then(setData)
  },[])

  const displayedPokemon = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddPokemon(newPokemon){
    setData([...data, newPokemon])
  }

  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search onSearchChange={setSearch}/>
      <br />
      <PokemonCollection data={displayedPokemon} />
    </Container>
  );
}

export default PokemonPage;
