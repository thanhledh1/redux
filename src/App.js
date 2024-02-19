import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { NAP_TIEN, RUT_TIEN } from "./redux/action";


function App() {
  const dispatch = useDispatch();
  const deposit_amount = useSelector((state) => state.deposit_amount);
  const withdraw_amount = useSelector((state) => state.withdraw_amount);
  const handleDeposit = () => {
    dispatch({
      type: NAP_TIEN,
      payload: 10
    });
  }
  const handleDeposit1 = () => {
    dispatch({
      type: RUT_TIEN,
      payload: -10
    });
  }
  return (
    <div className="App">
      <h1>nap: {deposit_amount}</h1>
      <h1>rut: {withdraw_amount}</h1>
      <button onClick={handleDeposit}>Nap</button>
      <button onClick={handleDeposit1}>rut</button>

    </div>
  );
}

export default App;
