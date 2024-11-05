import React, { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "./Store/CartContext.jsx";
import Button from "./UI/Button.jsx";
import UserActionContext from "./Store/UserActionsContext.jsx";
import CartItem from "./CartItem.jsx";

const Cart = () => {
  const cartctx = useContext(CartContext);
  const userctx = useContext(UserActionContext);

  const totalPrice = cartctx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function handleHideCart() {
    userctx.hideCart();
  }

  function handleShowCheckout() {
    userctx.showCheckout();
  }
  return (
    <Modal
      className="cart"
      open={userctx.action === "cart"}
      onClose={ handleHideCart}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartctx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.title}
            price={item.price}
            quantity={item.quantity}
            onAdd={() => cartctx.addItem(item)}
            onDelete={() => cartctx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{totalPrice}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        {cartctx.items.length > 0 && (
          <Button onClick={handleShowCheckout}>Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
