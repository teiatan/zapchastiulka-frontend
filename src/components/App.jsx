import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { GoodsList } from "pages/goodsList";
import { ProductDetails } from "pages/productDetails";
import { Profile } from "pages/profile";
import { Basket } from "pages/basket";

export const App = () => {
  return (<>
  <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<GoodsList/>} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/profile" element={<Profile />} />
    </Route>
  </Routes>  
  </>);
};
