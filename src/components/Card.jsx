import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Card = ({ card, remove }) => {
  let [like, setLike] = useState(false);
  const dispatch = useDispatch();

  function changeLike() {
    setLike((prev) => !prev);
  }

  return (
    <div className={like ? "card like" : "card"}>
      <h3>
        {card.id} - {card.title}
      </h3>
      <img src={card.url} alt=""></img>
      <div className="div-btns">
        <button
          className={like ? "btn-unlikes" : "btn-likes"}
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
