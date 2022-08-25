import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import FiltersCard from "./components/FiltersCard";
import { useDispatch } from "react-redux";
import { fetchCards } from "./reducers/actionCreator";

function App() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  function changeShow() {
    setShow(!show);
  }

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return (
    <div className="App">
      <>
        <button className="btn-show" onClick={changeShow}>
          {show ? "show all" : "Show likes"}
        </button>
      </>
      {show ? <FiltersCard /> : <CardList />}
    </div>
  );
}

export default App;
