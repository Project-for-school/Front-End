import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LayoutInner from "./components/layoutInner";
import { publicRoutes } from "./routes";
function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.Layout === null ? Fragment : LayoutInner;
          const Page = route.component;
          return (
            <Route
              key={index}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
              path={route.path}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
