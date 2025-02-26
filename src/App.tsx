import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { PATH_ABOUT_COMPANY, PATH_ACCOUNT, PATH_BASKET, PATH_CATALOG, PATH_HOME, PATH_LIKED, PATH_SHOP } from "./routes/routes";
import { useEffect } from "react";
import { getNewsThunk } from "./features/news/news";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { getProductsThunk } from "./features/products/products";
import Shop from "./pages/Shop/Shop";
import Basket from "./pages/Basket/Basket";
import Catalog from "./pages/Catalog/Catalog";
import Account from "./pages/Account/Account";
import { Layout } from "./layout/layout";
import Liked from "./pages/Liked/Liked";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import { getPromotionThunk } from "./features/promotion/promotion";

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNewsThunk());
    dispatch(getProductsThunk());
    dispatch(getPromotionThunk());
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path={PATH_HOME} element={<Home />} />
        <Route path={PATH_SHOP} element={<Shop />} />
        <Route path={`${PATH_BASKET}/*`} element={<Basket />} />
        <Route path={`${PATH_CATALOG}/*`} element={<Catalog />} />
        <Route path={`${PATH_ACCOUNT}/*`} element={<Account />} />
        <Route path={PATH_LIKED} element={<Liked />} />
        <Route path={`${PATH_ABOUT_COMPANY}/*`} element={<AboutCompany />} />
      </Routes>
    </Layout>
  );
}

export default App;
