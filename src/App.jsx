import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import PizzaItem from "./components/PizzaItem";
import { CartContextProvider } from "./components/Store/CartContext";
import { UserActionContextProvider } from "./components/Store/UserActionsContext";

function App() {
  return (
    <UserActionContextProvider>
    <CartContextProvider>
      <Header />
      <Homepage/>
      <PizzaItem />
      <Cart/>
      <Footer/>
      <Checkout/>
    </CartContextProvider>
    </UserActionContextProvider>
  );
}

export default App;
