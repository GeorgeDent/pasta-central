import Header from "./components/Header";
import Cart from "./components/UI/Cart/Cart";
import { useState } from "react";
import "./App.css";
import Pasta from "./components/Pasta";
import CartProvider from "./components/Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Pasta />
      </main>
    </CartProvider>
  );
}

export default App;
