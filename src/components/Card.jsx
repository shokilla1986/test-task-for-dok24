import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { changeLike } from "../reducers/cardSlice";

const Card = () => {
  const like = useSelector((state) => state.card.like);
  // const dispatch = useDispatch();

  return (
    <div>
      <img src="" alt=""></img>
      <div>information</div>

      {/* <button onClick={() => dispatch(changeLike())}>Like</button> */}
      <span>like: {like ? "true" : "false"}</span>
    </div>
  );
};

export default Card;
