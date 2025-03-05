import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import {
  PATH_ABOUT_COMPANY,
  PATH_ACCOUNT,
  PATH_ADDITIONAL_INFO_PRODUCT,
  PATH_BASKET,
  PATH_CATALOG,
  PATH_DELIVERY,
  PATH_FEEDBACK,
  PATH_HOME,
  PATH_HOW_TO_MAKE_ORDER,
  PATH_LIKED,
  PATH_MAP_WEBSITE,
  PATH_NEWS,
  PATH_PAYMENT_BOOKING,
  PATH_POLITICS,
  PATH_PROMOTION,
  PATH_SHOP,
} from "./routes/routes";
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
import Promotion from "./pages/Promotion/Promotion";
import News from "./pages/News/News";
import Feedback from "./pages/Feedback/Feedback";
import Politics from "./pages/Politics/Politics";
import Delivery from "./pages/Delivery/Delivery";
import PaymentBooking from "./pages/PaymentBooking/PaymentBooking";
import HowToMakeOrder from "./pages/HowToMakeOrder/HowToMakeOrder";
import MapWebsite from "./pages/MapWebsite/MapWebsite";
import AdditionalInfoProduct from "./pages/AdditionalInfoProduct/AdditionalInfoProduct";

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
        <Route path={`${PATH_PROMOTION}/*`} element={<Promotion />} />
        <Route path={`${PATH_NEWS}/*`} element={<News />} />
        <Route path={`${PATH_FEEDBACK}`} element={<Feedback />} />
        <Route path={`${PATH_POLITICS}`} element={<Politics />} />
        <Route path={`${PATH_DELIVERY}`} element={<Delivery />} />
        <Route path={`${PATH_PAYMENT_BOOKING}`} element={<PaymentBooking />} />
        <Route
          path={`${PATH_HOW_TO_MAKE_ORDER}/*`}
          element={<HowToMakeOrder />}
        />
        <Route path={`${PATH_MAP_WEBSITE}`} element={<MapWebsite />} />
        <Route path={`${PATH_ADDITIONAL_INFO_PRODUCT}/:id/*`} element={<AdditionalInfoProduct />} />
      </Routes>
    </Layout>
  );
}

export default App;
