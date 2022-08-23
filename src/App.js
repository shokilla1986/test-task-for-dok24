import "./App.css";
import Card from "./components/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCards } from "./reducers/actionCreator";

function App() {
  const dispatch = useDispatch();
  const { cardsList } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return <div className="App">{JSON.stringify(cardsList)}</div>;
}

export default App;
