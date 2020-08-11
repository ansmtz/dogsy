import React from "react";
import { Link } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = (props) => {
  const { dog } = props;
  return (
    <div className="DogDetails">
      <div className="DogDetails-image">
        <img src={dog.image} alt={dog.name} />
      </div>

      <div className="DogDetails-info">
        <h1 className="DogDetails-name">{dog.name}</h1>
        <span className="DogDetails-age">Возраст: {dog.age}</span>
      </div>

      <ul className="DogDetails-facts">
        {dog.facts.map((f, index) => {
          return (
            <li key={index} className="DogDetails-fact">
              {f}
            </li>
          );
        })}
      </ul>

      <Link className="DogDetails-back" to="/dogs">
        Вернуться
      </Link>
    </div>
  );
};

export default DogDetails;
