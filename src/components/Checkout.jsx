import React, { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "./Store/CartContext.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import UserActionContext from "./Store/UserActionsContext.jsx";

const Checkout = () => {
  const userctx = useContext(UserActionContext);
  const cartctx = useContext(CartContext);

  const totalPrice = cartctx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function handleClose() {
    userctx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd=new FormData(event.target);
    const userdata=Object.fromEntries(fd.entries());
  }
  return (
    <Modal open={userctx.action === 'checkout'} onClose={handleClose}>
    <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : ₹{totalPrice}</p>
        <Input label="Full Name" type="text" id="full-name"></Input>
        <Input label="email" type="email" id="email"></Input>
        <Input label="Street" type="text" id="street"></Input>
        <div className="control-row">
          <Input label="Postal code" type="text" id="postal-code"></Input>
          <Input label="City" type="text" id="city"></Input>
        </div>
        <p className="modal-actions">
          <Button textOnly type="button" onClick={handleClose}>
            Close
          </Button>
          <Button>Order Now</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
