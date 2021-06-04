import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {name,hp,sprites}=pokemon
  const[frontOrBack, setFrontOrBack]=useState(true)

  function toggleClickHandler () {
    setFrontOrBack(!frontOrBack)    
  }


  return (
    <Card>
      <div>
        <div className="image" onClick={toggleClickHandler}>
          <img src={frontOrBack? sprites.front:sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
