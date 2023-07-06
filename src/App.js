import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./WelcomePage/Welcome";
import { useState } from "react";
import Subscription from "./Subscription/Subscription";
import Navbar from "./WelcomePage/navBar/Navbar";

import styles from "./App.module.css";
import ShopWelcome from "./Shop/ShopWelcome/ShopWelcome";
import Books from "./Shop/ShopPurchase/Books";
import { Outlet } from "react-router-dom";
import Figurine from "./Shop/ShopPurchase/Figurines";

import Movies from "./Shop/ShopPurchase/Movies";

import { CartProvider } from "./Shop/cart-ctx";
import Cart from "./Shop/ShopPurchase/Cart";
import SignUp from "./loginUser/SignUp";
import Form from "./Contacts/Form";
import Subscribed from "./Subscription/Subscribed/Subscribed";
import PostPurchase from "./Shop/ShopPurchase/PostPurchase";

window.addEventListener("beforeunload", function (event) {
  if (event.type === "beforeunload") {
    localStorage.clear();
  }
});
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} className={styles.tman} exact />
          <Route path="/login" element={<SignUp />} />
          <Route path="/contacts" element={<Form />} />

          <Route path="/subscribeGotham" element={<Outlet />}>
            <Route index element={<Subscription />} />
            <Route
              path="subBoughtGN"
              element={
                <Subscribed
                  tier={"Gotham Novice"}
                  badge={"/public/ShopWelcomeImages/gothamnovice.png"}
                />
              }
            />
            <Route
              path="subBoughtDK"
              element={
                <Subscribed
                  tier={"Elite Dark Knight"}
                  badge={"/public/ShopWelcomeImages/DarkKnight.png"}
                />
              }
            />
            <Route
              path="subBoughtAL"
              element={<Subscribed tier={"Arkham Legend"} />}
              badge={"/public/ShopWelcomeImages/ArkhamLegend.png"}
            />
          </Route>

          <Route path="/shop" element={<Outlet />}>
            <Route index element={<ShopWelcome />} />
            <Route path="books" element={<Books />} />
            <Route path="figurine" element={<Figurine />} />
            <Route path="movies" element={<Movies />} />
          </Route>
          <Route path="/cart" element={<Outlet />}>
            <Route index element={<Cart />} />
            <Route path="postpurchase" element={<PostPurchase />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
