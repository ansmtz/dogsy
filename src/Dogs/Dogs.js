import React from "react";
import Dog from "../Dog/Dog";
import "./Dogs.css";

const Dogs = (props) => {
  const cards = props.dogs.map((d) => {
    return (
      <Dog
        key={d.id}
        name={d.name}
        age={d.age}
        facts={d.facts}
        image={d.image}
      />
    );
  });
  return <div className="Dogs">{cards}</div>;
};

export default Dogs;
