import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderDefault from "./components/layoutDefault/header/header";
import HeaderInner from "./components/layoutInner/header/header";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderDefault />} />
        <Route path="/inner" element={<HeaderInner />} />
      </Routes>
    </Router>
  );
}

export default App;
