import { Layout } from "./layout/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { PATH_HOME } from "./routes/routes";
import { useEffect } from "react";
import { getNewsThunk } from "./features/news/news";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { getProductsThunk } from "./features/products/products";

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
      </Routes>
    </Layout>
  );
}

export default App;
