import React from "react";
import Cart from './components/Cart';
import OrderByFilter from './components/OrderByFilter';
import ShoppingArea from './components/ShoppingArea';
import {CartProvider} from './CartContext';
import SizeFilter from "./components/SizeFilter";

function App() {


  return (
    <CartProvider>
      <div className="main-area">
        <div className="size-filter">
          <SizeFilter />
        </div>
        <div className="inside-area">
          <div className="order-by-filter">
            <OrderByFilter />
          </div>
          <div className="shopping-area">
            <ShoppingArea />
          </div>
        </div>
        <div className="cart">
            <Cart />
          </div>
      </div>
    </CartProvider>
  );
}

export default App;
