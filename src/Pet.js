import React from "react";
import { Link } from "@reach/router";
export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small; // either get first image we can find or get placecorgi
  }

  //can ignore a variable thats being returned from a hook. ue '_' -e.g. 'Blah'
  //const [_, setBlah] = useState('blah') // eslint-disable-line no-unused-vars

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
}
