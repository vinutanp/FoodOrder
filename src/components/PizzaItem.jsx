import products from "../assets/data.js";
import PizzaDetails from "./PizzaDetails.jsx";

const PizzaItem = () => {
  return (
    <>
    <h3 style={{padding: '2rem',
        color: 'white',
        fontSize: '2rem',
        textAlign: 'center'}}>
    Order Our Best Food Options
    </h3>
    <ul id="meals">
      {products.map((meal) => (
        <PizzaDetails key={meal.id} meal={meal} />
      ))}
    </ul>
    </>
  );
};

export default PizzaItem;
