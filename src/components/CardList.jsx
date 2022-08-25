import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCards } from "../reducers/actionCreator";
import Card from "./Card";
import { deleteCard, changeLikeCard } from "../reducers/cardSlice";

const CardList = () => {
  const { cardsList, isLoading, error } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCards());
  // }, []);
  console.log("CardList: ", cardsList);

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
