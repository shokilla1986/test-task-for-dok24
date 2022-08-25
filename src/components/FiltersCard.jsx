import React, { useEffect } from "react";
import Card from "./Card";
import {
  deleteCard,
  changeLikeCard,
  showFilterList,
} from "../reducers/cardSlice";

import { useSelector, useDispatch } from "react-redux";

const FiltersCard = () => {
  const dispatch = useDispatch();
  const { watchList, cardsList } = useSelector((state) => state.cards);
  useEffect(() => {
    dispatch(showFilterList());
  }, [cardsList]);

  return (
    <div>
      {watchList.length < 1 && <h1>Пока еще нет лайкнутых картинок...</h1>}
      {watchList.map((card) => (
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

export default FiltersCard;
