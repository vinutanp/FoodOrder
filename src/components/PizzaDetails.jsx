import { useContext } from "react";
import Button from "./UI/Button";
import CartContext from "./Store/CartContext";

const PizzaDetails = ({ meal }) => {
  const cartCtx = useContext(CartContext);
  function handleAddPizza() {
    cartCtx.addItem(meal);
  }
  return (
    <li className="meal-item">
      <article>
        <img src={meal.image} alt="pizza image" />
        <div>
          <h3>{meal.title}</h3>
          <p className="meal-item-price">₹{meal.price}</p>
          <p className="meal-item-description">{meal.desc}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddPizza}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default PizzaDetails;
