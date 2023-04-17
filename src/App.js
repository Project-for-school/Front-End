import { Fragment } from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import LayoutInner from "./components/layoutInner";
import LayoutDefault from "./components/layoutDefault";
import HomePage from "./features/homePgae/components/homePage";
import { publicRoutes } from "./routes";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <LayoutDefault>
                <HomePage />
              </LayoutDefault>
            }
          />
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : LayoutInner;
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
      </div>
    </Router>
  );
}

export default App;
