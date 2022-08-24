import React from "react";

const Card = ({ card }) => {
  return (
    <div>
      <h3>
        {card.id} - {card.title}
      </h3>
      <img src={card.url} alt=""></img>
      <div>
        <button>Like</button>
      </div>
    </div>
  );
};

export default Card;
