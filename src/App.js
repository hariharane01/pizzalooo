import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Productcard from "./Components/Cards/ProductCard";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  exact path="/AllProduct" element={<Productcard/>} />

        <Route path="/cart" element={<Cart/>} />

        <Route path="/orders "  />
      </Routes>
    </div>
  );
}

export default App;
