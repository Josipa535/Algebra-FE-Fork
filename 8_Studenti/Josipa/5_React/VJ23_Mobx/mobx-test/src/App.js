import logo from "./logo.svg";
import "./App.css";
import GroceryAdd from "./components/GroceryAdd";

function App() {
  return (
    <div className="App">
      <h1>My Groceries - Powerd by Mobx!</h1>
      <GroceryAdd />
      <p>GroceryList</p>
    </div>
  );
}

export default App;
