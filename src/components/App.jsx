import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { GoodsList } from "pages/goodsList";
import { ProductDetails } from "pages/productDetails";
import { Profile } from "pages/profile";
import { Basket } from "pages/basket";

export const App = () => {

  return (<>
  {/* <ThemeProvider theme={theme}>
    <Header handleSearchSubmit={handleSearchSubmit}/>

    <Main>
      <PageContainer>
        <GalleryProducts shownGoods={shownGoods}/>
        <Pagination
          perPage={perPage}
          array={filteredGoods}
          giveCuttedArray={giveCuttedArray}
        />
      </PageContainer>
    </Main>
  
    <Footer />
  </ThemeProvider> */}
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
