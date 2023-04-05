import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderDefault from "./components/layoutDefault/header/header";
import HeaderInner from "./components/layoutInner/header/header";
import FooterDefault from "./components/layoutDefault/footer/footer"
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HeaderDefault />} /> */}
        <Route path="/inner" element={<HeaderInner />} />
        <Route path="" element={<FooterDefault />} />
      </Routes>
    </Router>

  );
}

export default App;
