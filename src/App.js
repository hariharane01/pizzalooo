import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Productcard from "./Components/Cards/ProductCard";
import Cart from "./Pages/Cart";
import Navigation from "./Components/NAVBAR/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AllProduct" element={<Productcard />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
