import React, { useContext } from "react";
import logo from "../assets/Image/pizzalofo.jpg";
import Button from "./UI/Button";
import CartContext from "./Store/CartContext";
import UserActionContext from "./Store/UserActionsContext";

const Header = () => {
  const cartctx = useContext(CartContext);
  const userctx = useContext(UserActionContext);

  function handleShowCart() {
    userctx.showCart();
  }
  const totalCartTotal = cartctx.items.reduce((totalitems, item) => {
    return totalitems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo"></img>
        <h1>Pizza Party</h1>
      </div>
      <div>
        <nav>
          <Button textOnly onClick={handleShowCart}>
            Cart ({totalCartTotal})
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
