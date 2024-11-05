import products from "../assets/data.js";
import PizzaDetails from "./PizzaDetails.jsx";

const PizzaItem = () => {
  return (
    <ul id="meals">
      {products.map((meal) => (
        <PizzaDetails key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default PizzaItem;
