import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/layout";
import { ProductsGallery } from "components/pages/productsGallery";
import { ProductDetails } from "components/pages/productDetails";
import { Profile } from "components/pages/profile";
import { Basket } from "components/pages/basket";
import { AdminPage } from "components/pages/admin";
import { NotFound } from "components/pages/notFound";

export const App = () => {
  return (<>
  <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<ProductsGallery />} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>  
  </>);
};
