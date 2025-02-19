import { Layout } from "./layout/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { PATH_BASKET, PATH_CATALOG, PATH_HOME, PATH_SHOP } from "./routes/routes";
import { useEffect } from "react";
import { getNewsThunk } from "./features/news/news";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { getProductsThunk } from "./features/products/products";
import Shop from "./pages/Shop/Shop";
import Basket from "./pages/Basket/Basket";
import Catalog from "./pages/Catalog/Catalog";

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNewsThunk());
    dispatch(getProductsThunk());
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path={PATH_HOME} element={<Home />} />
        <Route path={PATH_SHOP} element={<Shop />} />
        <Route path={`${PATH_BASKET}/*`} element={<Basket />} />
        <Route path={`${PATH_CATALOG}/*`} element={<Catalog />} />
      </Routes>
    </Layout>
  );
}

export default App;
