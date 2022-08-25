import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Card = ({ card, remove, like }) => {
  const dispatch = useDispatch();

  function changeLike() {
    dispatch(like(card.id));
  }

  return (
    <div className={card.like ? "card like" : "card"}>
      <h3>
        {card.id} - {card.title}
      </h3>
      <img src={card.url} alt=""></img>
      <div className="div-btns">
        <button
          className={card.like ? "btn-unlikes" : "btn-likes"}
          onClick={changeLike}
        ></button>
        <button
          className="btn-delete"
          onClick={() => dispatch(remove(card.id))}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Card;
