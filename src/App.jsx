import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import PizzaItem from "./components/PizzaItem";
import { CartContextProvider } from "./components/Store/CartContext";
import { UserActionContextProvider } from "./components/Store/UserActionsContext";

function App() {
  return (
    <UserActionContextProvider>
    <CartContextProvider>
      <Header />
      <PizzaItem />
      <Cart/>
      <Checkout/>
    </CartContextProvider>
    </UserActionContextProvider>
  );
}

export default App;
