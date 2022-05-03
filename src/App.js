import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import {
  getCurrentUser
} from "./utils/firebase/firebase.utils";

import { GlobalStyles } from "./global.styles";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then(user => console.log(user));
  }, [dispatch]);

  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="shop/*" element={<Shop/>}/>
          <Route path="auth" element={<Authentication/>}/>
          <Route path="checkout" element={<Checkout/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
