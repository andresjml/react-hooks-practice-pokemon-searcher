import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [formData, setFormData]=useState({
    name:"",
    hp:"",
    frontUrl:"",
    backUrl:""
  })

  function handleChange(event){
    const a = event.target.name
    const b= event.target.value
    setFormData({...formData, [a]:b })
  }

  function handleSubmit(event){
    event.preventDefault();

    const newPokemon = {
      name: formData.name,
      hp: parseInt(formData.hp),
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl,
      },
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((r) => r.json())
      .then(onAddPokemon);

      formData.name=""
      formData.hp=""
      formData.frontUrl=""
      formData.backUrl=""
      
  }

  

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} value={formData.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} value={formData.hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
