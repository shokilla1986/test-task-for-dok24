import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { deleteCard, changeLikeCard } from "../reducers/cardSlice";

const CardList = () => {
  const { cardsList, isLoading, error } = useSelector((state) => state.cards);

  return (
    <div className="cardsList">
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {cardsList.map((card) => (
        <Card
          card={card}
          key={card.id}
          remove={deleteCard}
          like={changeLikeCard}
        />
      ))}
    </div>
  );
};

export default CardList;
