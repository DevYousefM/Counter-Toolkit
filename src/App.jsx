import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  increamentByAmount,
} from "./Store/counterSlice";
import { useRef } from "react";
function App() {
  const count = useSelector((state) => state.counterApp.value);
  const dispatch = useDispatch();
  const amount = useRef(0);
  return (
    <div className="App">
      <p>{count}</p>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            dispatch(increament());
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            dispatch(decreament());
          }}
        >
          Decrease
        </button>
      </div>
      <input type="number" ref={amount} />
      <button
        onClick={() => {
          dispatch(increamentByAmount(amount.current.value));
          amount.current.value = "";
        }}
      >
        Add Value
      </button>
    </div>
  );
}

export default App;
