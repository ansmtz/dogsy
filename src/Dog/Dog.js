import React from "react";
import { translit } from "gost-transliteration";
import { Link } from "react-router-dom";
import "./Dog.css";
const Dog = (props) => {
  const desrciption = props.facts.map((f) => <p>{f}</p>);
  return (
    <Link className="Dog-wrapper" exact to={`/dogs/${translit(props.name)}`}>
      <div className="Dog">
        <div className="Dog-image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="Dog-info">
          <h2 className="Dog-title">
            {props.name}, {props.age}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Dog;
