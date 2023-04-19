// importing Essential Libraries

import { useState, useEffect, createContext } from "react";
import axios from "axios";
import "./App.css";
import "./components/Footer.css";
import { Header } from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { Products } from "./components/Products";
import { Checkout } from "./components/Checkout";
import { Subs } from "./components/Subs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
// import "bootstrap/dist/css/bootstrap.min.css";
import Payment from "./components/Payment";
import "./index.css";

// Default App.js Main function
export default function App() {
  const [cartItems, updateCartItems] = useState([]);

  // fetching all food items using Axios
  async function getFoodItems() {
    const foodData = await axios.get("http://localhost:8080/cartItems/getAll");
    console.log(foodData.data.results);
    updateCartItems(foodData.data.results);
    console.log(cartItems);
  }

  // using UsEffect Hook to get the food items
  useEffect(() => {
    getFoodItems();
  }, []);

  // Returning the Routes and path of the cart items
  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/home"
              exact={true}
              render={(props) => (
                <div>
                  <Header cartItems={cartItems} />
                  <Products
                    cartItems={cartItems}
                    updateCartItems={updateCartItems}
                  />
                </div>
              )}
            />

            <PrivateRoute
              path="/"
              exact
              render={(props) => (
                <div>
                  <Header cartItems={cartItems} />
                  <Products
                    cartItems={cartItems}
                    updateCartItems={updateCartItems}
                  />
                </div>
              )}
            />
            <Route path="/signup" exact render={() => <Signup />} />
            <Route path="/login" exact render={() => <Login />} />
            <Route
              path="/checkout"
              exact
              render={(props) => (
                <div>
                  <Header cartItems={cartItems} />
                  <Checkout cartItems={cartItems} getFoodItems={getFoodItems} />
                </div>
              )}
            />
            <Route
              path="/data/:id"
              render={(props) => (
                <div>
                  <Header cartItems={cartItems} />
                  <Subs
                    cartItems={cartItems}
                    getFoodItems={getFoodItems}
                    {...props}
                  />
                </div>
              )}
            />
            <Route
              path="/payment"
              exact={true}
              render={(props) => (
                <div>
                  <Header cartItems={cartItems} />
                  <Payment cartItems={cartItems} getFoodItems={getFoodItems} />
                </div>
              )}
            />
          </Switch>

          <Footer />
        </div>
      </Router>
    </div>
  );
}
