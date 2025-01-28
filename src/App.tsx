import { Layout } from "./layout/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { PATH_HOME } from "./routes/routes";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={PATH_HOME} element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
