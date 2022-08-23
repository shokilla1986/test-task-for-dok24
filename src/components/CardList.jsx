import React, { useState } from "react";
import Card from "./Card";

const CardList = () => {
  const [cards, setCards] = useState([]);
  return (
    <div>
      {cards.map((card) => (
        <Card />
      ))}
    </div>
  );
};

export default CardList;
